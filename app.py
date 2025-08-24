import random
import os
from collections import Counter
from flask import Flask, render_template, request, session, redirect, url_for
import pandas as pd

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure random key

# Dictionary mapping chemical symbols to their Latvian names
chemical_symbols_lv = {
    "H": "Ūdeņradis",
    "He": "Hēlijs",
    "Li": "Litijs",
    "Be": "Berilijs",
    "B": "Bors",
    "C": "Ogleklis",
    "N": "Slāpeklis",
    "O": "Skābeklis",
    "F": "Fluors",
    "Ne": "Neons",
    "Na": "Nātrijs",
    "Mg": "Magnijs",
    "Al": "Alumīnijs",
    "Si": "Silīcijs",
    "P": "Fosfors",
    "S": "Sērs",
    "Cl": "Hlors",
    "Ar": "Argons",
    "K": "Kālijs",
    "Ca": "Kalcijs",
    "Sc": "Skandijs",
    "Ti": "Titāns",
    "V": "Vanādijs",
    "Cr": "Hroms",
    "Mn": "Mangāns",
    "Fe": "Dzelzs",
    "Co": "Kobalts",
    "Ni": "Niķelis",
    "Cu": "Varš",
    "Zn": "Cinks",
    "Ga": "Gallijs",
    "Ge": "Germānijs",
    "As": "Arsēns",
    "Se": "Selēns",
    "Br": "Broms",
    "Kr": "Kriptons",
    "Rb": "Rubīdijs",
    "Sr": "Stroncijs",
    "Y": "Itrijs",
    "Zr": "Cirkonijs",
    "Nb": "Niobijs",
    "Mo": "Molibdēns",
    "Tc": "Tehnēcijs",
    "Ru": "Rutēnijs",
    "Rh": "Rodijs",
    "Pd": "Pallādijs",
    "Ag": "Sudrabs",
    "Cd": "Kadms",
    "In": "Indijs",
    "Sn": "Alva",
    "Sb": "Antimons",
    "Te": "Telūrs",
    "I": "Jods",
    "Xe": "Ksenons",
    "Cs": "Cēzijs",
    "Ba": "Bārijs",
    "La": "Lantāns",
    "Ce": "Cērijs",
    "Pr": "Praziodīms",
    "Nd": "Neodīms",
    "Pm": "Prometijs",
    "Sm": "Samārijs",
    "Eu": "Eiropijs",
    "Gd": "Gadolīnijs",
    "Tb": "Terbijs",
    "Dy": "Disprozijs",
    "Ho": "Holmijs",
    "Er": "Erbijs",
    "Tm": "Tulijs",
    "Yb": "Iterbijs",
    "Lu": "Lutēcijs",
    "Hf": "Hafnijs",
    "Ta": "Tantals",
    "W": "Volframs",
    "Re": "Renijs",
    "Os": "Osmijs",
    "Ir": "Irīdijs",
    "Pt": "Platīns",
    "Au": "Zelts",
    "Hg": "Dzīvsudrabs",
    "Tl": "Tallijs",
    "Pb": "Svins",
    "Bi": "Bismuts",
    "Po": "Polonijs",
    "At": "Astats",
    "Rn": "Radons",
    "Fr": "Francijs",
    "Ra": "Rādijs",
    "Ac": "Aktīnijs",
    "Th": "Torijs",
    "Pa": "Protaktīnijs",
    "U": "Urāns",
    "Np": "Neptūnijs",
    "Pu": "Plutonijs",
    "Am": "Amerīcijs",
    "Cm": "Kirijs",
    "Bk": "Berklijs",
    "Cf": "Kalifornijs",
    "Es": "Einšteinijs",
    "Fm": "Fermijs",
    "Md": "Mendeļejevijs",
    "No": "Nobēlijs",
    "Lr": "Lorencijs",
    "Rf": "Rezerfordijs",
    "Db": "Dubnijs",
    "Sg": "Sīborgijs",
    "Bh": "Borijs",
    "Hs": "Hasijs",
    "Mt": "Mejtnerijs",
    "Ds": "Darmštadijs",
    "Rg": "Rentgenijs",
    "Cn": "Kopernicijs",
    "Nh": "Nihonijs",
    "Fl": "Flerovijs",
    "Mc": "Moskovijs",
    "Lv": "Livermorijs",
    "Ts": "Tenesīnijs",
    "Og": "Oganesons"
}

# Create the symbols dictionary mapping first letters to lists of symbols
symbols = {}
for symbol in chemical_symbols_lv.keys():
    first_letter = symbol[0].lower()
    symbols.setdefault(first_letter, []).append(symbol)

def get_resource_path(relative_path):
    """Get absolute path to resource."""
    base_path = os.path.abspath(".venv")
    return os.path.join(base_path, relative_path)

# New `word_anagram` function to find valid combinations
def word_anagram(word, current_combination=None):
    # Initialize the current_combination list during the first call
    if current_combination is None:
        current_combination = []

    # If the word is empty, return the current combination
    if len(word) == 0:
        return [current_combination]

    combinations = []

    # Check if the single letter is a key in the elements dictionary
    if word[0].capitalize() in chemical_symbols_lv:
        combinations += word_anagram(word[1:], current_combination + [word[0].capitalize()])

    # Check if the first two letters are a key in the elements dictionary (if at least 2 characters remain)
    if len(word) >= 2 and word[0:2].capitalize() in chemical_symbols_lv:
        combinations += word_anagram(word[2:], current_combination + [word[0:2].capitalize()])

    return combinations

def get_valid_words_from_csv(csv_file):
    try:
        # Read the CSV file
        df = pd.read_csv(csv_file, header=None, encoding='utf-8')
        words = df.iloc[:, 0].dropna().astype(str).tolist()
        # Filter words: remove non-alphabetic characters and convert to lowercase
        valid_words = [word.strip().lower() for word in words if word.isalpha()]
        return valid_words
    except Exception as e:
        print(f"Error reading CSV file: {e}")
        return []

def pick_random_word(valid_words):
    if not valid_words:
        print("No valid words available.")
        return None, None
    # Shuffle the list to ensure randomness
    random.shuffle(valid_words)
    for word in valid_words:
        symbols_list = word_anagram(word)
        if symbols_list:
            return word, symbols_list[0]  # Take only the first valid combination
    print("Couldn't find a valid word with a symbol combination.")
    return None, None

# Load valid words once at startup
csv_file = get_resource_path('.venv/Valid_Latvian_Nouns.csv')
valid_words = get_valid_words_from_csv(csv_file)

@app.route('/', methods=['GET', 'POST'])
def index():
    if 'word' not in session:
        # Start a new game
        word, symbols_list = pick_random_word(valid_words)
        if not word or not symbols_list:
            return "Error: Could not find a valid word."
        session['word'] = word
        session['symbols'] = symbols_list

        # Adjust time limit based on word length
        word_length = len(word)
        if word_length <= 6:
            session['remaining_time'] = 50
        elif word_length <= 8:
            session['remaining_time'] = 60
        else:
            session['remaining_time'] = 90

    word = session['word']
    symbols_list = session['symbols']

    # Get the chemical element names
    names = [chemical_symbols_lv[symbol] for symbol in symbols_list]

    # Shuffle the names
    random.shuffle(names)

    return render_template('index.html', element_names=names, remaining_time=session['remaining_time'])

@app.route('/check_answer', methods=['POST'])
def check_answer():
    user_input = request.form.get('guess', '').strip().lower()
    word = session.get('word', '')

    if user_input == word:  # Correct guess
        message = "Pareizi! Jūs uzminējāt vārdu."
        # Clear session for a new word game
        session.pop('word', None)
        session.pop('symbols', None)
        session.pop('remaining_time', None)
        return render_template('result.html', message=message, correct=True, time_out=False)

    else:  # Incorrect guess -> Show wrong answer message
        message = f"Nepareizi! Pareizais vārds bija '{word.upper()}'."
        return render_template('result.html', message=message, correct=False, time_out=False, next_step='element_symbol_practice')

@app.route('/new_game')
def new_game():
    # Clear the session and reset for a new word game
    session.clear()
    return redirect(url_for('index'))

@app.route('/element_symbol_practice')
def element_symbol_practice():
    if 'symbols' not in session or not session['symbols']:
        session['symbols'] = list(chemical_symbols_lv.keys())
        random.shuffle(session['symbols'])
    if 'correct_guesses' not in session:
        session['correct_guesses'] = 0

    while session['symbols']:
        symbol = session['symbols'].pop()
        if symbol in chemical_symbols_lv:
            element_name = chemical_symbols_lv[symbol]
            session['current_symbol'] = symbol
            return render_template('element_symbol_practice.html', element_name=element_name, correct_guesses=session['correct_guesses'], total_guesses=10)

    # If no valid symbols are left, reset the symbols list
    session['symbols'] = list(chemical_symbols_lv.keys())
    random.shuffle(session['symbols'])
    return redirect(url_for('element_symbol_practice'))

@app.route('/check_practice_answer', methods=['POST'])
def check_practice_answer():
    user_input = request.form.get('symbol_guess', '').strip().capitalize()
    correct_symbol = session.get('current_symbol', '')
    correct_guesses = int(request.form.get('correct_guesses', 0))

    # Check if the player's answer is correct
    session['incorrect_answer'] = False
    if user_input == correct_symbol:
        correct_guesses += 1  # Increment the correct guess counter
    else:
        session['incorrect_answer'] = True
        correct_guesses = 0  # Reset the counter if the answer is wrong
        session['symbols'] = list(chemical_symbols_lv.keys())  # Reset symbols list
        random.shuffle(session['symbols'])  # Shuffle for next round

    # Store the updated correct guesses count in the session
    session['correct_guesses'] = correct_guesses
    session['correct_symbol'] = correct_symbol

    # Get the next symbol for the player to guess
    if 'symbols' in session and session['symbols']:
        symbol = session['symbols'].pop()  # Pop the next symbol from the list
        session['current_symbol'] = symbol
    else:
        # Reset the symbols list if exhausted
        session['symbols'] = list(chemical_symbols_lv.keys())
        random.shuffle(session['symbols'])
        symbol = session['symbols'].pop()
        session['current_symbol'] = symbol

    # Check if the player has achieved 10 correct answers in a row
    if correct_guesses >= 10:
        return redirect(url_for('new_game'))

    return render_template('element_symbol_practice.html', element_name=chemical_symbols_lv[symbol], correct_guesses=correct_guesses, total_guesses=10, incorrect_answer=session.get('incorrect_answer'), current_symbol=correct_symbol)

@app.route('/new_practice')
def new_practice():
    session.pop('symbols', None)
    session.pop('current_symbol', None)
    return redirect(url_for('element_symbol_practice'))

@app.route('/update_timer', methods=['POST'])
def update_timer():
    data = request.get_json()
    session['remaining_time'] = data.get('remaining_time', session.get('remaining_time', 0))
    return '', 204

@app.route('/time_out')
def time_out():
    word = session.get('word', '').upper()
    session.clear()
    return render_template('result.html', message=f"Laiks ir beidzies! Pareizais vārds bija '{word}'.", correct=False, time_out=True)

if __name__ == '__main__':
    app.run(debug=True)