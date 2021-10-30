'use strict';
const {
    Model
} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {

        static associate(models) {

        }
    };
    Usuario.init({
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        senha_hash: DataTypes.VIRTUAL,
        senha: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Usuario',
    });

    Usuario.addHook('beforeSave', async cryptSenha => {
        if (cryptSenha.senha_hash) {
            cryptSenha.senha = await bcrypt.hash(cryptSenha.senha_hash, 8);
        }
    });

    return Usuario;

};