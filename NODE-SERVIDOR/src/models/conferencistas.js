import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import conferencias from './conferencias';

const conferencistas = sequelize.define('conferencistas', {
    idconferencista:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    nomconferencista:{
        type: Sequelize.TEXT
    }, 
    correo:{
        type: Sequelize.TEXT
    }, 
    telefono:{
        type: Sequelize.TEXT
    }, 
    especialidad:{
        type: Sequelize.TEXT
    }, 
    sexo:{
        type: Sequelize.TEXT
    }, 
    estado:{
        type: Sequelize.TEXT
    }
});

conferencistas.hasMany(conferencias, {foreinKey: 'idconferencista', sourceKey: 'idconferencista'});
conferencias.belongsTo(conferencistas, {foreinKey: 'idconferencista', sourceKey: 'idconferencista'});


export default conferencistas;