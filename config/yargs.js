
const argv = require('yargs')
                .command('crear', 'Crear una tarea',{
                    descripcion:{
                        demand:true,
                        alias:'d',
                        desc:'Descripción de la tarea'
                    }
                })
                .command('actualizar', 'Actualizar una tarea',{
                    descripcion:{
                        demand:true,
                        alias:'d',
                        desc:'Actualiza el estado de la tarea'
                    },
                    completado:{
                        default:true,
                        alias:'c',
                        desc:'Marca como completado o pendiente la tarea'
                    }
                })
                .command('borrar', 'Eliminar una tarea',{
                    descripcion:{
                        demand:true,
                        alias:'d',
                        desc:'Elimina la tarea'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}