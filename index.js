const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { nuevoCurso,consultarCursos,editarCurso,eliminarCurso } = require('./consultas');
console.clear();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Ruta raíz
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// Ruta POST
app.post('/tarea',async (req,res)=>{
    const { nombre,dias,fecha,duracion_meses } = req.body;
    const respuesta = await nuevoCurso(nombre,dias,fecha,duracion_meses);
    res.send(respuesta);
})

// Ruta GET
app.get('/tareas',async (req,res)=>{
    const respuesta = await consultarCursos();
    res.send(respuesta);
})

// Ruta PUT
app.put('/tarea/:id',async (req,res)=>{
    const { id } = req.params;
    const { nombre,dias,fecha,duracion_meses } = req.body
    const respuesta = await editarCurso(id,nombre,dias,fecha,duracion_meses);
    res.send(respuesta);
})

// Ruta DELETE
app.delete('/tarea/:id',async(req,res)=>{
    const { id } = req.params;
    const respuesta = await eliminarCurso(id);
    
    respuesta > 0
        ? res.send(`La Tarea de id ${id} fué eliminado con éxito`)
        : res.send('No existe un curso registrado con ese id');
    })

// SERVER
    app.listen(3000,()=> console.log('Server en Puerto 3000'));
    