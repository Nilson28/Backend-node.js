import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import conferencias from './conferencias';

const espacios = sequelize.define('espacios', {
    codigoEspacio:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nomEspacio:{
        type: Sequelize.TEXT
    },
    capacidad:{
        type: Sequelize.INTEGER
    }	
});

espacios.hasMany(conferencias, {foreinKey: 'codigoespacio', sourceKey: 'codigoespacio'});
conferencias.belongsTo(espacios, {foreingKey: 'codigoespacio', sourceKey: 'codigoespacio'});

export default espacios;