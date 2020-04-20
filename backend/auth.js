const jwt = require('jsonwebtoken');
const config = require('./config');

const auth = (req, res, next) => {
    var token = req.headers.token;
    if(!token) return res.json({error: "Token necessário"});

    jwt.verify(token, config.token_key, (err, decoded) => {
        if(err) return res.json({error: "Token inválido"})
        res.locals.userNick = decoded;
        next();
    })
}

module.exports = auth;