const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser')
      controllers = require('../controllers/index')
      helmet = require('helmet'),
      logger = require('morgan');
      router = require('./routes/index');
const { notFoundHandler, errorLogger, errorHandler } = require('../middlewares');

const app = express();

//Helpet
app.use(helmet());
//Morgan
app.use(logger('tiny'));
//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors
app.use(cors());
//CookieParser
app.use(cookieParser())
//Route conf

app.get('/', (request, response) => {
    response.json({ message : 'Routeur et serveur active dans le port : '+ config.app_port});
});
app.use('/api', router(express, controllers));
app.use('*', notFoundHandler);
app.use(errorLogger);
app.use(errorHandler);
module.exports = app;
