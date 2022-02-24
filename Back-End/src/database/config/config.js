require('dotenv').config();

module.exports = {

    "development": {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORDS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORDS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT
    },
    app_port: process.env.APP_PORT || 4000,
    app_JWT: process.env.JWT_SIGN_SECRET
}