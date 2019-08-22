import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const encuestas = sequelize.define( 'encuestas',{
    codigoconferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idusuario:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    fechaencuesta:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    p1:{
        type: Sequelize.INTEGER
    },
    p2:{
        type: Sequelize.INTEGER
    },
    p3:{
        type: Sequelize.INTEGER
    },
    p4:{
        type: Sequelize.INTEGER
    },
    p5:{
        type: Sequelize.INTEGER
    }

});

export default encuestas;