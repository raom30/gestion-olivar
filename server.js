const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const config = require('./config');
const app = express();

//Conexion a la base de datos
mongoose.connect(config.db_uri, { useNewUrlParser: true })
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

//MIDDLEWARE

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`);
  else
    next();
});

app.use(express.static(path.join(__dirname,'public')));
//para utilizar log
app.use(morgan('dev'));
// para que express pueda utilizar json
app.use(express.json());
//añade el prefijo api delante de la routa
app.use('/api',routes);
//puerto de escucha
app.listen (config.port); 
