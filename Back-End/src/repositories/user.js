module.exports= (models) => {
  
    const user_repository = {
        repositoryGetAllUsers: async(data) => {
            const users = await models.Users.findAll()
            return users;
        },
        repositorySignUpOne: async(data) => {
            const user = await models.Users.findOne({
                where: {
                    email: data.email
                }
            })
            return user;
        },
        repositorySignUpCreate: async(data) => {
            const user = await  models.Users.create(data)
            return user;
        },
        repositorySignInOne: async(data) => {
            const user = await models.Users.findOne({
                where: {
                    email: data.email
                }
            })
            return user;
        }
    }
    return user_repository;
}
