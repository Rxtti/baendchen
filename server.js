const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let orders = []; // Hier werden Bestellungen gespeichert (nur temporär)

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/order', (req, res) => {
  const { name, address } = req.body;
  const orderText = `Name: ${name}, Adresse: ${address}\n`;

  // Schreibe die Bestellung in die Datei 'orders.txt' im gleichen Ordner wie server.js
  const filePath = path.join(__dirname, 'orders.txt');
  fs.appendFile(filePath, orderText, (err) => {
    if (err) {
      console.error('Fehler beim Speichern der Bestellung:', err);
      return res.status(500).send('Fehler beim Speichern der Bestellung');
    }
    console.log('Neue Bestellung gespeichert:', orderText.trim());
    res.send('Danke für deine Bestellung! Dein Bändchen ist reserviert.');
  });
});
  orders.push({ name, address, date: new Date() });
  console.log('Neue Bestellung:', name, address);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
