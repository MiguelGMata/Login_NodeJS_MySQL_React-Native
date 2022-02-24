const app = require('./src/config/server')
     config = require('./src/config/env')   

app.listen(()=>{
        console.log('Le serveur fonctione sur le port : '+ config.app_port)
});