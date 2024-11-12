
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('.')); // Assurez-vous que vos fichiers HTML et CSS sont dans un dossier 'public'

// Initialiser la base de données SQLite
const db = new sqlite3.Database('../contact.sql/contact.sqlite', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
        db.run(`CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT
        )`);
    }
});

// Route pour recevoir les données du formulaire
app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;
    db.run(`INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`, [name, email, message], function(err) {
        if (err) {
            return console.error(err.message);
        }
        res.send('Formulaire soumis avec succès');
    });
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});