module.exports=(express, controllers)=>{
    const router = express.Router();
    const cors = require('cors')
    
    router.get('/User', (req, res) => {
        res.json({ message : 'Route user active'});
    })
    router.post('/signUp', controllers.user.controllerSignUp);
    router.post('/signIn', controllers.user.controllerSignIn);
    router.get('/profile', controllers.user.constrollerProfileUser);
    router.get('/users', controllers.user.controllerUpdateUser);

    return router
}