import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
/**
 * para este ejemplo, el componente memorize llama al componente Small
 * como Memorize tiene varios useState 'useCounter, useState', cada vez que los metodos de uno de ellos son llamados,
 * se renderiza toda la pagina,
 * por ende, el componente Small es llamada cada vez que el metodo de modificar cualquier useState es llamado
 * para evitar ello se usa el memo, que lo que hace es memorizar el contenido del componente Small,
 * y solo llamarlo de nuevo solo cuando el parametro que recibe es cambiado de valor
*/


export const Memorize = () => {

    const {contador, incrementar} = useCounter(10);
    const [show, setshow] = useState(true);


    return (
        <div>
            <h1> Memorize</h1>
            <hr/>
            <h1> Contador: <Small value={contador}  /> </h1>
            <br/>
            <button
                className="btn btn-primary"
                onClick={incrementar}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={ ()=>setshow(!show) }
            >
                Show/Hide {JSON.stringify(show) }
            </button>
        </div>
    )
}
