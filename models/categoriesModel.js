const mongoose = require("../config/mongodb");

const categorySchema = mongoose.Schema({
    nombre: String 
});
module.exports = mongoose.model("categorias",categorySchema)