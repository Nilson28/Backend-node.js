import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import inscripciones from './inscripciones';
import encuestas from './encuestas';

const conferencias = sequelize.define('conferencias', {
    codigoconferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreconferencia:{
        type: Sequelize.TEXT
    }, 
    cupo:{
        type: Sequelize.TEXT
    },
    codigoevento:{
        type: Sequelize.INTEGER
    }, 
    idconferencista:{
        type: Sequelize.TEXT
    }, 
    codigoespacio:{
        type: Sequelize.INTEGER
    }, 
    inicio:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }, 
    final:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    } 
});

conferencias.hasMany(inscripciones, {foreinKey: 'codigoconferencia', sourceKey: 'codigoconferencia'});
inscripciones.belongsTo(conferencias, {foreingKey: 'codigoconferencia', sourceKey: 'codigoconferencia'});
conferencias.hasMany(encuestas, {foreinKey: 'codigoconferencia', sourceKey: 'codigoconferencia'});
encuestas.belongsTo(conferencias, {foreinKey: 'codigoconferencia', sourceKey: 'codigoconferencia'});

export default conferencias;