const fs = require('fs');
let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas)

    fs.writeFile('./db/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo guardar en la base de datos', err);
    })
}

const leerDB = () =>{
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
}
const crear = (descripcion) =>{

    leerDB();
    let tarea = {
        descripcion,
        completado:false,
    }

    listadoTareas.push(tarea);
    guardarDB();
    return tarea;
}
const getListado = () =>{
    leerDB();
    return listadoTareas;
}
const actualizar = (descripcion, completado = true) =>{

    leerDB();
    let index = listadoTareas.findIndex(tarea=> tarea.descripcion === descripcion);
    if(index < 0) 
      return false;
    listadoTareas[index].completado = completado === "true";
    console.log( listadoTareas[index])
    guardarDB();
    return true;
}

const borrar = (descripcion, completado = true) =>{
    leerDB();
    let nuevoListado = listadoTareas.filter(tarea=> tarea.descripcion != descripcion)
    if(nuevoListado.length === listadoTareas.length)
        return false
    else {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}