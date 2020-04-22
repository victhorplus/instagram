const jwt = require('jsonwebtoken');
const model = require('./userModels');
const config = require('../config')

const controller = {}

controller.insert = async (req, res) => {
    const { name, nick, password, email, image } = req.body;

    // Verificação
    if(!name, !nick, !password, !email) return res.json({error: "Dados insuficientes"});
    if(await model.getByNick(nick)) return res.json({error: "Nick de usuário já está em uso"})
    if(await model.getByEmail(email)) return res.json({error: "Email de usuário já está em uso"})

    var result = await model.insert(name, nick, password, email, image);
    var token = await createToken(result.nick);
    return res.json({...result, token});
}

controller.getAll = async (req, res) => {
    const users = await model.getAll();
    return res.json(users)
}

controller.getByNick = async (req, res) => {
    nick = req.params.id;
    user = await model.getByNick(nick);

    if(!user) return res.json({error: `Usuário ${nick} não encontrado`, user})

    return res.json({user});
}

controller.auth = async (req, res) =>{
    const { nick, password } = req.body;
    if(!nick || !password) return res.json({error: "Dados insuficientes"});
    
    var testeByNick = await model.getByNick(nick);
    if( !testeByNick ) return res.json({error: 'Usuário não cadastrado'});

    const user = await model.auth(nick, password);
    if(!user) return res.json({error: "Dados incorretos"});

    var token = await createToken(user.nick);
    return res.json({user, token});
}

controller.editProfile = async (req, res) => {
    var { name, nick, image } = req.body;
    
    if(!nick || !name) return res.json({ error: 'Dados insuficientes' });
    
    var user = await model.editProfile(nick, name, image);
    return res.json({user});
}

async function createToken(nick){
    return await jwt.sign({nick}, config.token_key, {expiresIn: config.token_expiresIn});
}

module.exports = controller;