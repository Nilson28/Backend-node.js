import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import inscripciones from './inscripciones';
import encuestas from './encuestas';

const usuarios = sequelize.define('usuarios', {
    idusuario:{
       type: Sequelize.TEXT,
       primaryKey: true
    },
    nomusuario:{
        type: Sequelize.TEXT
    },
    correo:{
        type: Sequelize.TEXT
    },
    telefono:{
        type: Sequelize.TEXT
    },
    contraseña:{
        type: Sequelize.TEXT
    },
    sexo:{
        type: Sequelize.TEXT
    },
    tipo:{
        type: Sequelize.TEXT
    }     
},{
    timestamps: false
    });

usuarios.hasMany(inscripciones, {foreinKey: 'idusuario', sourceKey: 'idusuario'});
inscripciones.belongsTo(usuarios, {foreingKey: 'idusuario', sourceKey: 'idusuario'});
usuarios.hasMany(encuestas, {foreinKey: 'idusuario', sourceKey: 'idusuario'});
encuestas.belongsTo(usuarios, {foreinKey: 'idusuario', sourceKey: 'idusuario'});


export default usuarios;