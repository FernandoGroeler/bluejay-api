module.exports = app => {
    const usuario = app.db.models.usuario;

    // para testar - remover quando estiver funcionando
    app.route('/usuario/:id_usuario')
        .get((req, res) => {
            usuario.findById(req.params.id_usuario, {
                include: [{
                    model: app.db.models.entidade,
                    attributes: ['nome']
                }],
                attributes: ['id_usuario', 'senha']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
    //--------------------------------------------------

    app.route('/usuario')
        // todo: ativar para autenticar .all(app.auth.authenticate())
        .get((req, res) => {
            usuario.findById(req.usuario.id_usuario, {
                include: [{
                    model: app.db.models.entidade,
                    attributes: ['nome']
                }],
                attributes: ['id_usuario', 'senha']
                // todo: attributes: ['id_usuario', 'usuario', 'senha'],
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        })
        .delete((req, res) => {
            usuario.destroy({
                where: {
                    id_usuario: req.usuario.id_usuario
                }
            })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
        });

    app.post('/usuario', (req, res) => {
        usuario.create(req.body).then(result => res.json(result)).catch(error => {
            res.status(412).json({
                msg: error.message
            });
        });
    });
};