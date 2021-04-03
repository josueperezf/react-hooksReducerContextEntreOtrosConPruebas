import React, { useRef } from 'react'
import '../02-useEffect/effect.css';
export const FocusScreen = () => {
    // la siguiente linea es para crear una referencia a un elemento html, en la propiedad current tiene lo que tenga nuestro element html
    const inputRef = useRef();
    const handleClick = ()=>{
        // console.log(inputRef);
        // document.querySelector('input').select();
        // current es como la propiedad que tiene el emento al que hacemos referencia
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick}
            >
                Focus
            </button>
        </div>
    )
}
