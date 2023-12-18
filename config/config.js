require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    },
    // Additional environments can be configured here
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql'
    }
};
