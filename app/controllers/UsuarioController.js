module.exports = function(app){

    var UsuarioController = {

          login: function(req, res){
                res.render('paginas/login');
          },

          loginAction: function(req, res){
            if((req.body.login != "") && (req.body.senha != "")){
                req.session.usuario = req.body.login;
                res.redirect('/');
              }else{
                res.redirect('/usuario/login');
              }
        }
    }

    return UsuarioController;
};