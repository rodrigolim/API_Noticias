function NoticiasDAO(connection){
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callBack){
    this._connection.query('select * from noticias', callBack);
}

NoticiasDAO.prototype.getNoticia = function(callBack){
    this._connection.query('select * from noticias where id_noticia = 2', callBack);
}

NoticiasDAO.prototype.salvarNoticias = function(ArrayNoticia, callBack){
    this._connection.query('insert into noticias (titulo, noticia) values ($1, $2)', 
                     [ArrayNoticia.titulo, ArrayNoticia.noticia], 
                     callBack);
}

module.exports = function(){
    return NoticiasDAO;
}