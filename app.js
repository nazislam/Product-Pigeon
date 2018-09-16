const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, './public')));
app.use('/', router);

app.set('views', './public/views');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  res.render('index', {title: 'Homepage'});
});

router.get('/register', function(req, res) {
  res.render('register', {title: 'Register'});
});


app.listen(port, function() {
  console.log('server is running on port ' + port);
})
