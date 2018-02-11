module.exports = (sequelize, dataType) => {
    const telefone = sequelize.define('telefone', {
        id_telefone: {
            type: dataType.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        ddd: {
            type: dataType.STRING(2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        numero: {
            type: dataType.STRING(13),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        principal: {
            type: dataType.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: true
            }
        },
        alternativo: {
            type: dataType.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notEmpty: true
            }
        }
    });

    //-> Class method
    telefone.associate = function (models) {
        telefone.belongsTo(models.tipotelefone, {
            foreignKey: 'id_tipotelefone'
        });        
    }

    return telefone;
}