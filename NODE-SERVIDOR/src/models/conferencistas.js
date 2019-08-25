import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import conferencias from './conferencias';

const conferencistas = sequelize.define('conferencistas', {
    id_conferencista:{
        type: Sequelize.STRING(30),
        primaryKey: true
    },
    nom_conferencista:{
        type: Sequelize.STRING(30)
    }, 
    correo:{
        type: Sequelize.STRING(30)
    }, 
    telefono:{
        type: Sequelize.STRING(30)
    }, 
    especialidad:{
        type: Sequelize.STRING(30)
    }, 
    sexo:{
        type: Sequelize.STRING(30)
    }, 
    estado:{
        type: Sequelize.STRING(30)
    }
});

conferencistas.hasMany(conferencias, {foreinKey: 'id_conferencista', sourceKey: 'id_conferencista'});
conferencias.belongsTo(conferencistas, {foreinKey: 'id_conferencista', sourceKey: 'id_conferencista'});


export default conferencistas;