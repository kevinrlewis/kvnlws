var Blogpost  = require('./models/Blogpost.js');
var User = require('./models/User');

var allowRegistration = false;

module.exports = function(app, passport) {
  // INDEX
  app.get('/',
  function(req, res, next) {
    Blogpost.find({}, function(err, allposts) {
      //console.log(allposts);
      if(err) {
        console.log(err);
        res.render("index.pug", { title: 'Kevin Lewis' });
      } else {
        res.render("index.pug", { title: 'Kevin Lewis', blogposts: allposts });
      }
    });
    //res.render("index.pug", { title: 'Kevin Lewis' });
  });

  // EXPERIENCE
  app.get('/experience', function(req, res) {
    res.render("experience.pug", { title: 'Experience' });
  });

  // EDUCATION
  app.get('/education', function(req, res) {
    res.render("education.pug", { title: 'Education' });
  });

  // CRYPTOGRAPHY
  app.get('/cryptography', function(req, res) {
    res.render("cryptography.pug", { title: 'Cryptography' });
  });

  // LOGIN
  app.get('/login', function(req, res) {
    res.render("login.pug", { message: req.flash('loginMessage'), title: 'Login' });
  });

  // LOGIN ATTEMPT
  app.post('/login',
  passport.authenticate('local-login', {
    successRedirect : '/post', // redirect to the secure post section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // POST BLOG
  app.get('/post', isLoggedIn, function(req, res) {
    res.render("post.pug", { title: 'Post' });
  });

  app.post('/post', isLoggedIn, function(req, res) {
    var newpost = new Blogpost({
      subject: req.body.subject,
      content: req.body.content,
      date: req.body.date
    });

    // add post to db
    newpost.save(function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log('new post saved!');
    });
    res.end();
  });

  // REGISTER ACCOUNT PAGE
  app.get('/register', function(req, res) {
    if(allowRegistration) {
      res.render("register.pug", { message: req.flash('signupMessage'), register: 'Register' });
    } else {
      res.redirect('/');
    }
  });

  // REGISTER ATTEMPT
  app.post('/register',
  passport.authenticate('local-signup', {
    successRedirect : '/post',
    failureRedirect : '/',
    failureFlash : true
  }));
}


// middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
  return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
