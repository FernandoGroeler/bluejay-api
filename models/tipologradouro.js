module.exports = (sequelize, dataType) => {
    const tipologradouro = sequelize.define('tipologradouro', {
        gid: {
            type: dataType.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: dataType.STRING(20),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        id: {
            type: dataType.SMALLINT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }        
    });

    //-> Class method
    tipologradouro.associate = models => {
        tipologradouro.hasOne(models.endereco, {
            foreignKey: 'gid_tipologradouro'
        });
    };

    return tipologradouro;
};