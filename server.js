var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next){

  if (req.protocol === 'http') {
    console.log('1');
    next();
  } else {
      console.log('2');
    res.redirect('http://' + req.hostname + req.url);
     
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
