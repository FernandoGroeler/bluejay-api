module.exports = (sequelize, dataType) => {
    const tipotelefone = sequelize.define('tipotelefone', {
        id_tipotelefone: {
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
    tipotelefone.associate = function (models) {
        tipotelefone.hasOne(models.telefone, {
            foreignKey: 'id_tipotelefone'
        });        
    };

    return tipotelefone;
}