
module.exports = function(application){
    application.get('/formulario_inclusao_noticias', function(req, resp){
        resp.render("admin/form_add_noticia", {validacao :{}, ArrayDados: {}});
    });

    application.post('/noticias/salvar', function(req, resp){
        var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        //req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('data_noticia','Data é obrigatório').notEmpty();
        req.assert('noticia','Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if (erros){
            resp.render("admin/form_add_noticia", {validacao : erros, ArrayDados: noticia});
            return;
        }

        const connection = application.config.dbConnection();
        var noticiasMD = new application.app.models.NoticiasDAO(connection);
    
        noticiasMD.salvarNoticias(noticia, function(error, result){
            resp.redirect("/noticias");
        }); 
    });
};