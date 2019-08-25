import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const inscripciones = sequelize.define( 'inscripciones',{
    codigo_conferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    fecha_registro:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado:{
        type: Sequelize.STRING(30)
    }
});


export default inscripciones;