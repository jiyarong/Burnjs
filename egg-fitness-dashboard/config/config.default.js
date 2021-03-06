'use strict'

module.exports = appInfo => {
    const config = {}
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_metal_gear2'

    // add your config here
    config.middleware = []

    config.sequelize = {
        // egg-sequelize 配置
        dialect: 'mysql', // db type
        database: 'trainnote',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'metal_gear2',
        dialectOptions: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci',
            supportBigNumbers: true,
            bigNumberStrings: true
        },
        define: {
            underscored: true,
            charset: 'utf8mb4'
        }
    }

    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['http://localhost:3000']
    }

    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb'
    }

    config.jwt = {
        secret: '123456',
        enable: true, // default is false
        match: '/success' // �optional
    }

    return config
}
