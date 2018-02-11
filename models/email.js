module.exports = (sequelize, dataType) => {
    const email = sequelize.define('email', {
        id_email: {
            type: dataType.BIGINT,
            primaryKey: true, 
            autoIncrement: true
        },
        email: {
            type: dataType.STRING(60),
            unique: true,
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
    email.associate = function (models) {

    } 

    return email;
}