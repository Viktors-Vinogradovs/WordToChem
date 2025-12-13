# 🧪 Ķīmisko Elementu Spēle (Chemical Elements Word Game)

A fun and educational word puzzle game where players decode chemical element combinations to discover hidden Latvian words!

## 🎮 Play Now

**Live Demo:** [AWS Lambda](https://ugivkxyzf4vyfay4a2h3vvrnma0aanfc.lambda-url.eu-north-1.on.aws/)

## 📖 About

This game challenges players to identify words by decoding chemical element symbols. For example, the word "PARIS" could be represented by the elements:
- **P** (Fosfors) + **Ar** (Argons) + **I** (Jods) + **S** (Sērs)

The game features:
- **Time-based challenges** - Race against the clock to find the correct word
- **Adaptive difficulty** - Time limits adjust based on word length
- **Practice mode** - Learn chemical element symbols through interactive practice
- **905 Latvian nouns** - Extensive word database for varied gameplay

## 🚀 Features

- ⏱️ **Dynamic Timer** - Time adjusts based on word complexity
- 🔬 **118 Chemical Elements** - Complete periodic table with Latvian names
- 🎯 **Practice Mode** - Master element symbols before playing
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Modern UI** - Clean and intuitive interface

## 🛠️ Technology Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Hosting:** AWS EC2
- **Data:** Text file-based word storage (lightweight, no heavy dependencies)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd WordChemical
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run the application:**
```bash
python app.py
```

4. **Open your browser:**
Navigate to `http://localhost:5000`

## 📋 Requirements

```
Flask==3.0.0
flask-cors==4.0.0
requests
aws-wsgi
```

*Note: This project uses lightweight, built-in Python operations instead of pandas/numpy for better performance and smaller deployment size.*

## 🎯 How to Play

1. **Start the game** - You'll see a list of chemical element names in Latvian
2. **Decode the elements** - Figure out which word can be formed using these element symbols
3. **Submit your answer** - Type the word and submit before time runs out
4. **Practice mode** - If you get it wrong, practice element symbols to improve


## 📂 Project Structure

```
WordChemical/
├── app.py                      # Main Flask application
├── lambda_handler.py           # AWS Lambda handler
├── requirements.txt            # Python dependencies
├── Valid_Latvian_Nouns.txt     # Word database (905 nouns)
├── templates/                  # HTML templates
│   ├── index.html
│   ├── element_symbol_practice.html
│   └── result.html
└── static/                     # Static assets
    ├── styles.css
    └── script.js
```

## 🧠 Game Logic

The game uses a recursive algorithm to find valid chemical element combinations for each word:
- Checks single-letter elements (H, B, C, N, O, F, etc.)
- Checks two-letter elements (He, Li, Be, Ne, etc.)
- Returns all valid combinations
- Randomly selects words that can be represented by chemical elements

## 🌍 Deployment

The application is deployed on AWS EC2 and configured to run as a web service. For AWS Lambda deployment, use the included `lambda_handler.py`.

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

Created with ❤️ for chemistry and word game enthusiasts!

---

**Play now at:** [http://13.60.19.200/](http://13.60.19.200/)

