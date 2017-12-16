var hash      = require('./models/hash.js')
var blogpost  = require('./models/blogpost.js')

module.exports = function(app) {
  // INDEX
  app.get('/',
  function(req, res, next) {
    blogpost.find({}, function(err, allposts) {
      //console.log(allposts);
      if(err) {
        console.log(err);
        res.render("index.pug", { title: 'Kevin Lewis' });
      } else {
        res.render("index.pug", { title: 'Kevin Lewis', blogposts: allposts });
      }


    });
  });

  // INDEX POST
  app.post('/',
  function(req, res, next){
    console.log('attempting to post to blog...');
    hash.findOne({ 'hash' : req.body.hash }, function (err, hash) {
      console.log('success');
      if (err) {
        console.log(err);
      }

      var newpost = new blogpost({
        subject: req.body.subject,
        content: req.body.content,
        date: req.body.date
      });
      // TODO: finish blog post
      // add post to db
      //blogpost.save()
      newpost.save(function(err) {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log('new post saved!');
      });
      res.end();
    });

    // send response that the hash was incorrect
    res.status(500).send('No match.');
  });

  // EXPERIENCE
  app.get('/experience', function(req, res){
    res.render("experience.pug", { title: 'Experience' });
  });

  // EDUCATION
  app.get('/education', function(req, res){
    res.render("education.pug", { title: 'Education' });
  });

  // CRYPTOGRAPHY
  app.get('/cryptography', function(req, res){
    res.render("cryptography.pug", { title: 'Cryptography' });
  });
}
