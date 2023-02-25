const express = require('express')
const userSchema = require('../Models/Users.js')

const router = express.Router()

//Ruta de prueba POST (endpoint de prueba POST)

router.post('/users', (req, res) => {
const user = userSchema(req.body);
user.save()
.then((data) => res.send(data))
.catch((e) => res.send({message: e}));
})


//Ruta de prueba GET (endpoint de prueba GET)

router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.send(data))
    .catch((e) => res.send({message: e}));
    })

//Ruta de prueba GET 1 item (endpoint de prueba GET 1 item)

router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
    .findById(id)
    .then((data) => res.send(data))
    .catch((e) => res.send({message: e}));
    })

//Ruta de prueba PUT 1 item (endpoint de prueba PUT 1 item)

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email} = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.send(data))
    .catch((e) => res.send({message: e}));
    })


//Ruta de prueba DELETE 1 item (endpoint de prueba DELETE 1 item)

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.send(data))
    .catch((e) => res.send({message: e}));
    })

module.exports = router