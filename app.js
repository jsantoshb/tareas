const colors = require('colors')
const argv = require('./config/yargs').argv;
const tareas = require('./tarea/tarea');
let comando = argv._[0];

switch( comando )
{
    case 'crear':
        let tarea = tareas.crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        
        let listado = tareas.getListado();
        for(let tarea of listado){
            console.log('******* T A R E A S *******'.cyan)
            console.log(`Descripción: ${tarea.descripcion}`)
            console.log(`Compleatada: ${tarea.completado ? 'SI'.green: 'NO'.red}`)
            console.log('***************************'.cyan)
        }

        break;
    case 'actualizar':
        let actualizo = tareas.actualizar(argv.descripcion, argv.completado)
        console.log(actualizo)
        break;
    case 'borrar':
        let borro = tareas.borrar(argv.descripcion)
        console.log(borro)
        break;
    default:
        console.log('Comando No reconocido'.red);
        break;
}