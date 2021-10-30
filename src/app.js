const express = require('express');
const app = express();
const router = require('./router/router')
const passport = require('passport');
const session = require('express-session');
require('./config/auth')(passport);

app.use(session({
    secret: "PassportLogin",
    resave: true,
    saveUninitialized: true
}));

//Middleware
app.use((req, res, next) => {
    res.locals.Usuario = req.Usuario || null
    next()
})

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session())
app.use(router);

app.listen(3030, function(req, res) {
    console.log("Servidor rodando na porta 3030");
})