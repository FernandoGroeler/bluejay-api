module.exports = app => {
    const entidade = app.db.models.entidade;

    app.route('/entidade')
        // todo: ativar para autenticar .all(app.auth.authenticate())
        .get((req, res) => {
            entidade.findAll({
                /* todo: ativar para autenticar
                where: {
                    gid_usuario: req.gid_usuario
                }
                */
            }).then(result => res.json(result)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
        .post((req, res) => {
            req.body.gid_usuario = req.gid_usuario;

            entidade.create(req.body).then(result => res.json(result)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        });

    app.route('/entidade/:gid')
        // todo: ativar para autenticar .all(app.auth.authenticate())
        .get((req, res) => {
            entidade.findOne({
                where: {
                    gid: req.params.gid,
                    // todo: ativar para autenticar gid_usuario: req.usuario.gid
                }
            }).then(result => {
                if (result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
        .put((req, res) => {
            entidade.update(req.body, {
                where: {
                    gid: req.params.gid,
                    // todo: ativar para autenticar gid_usuario: req.usuario.gid
                }
            }).then(result => res.sendStatus(204)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
        .delete((req, res) => {
            entidade.destroy({
                where: {
                    gid: req.params.gid,
                    // todo: ativar para autenticar gid_usuario: req.usuario.gid
                }
            }).then(result => res.sendStatus(204)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        });    
};