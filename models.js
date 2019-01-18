const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',{
    nombre: String,
    apellidos: String,
    lugar_residencia: String,
    cortijo: String
});

const Olivo = mongoose.model('Olivo',{
    tipo: String,
    año: Number,
    posicion: String,
    tipo_aceituna: String
});

module.exports = {
    Cliente,
    Olivo
};






