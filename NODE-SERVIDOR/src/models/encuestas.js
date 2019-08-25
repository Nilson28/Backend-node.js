import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const encuestas = sequelize.define( 'encuestas',{
    codigo_conferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    fecha_encuesta:{
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