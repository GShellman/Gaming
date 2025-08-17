const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Airline Manager running at http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
