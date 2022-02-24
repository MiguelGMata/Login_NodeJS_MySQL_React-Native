const express = require('express')
const users = express.Router()
const cors = require('cors')
const { BadRequestError, UnauthorizedError, ForbiddenError } = require('../middlewares/helpers/errors');


users.use(cors())

process.env.SECRET_KEY = 'secret'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

module.exports=()=>{

    const user_controller = {

        controllerSignUp: async (req, res) => {

            const userData = {
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: req.body.password,
                initiales: req.body.initiales,
                nom_utilisateur: req.body.nom_utilisateur,
                biographie: req.body.biographie,
            }
            if (userData.prenom == null || userData.prenom == "") {
                throw new BadRequestError(
                    'Mauvaise Requête',
                    'Les champs prenom  et/ou nom ne sont pas renseignés , veuillez recommencer.'
                );
            }
        },
    }
    return user_controller;
}
