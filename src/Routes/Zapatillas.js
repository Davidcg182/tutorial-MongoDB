const express = require('express')
const zapSchema = require('../Models/Zapatillas.js')

const router = express.Router()

//Ruta de prueba POST (endpoint de prueba POST)

router.post('/zapatillas', (req, res) => {
    const zapatillas = zapSchema(req.body);
    zapatillas.save()
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})


router.get('/zapatillas', (req, res) => {
    zapSchema
        .find()
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

router.get('/zapatillas/:id', (req, res) => {
    const { id } = req.params
    zapSchema
        .findById(id)
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})


router.put('/zapatillas/:id', (req, res) => {
    const { id } = req.params;
    const { actividad, color, imagen1, marca, modelo, precio, talles } = req.body;
    zapSchema
        .updateOne({ _id: id }, { $set: { actividad, color, imagen1, marca, modelo, precio, talles } })
        .then((data) => res.send(data))
        .catch((e) => res.send({ message: e }));
})

router.delete('/zapatillas/:id', (req, res) => {
    const { id } = req.params;
    zapSchema
    .remove({ _id: id })
    .then((data) => res.send(data))
    .catch((e) => res.send({message: e}));
    })

    
module.exports = router