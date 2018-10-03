const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const registerRouter = require('./routes/register');

// Create connection to mySql
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'db01'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySql');
});

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'secret' }));

require('./config/passport')(app);

app.use('/', router);
app.use('/register', registerRouter);

app.set('views', './public/views');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/createdb', function(req, res) {
  let sql = 'CREATE DATABASE db01';
  db.query(sql, function(err, result) {
    if (err) throw err;
    coonsole.log(result);
    res.send('database created...');
  });
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
  console.log('user is loged out');
})




app.listen(port, function() {
  console.log('server is running on port ' + port);
})
