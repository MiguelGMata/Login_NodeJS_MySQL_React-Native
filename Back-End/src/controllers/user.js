module.exports=(services)=>{
    const user_controller = {
        controllerSignUp: async(req, res) => {
            const userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address,
                postalCode: req.body.postalCode,
                city: req.body.city,
                country: req.body.country,
                job: req.body.job,
                description: req.body.description,
                price: req.body.price,
                dateOn: req.body.dateOn,
                dateOff: req.body.dateOff
            }
            try {
                const result = await services.regex.regexUserSignUp(userData)
                if (result){
                    res.status(400).json(result)
                }else{
                    const user = await services.user.servicesSignUpOne(userData)
                    if (!user) {
                        services.bcrypts.bcryptPassword(req.body.password, 10)
                        .then(async (passwordHash) => {
                            userData.password = passwordHash
                            await services.user.servicesSignUpCreate(userData)
                            await services.mailer.sendMail(userData)
                        });
                        res.status(201).json("Utilisateur inscrit !" + userData.email);
                        
                        } else {
                            res.status(400).json({error: "L'utilisateur " + userData.email + " existe déjà"});
                    }
                }
            }catch(err) {
                res.status(400).json('Erreur : utilisateur non inscrit!' + err)
            }
        },
        controllerSignIn: async(req, res) => {
            const userData= { email: req.body.email, password: req.body.password };
            try {
                const result = await services.regex.regexUserSignIn(userData);
                if (result){
                    res.status(400).json(result)
                }
                const token = await services.user.servicesSignInOne(userData)
                .then(user => {
                    return(user);
                })
                if(!token){
                    res.status(400).json("Cet utilisateur n'existe pas, vérifiez votre email")
                }
                const pass = await services.bcrypts.comparePassword(req.body.password, token.password);
                if (!pass) {
                    res.status(403).json("Le mot de passe est incorrect, vérifiez votre mot de passe")
                }
                return res.status(200).json({
                    user: { id: token.id, email: token.email },
                    token: services.jwt.generateTokenForUser(token),
                }); 
            }catch(err) {
                res.status(400).json('Erreur : utilisateur non trouvé !' + err)
            }
        
        },
    }
    return user_controller;
}