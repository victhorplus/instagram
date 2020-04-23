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
    }
}

user.getAll = async () => {
    try{
        var query = await User.findAll({ attributes: ['name', 'nick', 'email', 'image'] })
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
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
    }
}

user.editProfile = async (nick, name, image) => {
    try{
        var query = await User.update(
            { name, image },
            { where: { nick } }
        );
        query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { nick }
        });
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
    }
}

user.editPassword = async (nick, password) => {
    try{
        var query = await User.update(
            { password },
            { where: { nick } }
        );
        query = await User.findOne({
            attributes: ['name', 'nick', 'email', 'image'],
            where: { nick }
        });
        return JSON.parse(JSON.stringify(query, null, 2));
    }catch(err){
        console.log(err)
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
    }
}

t1 = async () => {
    console.log( await user.editProfile('teste04', 'teste 04', 'teste04_1587578117077_perfil.png') );
}
