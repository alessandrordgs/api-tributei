const Sequelize = require('sequelize');

const dbConfig  = require('../config/database')

const Deliveries = require('../models/Deliveries')

const connection = new Sequelize(dbConfig);

Deliveries.init(connection);

connection.authenticate().then(()=>{
  console.log('Conectado com sucesso!');
}).catch((err)=>{
  console.log(err);
});

module.exports = connection;