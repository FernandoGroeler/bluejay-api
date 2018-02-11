const jwtSimple = require('jwt-simple');

module.exports = app => {
    const config = app.lib.config;
    const usuario = app.db.models.usuario;

    app.post('/token', (req, res) => {
        if (req.body.email && req.body.senha) {
            const email = req.body.email;
            const senha = req.body.senha;

            usuario.findOne({
                where: {
                    email: email
                }
            }).then(usuario => {
                if (usuario.isPassword(usuario.senha, senha)) {
                    const payload = {
                        gid: usuario.gid
                    };
                    
                    res.json({
                        token: jwtSimple.encode(payload, config.jwtSecret)
                    });
                } else {
                    res.sendStatus(401);
                }
            })
            .catch(error => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }
    });
};