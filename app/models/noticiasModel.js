module.exports = function(){

    this.getNoticias = function(connection, callBack){
        connection.query('select * from noticias', callBack);
    }

    this.getNoticia = function(connection, callBack){
        connection.query('select * from noticias where id_noticia = 2', callBack);
    }

    return this;
}