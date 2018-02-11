const bcrypt = require('bcrypt');
module.exports = (sequelize, dataType) => {
    const usuario = sequelize.define('usuario', {
        id_usuario: {
            type: dataType.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        senha: {
            type: dataType.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }        
    }, {
        hooks: {
            beforeCreate: usuario => {
                const salt = bcrypt.genSaltSync();
                usuario.senha = bcrypt.hashSync(usuario.senha, salt);
            }
        }
    });

    //-> Class method
    usuario.associate = models => {
        usuario.hasOne(models.entidade, {
            foreignKey: 'id_usuario'
        });
    }  
    
    usuario.isPassword = (encodedPassword, password) => {
        return bcrypt.compareSync(password, encodedPassword);
    }

    return usuario;
}