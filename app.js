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
var serviceController = require('./app/controllers/service-controller')(app);
logger.info('Log4js is setup');
app.set('environment', process.env.NODE_ENV || 'development');
app.set('port', app.config.appSettings.port);
app.use(bodyParser({
    maxRequestSize: app.config.express.maxRequestSize,
    limit: '50mb'
}));

app.use(cookieParser('3A8aSP2qEwetHeP8_Tu*RaBaSP_6aSa3'));
app.use(session({
    secret: 'pup=u7_cuchuced?traf#!Uv6guyur$c'
}));
app.options('/*', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, usertoken');
    res.send().status(200);
});
logger.info('starting Express Server');

app.get('/*', function(req, res){
    res.send('It is a get reqest');
    logger.info('It is a get request');

});

app.post('/', function(req, res){
    res.send('It is a post request');
    logger.info('It is a post request');
});

app.listen(app.get('port'), function(){
    console.log('listen on port ', app.get('port'));
    logger.info('listen on port ', app.get('port'));
})
