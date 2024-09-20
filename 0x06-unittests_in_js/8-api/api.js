const express = require('express');

const app = express();

const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})


app.listen(PORT, 'localhost', ()=> {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;