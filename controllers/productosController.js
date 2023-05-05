const productosModel = require("../models/productosModel")
module.exports = {
    getAll: async function(req,res,next){
        try{
         const documents = await productosModel.find().populate("categoria").select("nombre precio").sort({price: -1})
            res.status(201).json(documents)
        }catch(e){
            console.log(e)
            res.status(400).json({message: e.message})
        }
    },
    getAllDestacados: async function(req,res,next){
        try{
         const documents = await productosModel.find({destacado:true}).populate("categoria").select("nombre precio").sort({price: -1})
            res.status(201).json(documents)
        }catch(e){
            console.log(e)
            res.status(400).json({message: e.message})
        }
    },
    getById: async function(req,res,next){
        try{
         const document = await productosModel.findById(req.params.id)
            res.status(201).json(document)
        }catch(e){
            e.status= 400
            next(e)
        }},
    create: async function(req,res,next){
        try{
            const document = new productosModel({
                nombre: req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                codigo: req.body.codigo,
                categoria: req.body.categoria,
                destacado: req.body.destacado || fañse
            })
           const product =  await document.save()
            res.status(201).json(product)
        }catch(e){
            console.log(e)
            e.status= 400
            next(e)
        }
    },
    update: async function(req,res,next){
        try{
            const update = await productosModel.updateOne({_id:req.params.id},req.body)
            res.status(200).json(update)
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    delete: async function(req,res,next){
      try{
            const deleteResponse = await productosModel.deleteOne({_id:req.params.id})
            res.json(deleteResponse)
      }catch(e){
            console.log(e)
            next(e)
      }
    }
}