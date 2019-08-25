import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import conferencias from './conferencias';

const espacios = sequelize.define('espacios', {
    codigo_espacio:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nom_espacio:{
        type: Sequelize.STRING(30)
    },
    capacidad:{
        type: Sequelize.INTEGER
    }	
});

espacios.hasMany(conferencias, {foreinKey: 'codigo_espacio', sourceKey: 'codigo_espacio'});
conferencias.belongsTo(espacios, {foreingKey: 'codigo_espacio', sourceKey: 'codigo_espacio'});

export default espacios;