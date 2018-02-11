module.exports = app => {
    const entidade = app.db.models.entidade;

    app.route('/entidade')
        // todo: ativar para autenticar .all(app.auth.authenticate())
        .get((req, res) => {
            entidade.findAll({
                /* todo: ativar para autenticar
                where: {
                    id_usuario: req.id_usuario
                }
                */
            }).then(result => res.json(result)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
        .post((req, res) => {
            req.body.id_usuario = req.id_usuario;

            entidade.create(req.body).then(result => res.json(result)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        });

    app.route('/entidade/:id_entidade')
        // todo: ativar para autenticar .all(app.auth.authenticate())
        .get((req, res) => {
            entidade.findOne({
                where: {
                    id_entidade: req.params.id_entidade,
                    // todo: ativar para autenticar id_usuario: req.usuario.id_usuario
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
                    id_entidade: req.params.id_entidade,
                    // todo: ativar para autenticar id_usuario: req.usuario.id_usuario
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
                    id_entidade: req.params.id_entidade,
                    // todo: ativar para autenticar id_usuario: req.usuario.id_usuario
                }
            }).then(result => res.sendStatus(204)).catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        });    
};