import Sequelize, { HasMany } from 'sequelize';
import {sequelize} from '../database/database';

import inscripciones from './inscripciones';
import encuestas from './encuestas';

const usuarios = sequelize.define('usuarios', {
    id_usuario:{
       type: Sequelize.STRING(30),
       primaryKey: true
    },
    nom_usuario:{
        type: Sequelize.STRING(30)
    },
    correo:{
        type: Sequelize.STRING(30)
    },
    telefono:{
        type: Sequelize.STRING(30)
    },
    pass:{
        type: Sequelize.STRING(30)
    },
    sexo:{
        type: Sequelize.STRING(30)
    },
    tipo:{
        type: Sequelize.STRING(30)
    }     
},{
    timestamps: false
    });

usuarios.hasMany(inscripciones, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});
inscripciones.belongsTo(usuarios, {foreingKey: 'id_usuario', sourceKey: 'id_usuario'});
usuarios.hasMany(encuestas, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});
encuestas.belongsTo(usuarios, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});


export default usuarios;