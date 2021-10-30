module.exports = {
    autenticado: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            return res.json({ msg: "Precisa estar logado para acessar essa rota" })
        }

    }
}