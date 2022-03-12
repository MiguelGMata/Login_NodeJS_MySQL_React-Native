module.exports= (models) => {
  
    const user_repository = {
        repositoryGetAllUsers: async(data) => {
            const users = await models.Users.findAll()
            return users;
        },
        repositoryPostOneEmail: async(data) => {
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
        repositoryPostOneUser: async(data) => {
            const user = await models.Users.findByPk(data)
                         await models.Users.findOne({
                            where: {
                                id: user.id
                            }
            })
            return user;
        }
    }
    return user_repository;
}
