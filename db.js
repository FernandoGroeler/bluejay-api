const fs = require('fs');
const path = require('path');
const sequelize = require('sequelize');

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.lib.config;

        const sequelizeConnection = new sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        db = {
            sequelizeConnection,
            sequelize,
            models: {}
        };

        const dir = path.join(__dirname, 'models');

        //-> retornar um array de strings referente aos nomes de arquivos existentes no diretório models
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelizeConnection.import(modelDir);

            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            //-> executará a função db.models[key].associate(db.models) para garantir o relacionamento correto entre os modelos
            db.models[key].associate(db.models);
        });
    }

    return db;
}
