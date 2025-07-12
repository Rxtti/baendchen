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

  if (!name || !address) {
    return res.status(400).json({ success: false, message: 'Name und Adresse erforderlich.' });
  }

  orders.push({ name, address, date: new Date() });
  console.log('Neue Bestellung:', name, address);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
