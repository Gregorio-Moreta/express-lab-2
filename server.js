// Require our dependencies
const express = require('express');
// Initialize the express app
const app = express();
// Define some routes and responses to those routes

app.get('/greeting/:name', (req, res) => {
  console.log('Oh hey! I got a request. Let me respond with something');
  res.send( 'Hello, it has been a long time, ' + req.params.name + ".");
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  console.log('requesting a tip percentage');
  res.send( "Thanks for dining with us! your total will be $" + req.params.total * (req.params.tipPercentage / 100) + ".");
});

app.listen(5000, () => {
  console.log('Express is listening for requests from the browser');
});

