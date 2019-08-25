import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const eventos = sequelize.define( 'eventos',{
    codigo_evento:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_evento:{
        type: Sequelize.STRING(30)
    },	
    denpendecia:{
        type: Sequelize.STRING(30)
    },
    fechainicio:{
        type: Sequelize.DATE
    },	
    fechafinal:{
        type: Sequelize.DATE
    }
});

export default eventos;