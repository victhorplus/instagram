const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize(
    config.dbr_name, 
    config.dbr_user, 
    config.dbr_password,
    {
        host: config.dbr_host,
        dialect: config.dbr_sgbd
    }
);

module.exports = sequelize;

async function teste(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
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