const estadoInicial =[{
    id: 1,
    tarea : 'comprar pan',
    done: false
}];


const miFuncion = (state = estadoInicial, accion)=>{
    if(accion?.type === 'agregar') {
        return [...state, accion.payload]
    }
    return state;
}


let tareas = miFuncion();

const nuevaTarea = {
    id: 2,
    tarea : 'comprar leche',
    done: false
};

const agregarTareaAccion = {
    type:   'agregar',
    payload: nuevaTarea
}


tareas = miFuncion(tareas, agregarTareaAccion );

console.log(tareas);