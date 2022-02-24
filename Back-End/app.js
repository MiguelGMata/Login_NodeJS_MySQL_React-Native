const app = require('./src/config/server')
     config = require('./src/database/config/config')   

app.listen(config.app_port,()=>{
        console.log('Le serveur fonctione sur le port : '+ config.app_port)
});