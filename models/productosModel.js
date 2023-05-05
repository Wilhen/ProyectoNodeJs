const mongoose = require("../config/mongodb")

const productsSchema= mongoose.Schema({
    nombre: {
        type:String,
        required:true,
        minLength:3
    },
    precio: {
        type: Number,
        required:[true,"El campo es obligatorio"],
        min:[0,"El precio debe ser mayor a 0"]
    },
    codigo: Number,
    descripcion: String,
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"categorias"
    },
    destacado: Boolean

})

productsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})

module.exports = mongoose.model("productos",productsSchema)