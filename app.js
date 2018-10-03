const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mysql = require('mysql');
const router = express.Router();
const registerRouter = require('./routes/register');

// Create connection to mySql
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySql');
});

app.use(express.static(path.join(__dirname, './public')));
app.use('/', router);
app.use('/register', registerRouter);

app.set('views', './public/views');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  res.render('home');
});

app.listen(port, function() {
  console.log('server is running on port ' + port);
})
