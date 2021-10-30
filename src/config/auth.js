const model = require('../models');
const Usuario = model.Usuario;
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: "login", passwordField: "senha" }, (login, senha, done) => {
        Usuario.findOne({ where: { login: login } }).then((usuario) => {
            if (!usuario) {
                return done(null, false, { msg: "Usuario não encontrado!" });
            }
            const res = bcrypt.compare(senha, usuario.senha, (err, resposta) => {
                if (resposta) {
                    return done(null, usuario);
                } else {
                    return done(null, false, { msg: "Erro ao logar!" + err });
                }
            })
        });
    }));
    passport.serializeUser((usuario, done) => {
        done(null, usuario.id);
    });

    passport.deserializeUser((id, done) => {
        Usuario.findOne({ where: { id: id } }).then((res) => {
            if (res) {
                return done(null, false, { msg: "Não encontrado !" });
            } else {
                done(null, res);
            }
        });
    });
}