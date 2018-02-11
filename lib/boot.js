module.exports = app => {
    let port = app.get('port');
    
    app.db.sequelizeConnection.sync().done(() => {
        app.listen(port, () => {
            console.log(`bluejay-api - porta ${port}`)
        });
    });
}