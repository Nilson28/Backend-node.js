import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const inscripciones = sequelize.define( 'inscripciones',{
    codigoconferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idusuario:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    fecharegistro:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado:{
        type: Sequelize.TEXT
    }
});


export default inscripciones;