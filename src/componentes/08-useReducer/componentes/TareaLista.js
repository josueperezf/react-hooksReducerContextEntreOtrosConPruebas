import React from 'react'
import { TareaListaItem } from './TareaListaItem';
export const TareaLista = ({tareas, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                tareas.map((tarea, i)=>(
                    <TareaListaItem key={tarea.id}  tarea={tarea} i={i} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}
