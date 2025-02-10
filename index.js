const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

// Si on lance l'application Angular.js avec ng serve
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/hello', (req, res) => {
  res.json([]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
