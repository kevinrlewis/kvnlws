var express       = require('express');
var port          = process.env.PORT || 3000;
var path          = require('path');
var bodyParser    = require('body-parser');
var helmet        = require('helmet');
var compression   = require('compression');
var favicon       = require('serve-favicon');
var mongoose      = require('mongoose');
var app           = express();

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// set helmet
app.use(helmet());

// connect mongodb database
// TODO: Try to handle
try {
  mongoose.connect("mongodb://post:pass4post@ds127439.mlab.com:27439/hash", { useMongoClient: true });
} catch (e) {
  console.log("was unable to connect to database");
  console.log(e.message);
  // handle or display that the database can't connect
}

// require the routes file
require('./routes.js')(app);

// handling
////////////////////////////////////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.pug');
});

// start the server
app.listen(port);
