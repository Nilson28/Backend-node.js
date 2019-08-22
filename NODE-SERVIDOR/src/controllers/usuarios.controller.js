import usuarios from '../models/usuarios';

export async function createUsuarios(req, res){
    const {idusuario, nomusuario, correo, telefono, contraseña, sexo, tipo} = req.body;
    try{
        let newUsuario = await usuarios.create({
            idusuario,
            nomusuario,
            correo,
            telefono,
            contraseña,
            sexo,
            tipo
        },{
            fields: ['idusuario', 'nomusuario', 'correo', 'telefono', 'contraseña', 'sexo', 'tipo']
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
        const {idUsuario} = request.params;
        const usuario = await usuarios.findOne({
            where:{
                idUsuario
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
    
    const {idusuario, contraseña} = req.body;
    try{
        const tipoUsuario = await usuarios.findOne({
            attributes: ['tipo'],
            where:{
                idusuario,
                contraseña
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



