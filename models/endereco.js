module.exports = (sequelize, dataType) => {
    const endereco = sequelize.define('endereco', {
        gid: {
            type: dataType.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: dataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        numero: {
            type: dataType.STRING(10),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        complemento: {
            type: dataType.STRING(30)
        },
        bairro: {
            type: dataType.STRING(60),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        cep: {
            type: dataType.STRING(8)
        },
        codigopostal: {
            type: dataType.STRING(12)
        }
    });

    //-> Class method
    endereco.associate = models => {
        endereco.belongsTo(models.tipologradouro, {
            foreignKey: 'gid_tipologradouro'
        });
    };

    return endereco;
};