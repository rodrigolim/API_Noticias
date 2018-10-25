module.exports = function(application){
  application.get('/noticia', function(req, res){
  
    const connection = application.config.dbConnection();
    var noticiasMD = new application.app.models.NoticiasDAO(connection);

    noticiasMD.getNoticia(function(error, result){
      res.render("noticias/noticia", {resultArray : result.rows});
    }); 

  });
};