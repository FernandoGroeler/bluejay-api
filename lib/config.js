const sequelize = require('sequelize');
const op = sequelize.Op;

module.exports = {
    database: 'teste',
    username: 'postgres',
    password: 'postgres',

    params: {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false,
            paranoid: false,
            underscored: true,
            freezeTableName: true,
            version: false,
            charset: 'utf8'
        },

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,            
            idle: 10000
        },
        
        logging: false,
        force: true, //-> força recriar todas as tabelas da base de dados - para teste

        operatorsAliases: {
            $eq: op.eq,
            $ne: op.ne,
            $gte: op.gte,
            $gt: op.gt,
            $lte: op.lte,
            $lt: op.lt,
            $not: op.not,
            $in: op.in,
            $notIn: op.notIn,
            $is: op.is,
            $like: op.like,
            $notLike: op.notLike,
            $iLike: op.iLike,
            $notILike: op.notILike,
            $regexp: op.regexp,
            $notRegexp: op.notRegexp,
            $iRegexp: op.iRegexp,
            $notIRegexp: op.notIRegexp,
            $between: op.between,
            $notBetween: op.notBetween,
            $overlap: op.overlap,
            $contains: op.contains,
            $contained: op.contained,
            $adjacent: op.adjacent,
            $strictLeft: op.strictLeft,
            $strictRight: op.strictRight,
            $noExtendRight: op.noExtendRight,
            $noExtendLeft: op.noExtendLeft,
            $and: op.and,
            $or: op.or,
            $any: op.any,
            $all: op.all,
            $values: op.values,
            $col: op.col            
        }
    },

    jwtSecret: '#bluejay',
    jwtSession: {
        session: false
    }
};