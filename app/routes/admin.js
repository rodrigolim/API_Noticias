
module.exports = function(application){
    application.get('/formulario_inclusao_noticias', function(req, resp){
        resp.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, resp){
        var noticia = req.body;

        const connection = application.config.dbConnection();
        var noticiasMD = new application.app.models.NoticiasDAO(connection);
    
        noticiasMD.salvarNoticias(noticia, function(error, result){
            resp.redirect("/noticias");
        }); 
    });
};