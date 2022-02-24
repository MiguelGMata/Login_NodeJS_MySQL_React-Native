
module.exports = (repository) => {
    const user_service = {
        servicesGetAllUsers: async(data) => {
            return repository.user.repositoryGetAllUsers();
        },
        servicesSignUpOne: async(data) => {
            return repository.user.repositorySignUpOne(data);
        },
        servicesSignUpCreate: async(data) => {
            return repository.user.repositorySignUpCreate(data);
        },
        servicesSignInOne: async(data) => {
            return repository.user.repositorySignInOne(data);
        }
    }
    return user_service
}