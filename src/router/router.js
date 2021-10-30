const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controller/usuario');
const controllerLogin = require('../controller/login');
const { autenticado } = require('../middleware/autenticado');

router.post('/criar/Usuario', controllerUsuario.criarUsuario);

router.post('/login', controllerLogin.login);
router.get('/login/Sucesso', controllerLogin.loginSuccess)
router.get('/login/Fracasso', controllerLogin.loginFailure);

module.exports = router;