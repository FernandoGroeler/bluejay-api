module.exports = (sequelize, dataType) => {
    const entidade = sequelize.define('entidade', {
        id_entidade: {
            type: dataType.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: dataType.STRING(70),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        nomesocial: {
            type: dataType.STRING(70),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }        
    });

    //-> Class method
    entidade.associate = function (models) {
        entidade.belongsTo(models.usuario, {
            foreignKey: 'id_usuario'
        });

        entidade.belongsToMany(models.email, {
            through: 'entidade_email',
            as: 'email',
            foreignKey: 'id_entidade',
            otherKey: 'id_email'
        });

        entidade.belongsToMany(models.telefone, {
            through: 'entidade_telefone',
            as: 'telefone',
            foreignKey: 'id_entidade',
            otherKey: 'id_telefone'
        });
    }

    return entidade;
};