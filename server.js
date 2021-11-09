var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors())
app.use(express.json()); 

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history()); 

app.use(express.urlencoded({ extended: true }));

//app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, 'public')));

global.__basedir = __dirname;

app.get('/', function (req, res) {
	  res.send('Hola PediApp');
});

app.listen(3003, function () {
	  console.log('Aplicacion escuchando en el puerto 3003!');
});
