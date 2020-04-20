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