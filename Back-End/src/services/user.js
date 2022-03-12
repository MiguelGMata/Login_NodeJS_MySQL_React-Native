
module.exports = (repository) => {
    const user_service = {
        servicesGetAllUsers: async(data) => {
            return repository.user.repositoryGetAllUsers();
        },
        servicesPostOneEmail: async(data) => {
            return repository.user.repositoryPostOneEmail(data);
        },
        servicesSignUpCreate: async(data) => {
            return repository.user.repositorySignUpCreate(data);
        },
        servicesPostOneUser: async(data) => {
            return repository.user.repositoryPostOneUser(data);
        }
    }
    return user_service
}