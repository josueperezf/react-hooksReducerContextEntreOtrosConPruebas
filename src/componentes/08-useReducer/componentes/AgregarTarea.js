import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const AgregarTarea = ({handleAgregarTarea}) => {
    const [{descripcion}, handleInputChange, reset] = useForm ({
        descripcion: ''
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (descripcion.trim().length ===0) {
            return;
        }
        const nuevaTarea = {
            id:     new Date().getTime(),
            desc:   descripcion,
            done:   false
        };
        handleAgregarTarea(nuevaTarea);
        reset();
    }
    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr/>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='descripcion'
                    value={descripcion}
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    onChange={ handleInputChange }
                />
                <button
                    className='btn btn-outline-primary mt-1 w-100'
                    type='submit'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
