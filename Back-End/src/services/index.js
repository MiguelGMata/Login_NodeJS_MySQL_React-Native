//Services denpendencies
const repository = require('../repositories'),
    nodemailer = require('nodemailer'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    env = require('../config/env')



//Services 
const user_service = require('./user'),
    mailer_service = require('./mailer'),
    token_service = require('./jwt'),
    bcrypts_service = require('./bcrypts'),
    regex_service = require('./regex');
//Create services
const services = {
    user: user_service(repository),
    mailer: mailer_service(nodemailer),
    bcrypts: bcrypts_service(bcrypt),
    regex: regex_service(),
    jwt: token_service(jwt, env),
}

module.exports = services;