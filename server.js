const express = require('express')
const app = express()
const port = 3000
const conexion = require ('./db/conexion.js')

// Método GET para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
});


// Método GET para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Método PATCH para actualizar un usuario por ID
app.patch('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

  res.json(usuario);
});



app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`servidor corriendo en el puerto: ${port}`)
});


