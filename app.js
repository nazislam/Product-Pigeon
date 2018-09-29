const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const router = express.Router();
const registerRouter = require('./routes/register');

app.use(express.static(path.join(__dirname, './public')));
app.use('/', router);
app.use('/register', registerRouter);

app.set('views', './public/views');
app.set('view engine', 'pug');

router.get('/', function(req, res) {
  res.send('homepage');
});


app.listen(port, function() {
  console.log('server is running on port ' + port);
})
