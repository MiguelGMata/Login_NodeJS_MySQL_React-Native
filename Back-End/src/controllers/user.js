const { BadRequestError } = require('../middlewares/helpers/errors')

module.exports=(services)=>{
    const user_controller = {
        controllerSignUp: async(req, res) => {
            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }
            try {
                const result = await services.regex.regexUserSignUp(userData)
                if (result){
                    res.json(new BadRequestError(result))
                }else{
                    const user = await services.user.servicesPostOneEmail(userData)
                    //console.log(user.dataValues,'<--')
                    if (!user) {
                       const token = services.bcrypts.bcryptPassword(req.body.password, 10)
                        .then((passwordHash) => {
                            userData.password = passwordHash
                            const tokenUser = userData.password
                            services.user.servicesSignUpCreate(userData)
                            services.mailer.sendMail(userData)
                            return tokenUser
                        })
                        .catch(error => {console.log(error)})
                        token.then(()=>{
                            return res.status(201).json({user: userData })
                        })
                    } else {
                            res.json(new BadRequestError( "L'utilisateur " + userData.email + " existe déjà"));
                    }
                }
            }catch(err) {
                res.status(400).json('Erreur : utilisateur non inscrit !' + err)
                 // stop further execution in this callback
                return;
            }
        },
        controllerSignIn: async(req, res) => {
            const userData= { email: req.body.email, password: req.body.password };
            try {
                const result = await services.regex.regexUserSignIn(userData);
                if (result){
                    res.json(new BadRequestError(result))
                     // stop further execution in this callback
                    return;
                }
                const token = await services.user.servicesPostOneEmail(userData)
                .then(user => {
                    return(user);
                })
                if(!token){
                    return res.json(new BadRequestError("Cet utilisateur n'existe pas, vérifiez votre email"));
                }
                const pass = await services.bcrypts.comparePassword(req.body.password, token.password);
                if (!pass) {
                    return res.json(new BadRequestError("Le mot de passe est incorrect, vérifiez votre mot de passe"));
                }
                return res.status(200).json({
                    user: { id: token.id, email: token.email },
                    token: services.jwt.generateTokenForUser(token)
                }); 
            }catch(err) {
                return res.status(400).json('Erreur : utilisateur non trouvé !' + err)
            }
        
        },
        constrollerProfileUser: async(req, res)=>{
            var heraderAuth = req.headers['authorization'];
            var validation = services.jwt.parseAuthorization(heraderAuth)
            const decoded = services.jwt.getUserId(validation);
            if(decoded < 0) {
                return res.json(new BadRequestError('Vous devez être connecté pour accéder à cette ressource'))
            }else {
                await services.user.servicesPostOneUser(decoded)
                    .then(user => {
                        if(user){
                            res.json(user)
                        }else{
                            res.send("L'utilisateur n'existe pas")
                        }
                    })
                    .catch((err)=> {
                        return res.status(400).json('Erreur : utilisateur non trouvé !')
                    })
            }
        },


        controllerUpdateUser: async(req, res)=>{
            const user = await services.user.servicesGetAllUsers()
            res.send(user);

        },
    }
    return user_controller;
}