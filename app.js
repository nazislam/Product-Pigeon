const express = require('express');
const app = express();
// const cors = require('cors');
const port = process.env.PORT || 3000;
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const registerRouter = require('./routes/register');
const profileRouter = require('./routes/profile');

const data_reviews = require('./data/reviews');
const config = require('./config');

// app.use(cors());


const options = {
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'main',
};

const db = mysql.createConnection(options);

db.connect(function(err) {
  if (err) throw err;
  //console.log('Connected to MySql');
  console.log('Connected to gcloud');
});

app.use(express.static(path.join(__dirname, './public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'secret' }));

require('./config/passport')(app);

app.use('/', router);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);

app.set('views', './public/views');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  if (req.user) {
    res.json({ message: 'user exists', user: req.user })
  } else {
    res.json({ message: 'user does not exist' })
  }
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
  res.json({ message: 'user logged out' })  ; 
  // res.redirect('/');
})


// CREATE TABLE ROUTES
app.get('/createtableuser', (req, res) => {
  let sql = 'create table User(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), userType VARCHAR(50), PRIMARY KEY(id))';
  let query = db.query(sql, (result) => {
    console.log(result);
    res.json({ message: 'User table has been created.' });
  })
});

app.get('/createtableproductowner', (req, res) => {
  let sql = 'create table ProductOwner(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
  let query = db.query(sql, (result) => {
    console.log(result);
    res.json({ message: 'ProductOwner table has been created.' });
  })
});

app.get('/createtableadvertiser', (req, res) => {
  let sql = 'create table Advertiser(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
  let query = db.query(sql, (result) => {
    console.log(result);
    res.json({ message: 'Advertiser table has been created.' });
  })
});

app.get('/createtablereview', (req, res) => {
  let sql = 'create table review(id int AUTO_INCREMENT, userId int, title VARCHAR(255), product VARCHAR(255), description VARCHAR(255), rating int, PRIMARY KEY(id))';
  let query = db.query(sql, (result) => {
    console.log(result);
    res.json({ message: 'review table has been created.' });
  })
});

app.get('/getreview', (req, res) => {
  console.log('in route /getreviews');
  let sql = 'select * from review';
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json({ message: result })
  });
});

app.get('/getproduct/:id', (req, res) => {
  console.log('--here--');
  let productId = req.params.id;
  console.log(productId);
  let sql = 'select * from products where id=?';
  let query = db.query(sql, productId, (err, result) => {
    console.log(result);
    res.json({ message: result })
  });
});

app.get('/getproduct/user/:userId', (req, res) => {
  let userId = req.params.userId;
  console.log(userId);
  let sql = 'select * from products where userId=?';
  let query = db.query(sql, userId, (err, result) => {
    console.log(result);
    res.json({ message: result })
  });
});

app.post('/review/submit', (req, res) => {
  console.log('---in here----');
  const data = req.body;
  console.log('DATA:', data);
  let sql = 'insert into review set ?';
  let query = db.query(sql, data, (err, result) => {
    console.log('result:', result);
    res.json({ message: result });
  });
});

app.get('/getproduct', (req, res) => {
  let sql = 'select * from products';
  let query = db.query(sql, (err, result) => {
    console.log(result);
    res.json({ message: result })
  });
});


app.post('/postreview', (req, res) => {
  console.log('in route /postreview');
  for (let i = 0; i < data_reviews.length; i++) {
    let sql = 'insert into review set ?';
    let query = db.query(sql, data_reviews[i], (err, result) => {
      console.log(result);
    });
  }
  res.json({ message: 'review table has been populated' });
});

app.post('/api/post/review', (req, res) => {
  const data = req.body;
  console.log('DATA:', data);
  let sql = 'insert into review set ?';
  let query = db.query(sql, data, (err, result) => {
    console.log('result:', result);
    res.json({ message: result });
  });
});

app.post('/api/post/product', (req, res) => {
  const data = req.body;
  console.log('DATA:', data);
  console.log(data.description);
  data.description.replace(/\n\r?/g, '<br />');
  let sql = 'insert into products set ?';
  let query = db.query(sql, data, (err, result) => {
    console.log('result:', result);
    res.json({ message: result });
  });
});

app.listen(port, function() {
  console.log('server is running on port ' + port);
})
