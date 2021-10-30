const model = require('../models');
const Usuario = model.Usuario;


module.exports = {
    async criarUsuario(req, res) {

        try {
            const {
                nome,
                login,
                senha_hash
            } = req.body;

            const SalvarUsuario = await Usuario.create({
                nome,
                login,
                senha_hash
            });
            SalvarUsuario.senha_hash = undefined;

            return res.json({ SalvarUsuario });

        } catch (err) {
            return res.json({ msg: "Erro ao salvar Usuario " + err });
        }
    }
}