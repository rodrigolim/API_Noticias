module.exports = function(application){
  application.get('/noticias', function(req, res){

    const connection = application.config.dbConnection();
    var noticiasMD = application.app.models.noticiasModel;

    noticiasMD.getNoticias(connection, function(error, result){
      res.render("noticias/noticias", {resultArray : result.rows});
    });          
    
  });
};
