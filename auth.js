const passport = require('passport');
const passportJWT = require('passport-jwt');
const strategy = require('passport-jwt').Strategy;
const extract = passportJWT.ExtractJwt;

module.exports = app => {
    const usuario = app.db.models.usuario;
    const config = app.lib.config;

    let opts = {
        jwtFromRequest: extract.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret        
    }    
    
    const stg = new strategy(opts, (payload, done) => {
        usuario.findById(payload.gid).then(usu => {
            if (usu) {
                return done(null, {
                    gid: usuario.gid,
                    email: usuario.email
                });
            }
            return done(null, false);
        })
        .catch(error => done(error, null));
    });

    passport.use(stg);

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', config.jwtSession);
        }
    };
};