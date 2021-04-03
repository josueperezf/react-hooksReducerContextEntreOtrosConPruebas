import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state, incrementar, descrementar, reiniciar} = useCounter(100);

    return (
        <>
            <h1>Contador con Hook: {state}</h1>
            <hr/>
            {/* de esta manera no se pude llamar, ya que desde el inicio cuando comienza a renderizar el html llamaria al incrementar y debe enviar parametros
            <button className="btn " onClick={incrementar(2)} >+ 1</button>*/}
            <button className="btn " onClick={()=>incrementar(2)} >+ 1</button>
            <button className="btn" onClick={ reiniciar}>Reset</button>
            <button className="btn" onClick={ ()=>descrementar(1)}>- 1</button>
        </>
    )
}
