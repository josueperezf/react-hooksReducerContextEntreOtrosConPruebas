import React, { useState } from 'react'
import '../02-useEffect/effect.css';
import {MultipleCustomHooks} from '../03-ejemplos/MultipleCustomHooks';

export const EjemploRealRef = () => {

    const [show, setshow] = useState(false);

    return (
        <div>
            <h1> Ejemplo Real de uso del hook Ref </h1>
            <hr/>
            { (show) && <MultipleCustomHooks/> }
            <button
                className="btn btn-primary mt-5"
                onClick={ ()=>{setshow( !show )}} >
                Show/Hide
            </button>
        </div>
    )
}
