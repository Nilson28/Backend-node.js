import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';


const eventos = sequelize.define( 'eventos',{
    codigoEvento:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreEvento:{
        type: Sequelize.TEXT
    },	
    denpendecia:{
        type: Sequelize.TEXT
    },
    fechainicio:{
        type: Sequelize.DATE
    },	
    fechafinal:{
        type: Sequelize.DATE
    }
});

export default eventos;