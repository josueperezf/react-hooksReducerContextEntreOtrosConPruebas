import React, { useState } from 'react'
import './counter.css';
export const CounterApp = () => {
    //en el siguiente ejercicio se quiere hacer un contador, pero el stato tiene variables y solo se quiere que se sume la primera variable
    // con el state agrupo todas las propiedades que tenga el useState
    const [state, setstate] = useState ({
        contador1:10,
        contador2:20,
        contador3:30,
        contador4:40,
    });
    // con la siguiente linea creo dos variables llamdas contador 1 y contador 2 con lo que tenga la variable state
    const { contador1, contador2 } = state;
    // en sumar llamo a setstate, como él debe retornar un objeto en el formato que antes tendia, entonces se usa la variable state
    // en ella esta TODO su contenido, en la siguiente linea, reemplazo lo que tenia contador1, por contador1:contador1+1
    // eso es similar a decir
    /**
     * return {
     * contador1:contador1+1,
     * contador2:contador2
     * contador3:contador3
     * contador4:contador4
     * }
     */
    const sumar = ()=>{
        setstate({
            ...state,
            contador1:contador1+1
        });
    };
    return (
        <>
            <h1>Counter1 {contador1}</h1>
            <h1>Counter2 {contador2}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={sumar} >+1</button>
        </>
    )
}
