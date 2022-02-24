const services = require('../services/index');


const user_controller = require('./user');

const controllers = {
    user: user_controller(services)
}

module.exports = controllers;