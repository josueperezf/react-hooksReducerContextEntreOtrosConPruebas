import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { TareaLista } from './componentes/TareaLista';
import { AgregarTarea } from './componentes/AgregarTarea';

const init = ()=>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
}
export const TareasApp = () => {

    const [tareas, dispatch] = useReducer(todoReducer, [], init)
    
    

    // useEffect se esta colocando como un Listener que se dispara cuando cambia el valor de tareas
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const handleAgregarTarea = (nuevaTarea)=>{
        dispatch({
            type:'add',
            payload: nuevaTarea
        });
    }

    const handleDelete = (tareaId)=>{
        // console.log(tareaId);
        const accion = {
            type:'delete',
            payload: tareaId
        };
        dispatch(accion);
    }

    const handleToggle = (tareaId)=>{
        // las tareas tienen una propìedad llamada done, que sirve para saber si la tarea ya fue realizada o no, con ese metodo cambio su valor booleano
        dispatch({type:'toggle',payload: tareaId});
    }

    return (
        <div>
            <h1>Todo App ({tareas.length}) </h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                <TareaLista tareas={tareas} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className='col-5'>
                    <AgregarTarea handleAgregarTarea={handleAgregarTarea} />
                </div>
            </div>
        </div>
    )
}
