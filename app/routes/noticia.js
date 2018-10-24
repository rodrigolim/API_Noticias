module.exports = function(application){
  application.get('/noticia', function(req, res){
  
    const connection = application.config.dbConnection();
    var noticiasMD = application.app.models.noticiasModel;

    noticiasMD.getNoticia(connection, function(error, result){
      res.render("noticias/noticia", {resultArray : result.rows});
    }); 

  });
};