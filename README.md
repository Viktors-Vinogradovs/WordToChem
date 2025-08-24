# Ķīmisko Elementu Vārdu Spēle (Chemical Elements Word Game)

** [Play Live Demo](https://viktorsvinogradovs2000.pythonanywhere.com/)**

A fun and educational web-based game that combines chemistry knowledge with Latvian vocabulary. Players decode chemical element names to form Latvian words, then practice element symbols in a follow-up challenge.

## Game Overview

This interactive game consists of two engaging phases:

### Phase 1: Word Decoding Challenge
- Players receive a list of shuffled chemical element names in Latvian
- The goal is to figure out which Latvian word can be spelled using the chemical symbols of these elements
- Features a dynamic timer based on word difficulty (50-90 seconds)
- Includes pause/resume functionality

### Phase 2: Element Symbol Practice
- After an incorrect guess in Phase 1, players enter a symbol practice mode
- Players must correctly identify chemical element symbols from their Latvian names
- Requires 10 consecutive correct answers to return to the main game
- Incorrect answers reset the streak counter


## 🛠️ Technical Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Data Processing**: Pandas for CSV handling
- **Session Management**: Flask sessions for game state
- **Styling**: Custom responsive CSS

## 📁 Project Structure

```
├── app.py                          # Main Flask application
├── Valid_Latvian_Nouns.csv        # Database of valid Latvian nouns (~1,900 words)
├── templates/
│   ├── index.html                  # Main game interface
│   ├── result.html                 # Game result page
│   └── element_symbol_practice.html # Symbol practice interface
├── static/
│   ├── styles.css                  # Game styling
│   └── script.js                   # Client-side timer logic
├── README.md                       # This file
└── LICENSE                         # MIT License
```

## 🚦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Viktors-Vinogradovs/WordToChem.git
   cd WordToChem
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv .venv
   
   # On Windows:
   .venv\Scripts\activate
   
   # On macOS/Linux:
   source .venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install flask pandas
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the game**
   Open your browser and navigate to `http://localhost:5000`

## Game Rules

### Main Game
- Decode the chemical element names to form a Latvian word
- Time limits: 50s (≤6 letters), 60s (7-8 letters), 90s (9+ letters)
- Use the pause button if you need a break
- Enter your guess in the text field

### Symbol Practice
- Identify the correct chemical symbol for each element name
- Must achieve 10 consecutive correct answers
- Wrong answers reset your progress
- Successfully completing this mode returns you to the main game

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Perfect for**: Students learning chemistry, Latvian language learners, puzzle enthusiasts, and educators looking for interactive chemistry tools!
