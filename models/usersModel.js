const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,"El campo es obligatorio"]
    },
    email: {
        type:String,
        required:[true,"El campo es obligatorio"],
    },
    password: {
        type:String,
        required:[true,"El campo es obligatorio"],
        minLength:[6,"Se necesitan porlomenos 6 caracteres"]
    }
});
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
module.exports = mongoose.model("usuarios",userSchema)