module.exports = (sequelize, dataType) => {
    const tipotelefone = sequelize.define('tipotelefone', {
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
    tipotelefone.associate = models => {
        tipotelefone.hasOne(models.telefone, {
            foreignKey: 'gid_tipotelefone'
        });        
    };

    return tipotelefone;
};