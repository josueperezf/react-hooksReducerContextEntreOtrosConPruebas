import React, { useEffect, useState } from 'react'
import './effect.css';
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const {name, email} = formState;
    // useeffect sirve para cuando se manejan select dependientes, ejemplo, estado , municipio y parroquia
    // los useeffect son como efectos secundarios se que se llaman si ocurre cierta condicion, creo que son como los valueChanges de angular
    useEffect(() => {
        console.log('este useEffect se dispara solo cuando se carga');
    },[]);

    useEffect(() => {
        console.log('este useEffect se llama cada vez que se cambia un elemento del formState o mejor dicho elemento del formulario para este ejemplo');
    },[formState]);

    useEffect(() => {
        console.log('este useEffect se llama cada vez que el valor de email');
    },[email]);

    /* asi lo hizo josue
    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setFormState({
            ...formState,
            name:e.target.value
        });
    }
    */
   // asi lo hizo fernando
   const handleInputChange = ({target})=>{
    setFormState({
        ...formState,
        [target.name]:target.value
    });
}
    return (
        <>
         <h1> Use Effect</h1>
         <p> si se pone 123 en el name carga el componente mensaje</p>
         <hr/>
         <div className="form-group">
             <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                autoCapitalize="true"
                value={name}
                onChange={ handleInputChange }

             />
         </div>
         <div className="form-group">
             <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                autoCapitalize="true"
                value={email}
                onChange={ handleInputChange }

             />
         </div>
         
         { (name === '123') && <Message/>}
        </>
    )
}
