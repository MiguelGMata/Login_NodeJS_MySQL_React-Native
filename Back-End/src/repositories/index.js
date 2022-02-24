//Repositories dépendencies
const models = require('../database/models');


//Repositories
const user_repository = require('./user')

//create repositories objet 
const repository = {
  user: user_repository(models),
}

module.exports = repository;
