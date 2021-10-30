const passport = require('passport');

module.exports = {
    async login(req, res, next) {
        passport.authenticate('local', {
            successRedirect: "/login/Sucesso",
            failureRedirect: "/login/Fracasso",
        })(req, res, next);
    },
    async loginSuccess(req, res) {
        return res.send('Usuario logado com sucesso!');
    },

    async loginFailure(req, res) {
        return res.send('Não foi possivel logar: Credenciais incorretas! ');
    },

}