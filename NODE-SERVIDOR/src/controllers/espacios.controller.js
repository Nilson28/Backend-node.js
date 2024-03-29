import espacios from '../models/espacios';

export async function createEspacios(req, res){
    const {nome_espacio, capacidad} = req.body;
    try{
        let newEspacios = await espacios.create({
            nome_espacio, 
            capacidad, 
        },{
            fields: ['nome_espacio', 'capacidad']
        });
        if(newEspacios){
            return res.json({
                message: "true"
            });
        }else{
            return res.json({
                message: "false"
            })
        }
    }catch(e){
        console.log(e);
    }
}

export async function consultEspacios(req, res){
    try{
        const allusers = await espacios.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneEspacios(req, res){
    try{
        const {codigo_espacio} = req.body;
        const espacio = await espacios.findOne({
            where:{
                codigo_espacio
            }
        })
        res.json({
            data: espacio
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteEspacios(req, res){
    const {codigo_espacio} = req.body;
    const deleteRowCount = await espacios.destroy({
        where:{
            codigo_espacio
        }
    });
    res.json({
        message: "espacio eliminado"
    })
}

export async function updateEspacios(req, res){
    const {codigo_espacio} = req.params;
    const {nome_espacio, capacidad} = req.body;
    espacios.findAll({
        attributes: ['codigo_espacio','nome_espacio', 'capacidad'],
        where:{
            codigo_espacio
        }
    });
    const update = await espacios.update({
        nome_espacio, 
        capacidad, 
    },{
        where:{
            codigo_espacio
        }
    });

    return res.json({
        message: "modificado"
    }) 

}