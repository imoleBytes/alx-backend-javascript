const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.set("Content-Type", "application/json");
  const payMethods = {
payment_methods: {
        credit_cards: true,
        paypal: false
}
  }
  res.send(payMethods);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
res.send(`Welcome ${userName}`);
  } else {
res.status(404).send();
  }
});



app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
