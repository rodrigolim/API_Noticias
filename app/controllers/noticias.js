module.exports.noticia = function(application, req, res){  
    const connection = application.config.dbConnection();
    var noticiasMD = new application.app.models.NoticiasDAO(connection);

    noticiasMD.getNoticia(function(error, result){
      res.render("noticias/noticia", {resultArray : result.rows});
    }); 
}

module.exports.noticias = function(application, req, res){
    const connection = application.config.dbConnection();
    var noticiasMD = new application.app.models.NoticiasDAO(connection);

    noticiasMD.getNoticias(function(error, result){
      res.render("noticias/noticias", {resultArray : result.rows});
    });    
}