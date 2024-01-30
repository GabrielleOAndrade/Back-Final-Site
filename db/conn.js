const knex = require('knex');
const configuration = require('../knexfile');

const enviroment = process.env.NODE_ENV || 'development'

const conn = knex(configuration[enviroment])


module.exports = conn;