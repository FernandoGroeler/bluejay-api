//-> rotas pelo consign - raiz
module.exports = app => {
    app.get('/', (req, res) => {
        res.json({
            status: 'bluejay-api'
        });
   });    
};