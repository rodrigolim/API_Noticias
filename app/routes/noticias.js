module.exports = function(application){
  application.get('/noticias', function(req, res){

    const connection = application.config.dbConnection();
    var noticiasMD = new application.app.models.NoticiasDAO(connection);

    noticiasMD.getNoticias(function(error, result){
      res.render("noticias/noticias", {resultArray : result.rows});
    });          
    
  });
};
