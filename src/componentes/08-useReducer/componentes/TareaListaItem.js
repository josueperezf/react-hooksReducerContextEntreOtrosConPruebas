import React from 'react'

export const TareaListaItem = ({tarea, i, handleDelete, handleToggle}) => {
    return (
        <li className='list-group-item'  key={tarea.id} >
            <p className={ `${tarea.done && 'complete'}`}
                onClick={()=>handleToggle(tarea.id)}
            >
                {i+1 }. {tarea.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={()=>handleDelete(tarea.id)}
            >
                Borrar
            </button>
        </li>
    )
}
