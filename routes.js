module.exports = function(app) {
  // INDEX
  app.get('/', function(req, res){
    res.render("index.pug", { title: 'Kevin Lewis' });
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

  // ADMIN
  app.get('/admin', function(req, res){
    res.render("admin.pug", { title: 'Admin' });
  });
}
