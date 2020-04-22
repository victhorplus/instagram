const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('usuarios', {
    name: {
        type: Sequelize.STRING
    },
    nick: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
});

const user = {};

user.insert = async (name, nick, password, email, image) => {
    try{
        var query = await User.create({
            name,
            nick,
            password,
            email,
            image
        })
        return query.dataValues;
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close()
    }
}

user.getAll = async () => {
    try{
        var query = await User.findAll({ attributes: ['name', 'nick', 'email', 'image'] })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close();
    }
}

user.getByNick = async (nick) => {
    try{
        var query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { nick }
        })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close();
    }
}

user.getByEmail = async (email) => {
    try{
        var query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { email }
        })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close();
    }
}

user.auth = async (nick, password) => {
    try{
        var query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { nick, password }
        })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close();
    }
}

module.exports = user;


async function teste(){
    try{
        var query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { nick: 'teste01', password: '123456' }
        })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }finally{
        // await sequelize.close();
    }
}

t1 = async () => {
    console.log( await teste() );
}

