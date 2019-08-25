import usuarios from '../models/usuarios';

export async function createUsuarios(req, res){
    const {id_usuario, nom_usuario, correo, telefono, pass, sexo, tipo} = req.body;
    try{
        let newUsuario = await usuarios.create({
            id_usuario,
            nom_usuario,
            correo,
            telefono,
            pass,
            sexo,
            tipo
        },{
            fields: ['id_usuario', 'nom_usuario', 'correo', 'telefono', 'pass', 'sexo', 'tipo']
        });
        if(newUsuario){
            return res.json({
                data: newUsuario
            });
        }
        res.send('received');
    }catch(e){
        console.log(e);
    }
}

export async function consultUsuarios(req, res){
    try{
        const allusers = await usuarios.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneUsuario(req, res){
    try{
        const {id_usuario} = request.params;
        const usuario = await usuarios.findOne({
            where:{
                id_usuario
            }
        })
        res.json({
            data: usuario
        })
    }catch(e){
        console.log(e);
    }
}

export async function consultarLogin(req, res){
    
    const {id_usuario, pass} = req.body;
    try{
        const tipoUsuario = await usuarios.findOne({
            attributes: ['tipo'],
            where:{
                id_usuario,
                pass
            }
        });
        if(tipoUsuario){
            return res.send(tipoUsuario);
        }else
             return res.json(null);
    }catch(e){
        console.log(e);
        res.json({
            message: "error",
            data: {}
        });
    }
}



