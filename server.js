const express = require('express')
const app = express()
const port = 3000
const conexion = require ('./db/conexion.js')

app.get('/', (req, res) => {
  res.send(' Dashboard')
})

app.post('/usuarios', (req, res) =>{
  res.send('agregar Usuarios')
})


app.listen(port, () => {
  console.log(`servidor corriendo en el puerto: ${port}`)
})