function NoticiasDAO(connection){
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callBack){
    this._connection.query('select * from noticias', callBack);
}

NoticiasDAO.prototype.getNoticia = function(callBack){
    this._connection.query('select * from noticias where id_noticia = 2', callBack);
}

NoticiasDAO.prototype.salvarNoticias = function(ArrayDados, callBack){
    this._connection.query('insert into noticias (titulo, noticia, resumo, autor, data_noticia) values ($1, $2, $3, $4, $5)', 
                     [ArrayDados.titulo, ArrayDados.noticia, ArrayDados.resumo, ArrayDados.autor, ArrayDados.data_noticia], 
                     callBack);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callBack){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callBack);
}

module.exports = function(){
    return NoticiasDAO;
}