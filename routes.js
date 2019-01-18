const express = require('express');
//importa los modelos
const { Cliente, Olivo } = require('./models');

const router = express.Router();

router.get('/clientes', (req, res) => {  

    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
  });
  
  // ver un Cliente
router.get('/clientes/:id', (req, res) => {  
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// ver todos los Olivos

router.get('/olivos', (req, res) => {  
    Olivo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }); 
});

// ver un Olivo
router.get('/olivos/:id', (req, res) => {  
    Olivo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// eliminar un Cliente
router.delete('/clientes/:id', (req, res) => { 
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// eliminar un Olivo
router.delete('/olivos/:id', (req, res) => { 
    Olivo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// actualizar un Cliente
router.put('/clientes/:id', (req, res) => {
    Cliente.findOneAndUpdate (
        { _id: req.params.id }, 
        { $set: { nombre: req.body.nombre, 
                apellidos: req.body.apellidos,
                lugar_residencia: req.body.lugar_residencia, 
                cortijo: req.body.cortijo } }, 
        (err, data) => {
          if (err) res.json({ error: err });
          else     res.json(data);
      });
  });

  // actualizar un Olivo
router.put('/olivos/:id', (req, res) => {
    Olivo.findOneAndUpdate (
        { _id: req.params.id }, 
        { $set: { tipo: req.body.tipo, 
                año: req.body.año,
                posicion: req.body.posicion, 
                tipo_aceituna: req.body.tipo_aceituna } }, 
        (err, data) => {
          if (err) res.json({ error: err });
          else     res.json(data);
      });
  });

    // insertar un Cliente
router.post('/clientes', (req, res) => {
    const cliente = new Cliente({ 
                        nombre: req.body.nombre, 
                        apellidos: req.body.apellidos,
                        lugar_residencia: req.body.lugar_residencia, 
                        cortijo: req.body.cortijo });
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// insertar un Olivo
router.post('/olivos', (req, res) => {
    const olivo = new Olivo({ 
                        tipo: req.body.tipo, 
                        año: req.body.año,
                        posicion: req.body.posicion, 
                        tipo_aceituna: req.body.tipo_aceituna });
    olivo.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

  module.exports = router;