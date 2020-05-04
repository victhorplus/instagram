const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const config = require('./config')

const db = {};

const sequelize = new Sequelize(
    config.dbr_name, 
    config.dbr_user, 
    config.dbr_password,
    {
        host: config.dbr_host,
        dialect: config.dbr_sgbd
    }
);

const options = { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false };

mongoose.connect(config.mongo_url, options);;
mongoose.set('useCreateIndex', true);

db.sequelize = sequelize;
db.mongoose = mongoose;

module.exports = db;

async function teste(){
    try {
        await db.sequelize.authenticate();
        console.log('Conexão com o sequelize feita com sucesso');

        var bd = db.mongoose.connection;
        bd.on('error', console.error.bind(console, 'connection error:'));
        bd.once('open', function() {
            console.log('Conexão com o mongoose feita com sucesso');
        });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
teste();
/*
const pg = require('pg')
const config = require('./config.js')

const db = new pg.Client({
    user: config.dbr_user,
    host: config.dbr_host,
    database: config.dbr_name,
    password: config.dbr_password,
    port: config.dbr_port,
})

module.exports = db;
*/