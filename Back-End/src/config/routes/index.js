
module.exports = (express, controllers) => {
    const user_route = require('./user');
    const routes = [
        user_route(express, controllers, )
    ];
    return routes
}
