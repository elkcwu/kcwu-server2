var express = require('express');
var app = express();
var log4js = require('log4js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var path = require('path');
app.config = require('config');
//json parser
app.use(bodyParser.json());
//to parse urlencoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
log4js.configure(path.join(__dirname, './config/log4js-configuration.json'));
app.loggers = log4js;
var logger = app.loggers.getLogger('app');
logger.info('Log4js is setup');

app.get('/', function(req, res){
    res.send('It is a get reqest');
    logger.info('It is a get request');

})

app.post('/', function(req, res){
    res.send('It is a post request');
    logger.info('It is a post request');
})
console.log('listen on port 8000', app.listen(8080));