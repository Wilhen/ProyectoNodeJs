const usersModel = require("../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports= {
    getAll: async function(req,res,next){
        try{
            const usuarios = await usersModel.find()
            res.status(201).json(usuarios)
        }catch(e){
            console.log(e)
            e.status= 400
            next(e)
        }
    },
    validate: async function(req,res,next){
        try{
            const usuarios = await usersModel.findOne({email:req.body.email})
            if(!usuarios){
                res.json({message:"El email/contraseña es incorrecto/a"})
                return
            }
            if(bcrypt.compareSync(req.body.password,usuarios.password)){
                const token = jwt.sign({userId:usuarios._id},req.app.get("secretKey"),{expiresIn:'1h'})
                res.json({token})
            }else{
                res.json({message:"El email/contraseña es incorrecto/a"})
                return
            }
            
        }catch(e){
            next(e)
        }
    },
    create: async function(req,res,next){
        try{
            const document = new usersModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
           const user =  await document.save()
            res.status(201).json(user)
        }catch(e){
            console.log(e)
            e.status= 400
            next(e)
        }
    }
}