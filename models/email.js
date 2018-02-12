module.exports = (sequelize, dataType) => {
    const email = sequelize.define('email', {
        gid: {
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
    email.associate = models => {

    }; 

    return email;
};