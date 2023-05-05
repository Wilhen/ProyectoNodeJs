const categoriesModel = require("../models/categoriesModel")
module.exports= {
    getAll: async function(req,res,next){
        try{
            const categorias = await categoriesModel.find()
            res.status(201).json(categorias)
        }catch(e){
            console.log(e)
            res.status(400).json({message: e.message})
        }
    },
    create: async function(req,res,next){
        try{
            const document = new categoriesModel({
                nombre: req.body.nombre
            })
           const product =  await document.save()
            res.status(201).json(product)
        }catch(e){
            console.log(e)
            e.status= 400
            next(e)
        }
    }
}