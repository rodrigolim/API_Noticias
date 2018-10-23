var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app); //ou conforme abaixo 
//rotaHome(app)

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormInclusaonoticia = require('./app/routes/formulario_inclusao_noticias')(app);


app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000 com Express.');
});