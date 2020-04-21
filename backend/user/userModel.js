const db = require('../database.js')

const user = {}

user.insert = async (name, nick, password, email, image) => {
    var query = 'INSERT INTO usuario (name, nick, password, email, image) VALUES ($1, $2, $3, $4, $5)';

    try{
        await db.connect();
        await db.query(query, [name, nick, password, email, image]);
        return {name, nick, password, email, image};
    }catch(err){
        return {error: err};
    }finally{
        await db.end();
    }
}

user.getAll = async () => {
    var query = `SELECT name, nick, email, image FROM usuario`;
    console.log(query)
    await db.connect();
    result = await db.query(query);
    await db.end();
    return result.rows;
}

user.getByNick = async (nick) => {
    var query = `SELECT name, nick, email, image FROM usuario WHERE nick = '${nick}'`;
    try{
        await db.connect();
        result = await db.query(query);
        await db.end();
        if(!result) return undefined;
        return result.rows[0];
    }catch(err){
        return err;
    }finally{
        await db.end();
    }
}

user.getByEmail = async (email) => {
    var query = `SELECT name, nick, email, image FROM usuario WHERE email = '${email}'`;
    try{
        await db.connect();
        result = await db.query(query);
        if(!result) return undefined;
        return result.rows[0];
    }catch(err){
        return err;
    }finally{
        await db.end();
    }
}

user.auth = async (nick, password) => {
    var query = `SELECT name, nick, email, image FROM usuario WHERE nick = '${nick}' AND password = '${password}'`;
    try{
        await db.connect();
        var result = await db.query(query);
        await db.end();
        if(!result) return undefined;
        return result.rows[0];
    }catch(err){
        return err;
    }
}

module.exports = user;