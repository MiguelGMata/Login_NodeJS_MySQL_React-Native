module.exports=(express, controllers)=>{
    const router = express.Router();
    const cors = require('cors')
    
    router.get('/user', (req, res) => {
        res.json({ message : 'Route user active'});
    })
    router.post('/signUp', controllers.user.controllerSignUp);
    router.post('/signIn', controllers.user.controllerSignIn);
    return router
}