module.exports = app => {
    let port = app.get('port');
    let tipoTelefone = app.db.models.tipotelefone;
    
    app.db.sequelizeConnection.sync().done(() => {
        app.listen(port, () => {
            console.log(`bluejay-api - porta ${port}`)
        });

        tipoTelefone.findOrCreate({where: {id: 1}, defaults: {descricao: 'Celular', id: 1}});
        tipoTelefone.findOrCreate({where: {id: 2}, defaults: {descricao: 'Residencial', id: 2}});
    });

    /*
    let tipoTelefone = app.db.models.tipotelefone;
    tipoTelefone.findOrCreate({where: {id: 1}, defaults: {descricao: 'abcdef', id: 1}})
    .spread((tt, created) => {
        console.log(tt.get({
            plain: true
        }))
        console.log(created)
    })
    */    
}