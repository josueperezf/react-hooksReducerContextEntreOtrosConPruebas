import React, { useMemo, useState } from 'react';
import '../02-useEffect/effect.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


export const UsoDeMemoHook = () => {

    const {contador, incrementar} = useCounter(5000);
    const [show, setshow] = useState(true);

    // useMemo llama a una funcion solo cuando el parametro, en este caso, 'contador' cambio de valor
    // como procesoPesado hace un retur de un string, pues ese string se almacena en la variable memoProcesoPesado
    const memoProcesoPesado = useMemo(() => procesoPesado(contador), [contador]);


    return (
        <div>
            <h1> uso de Memo hook</h1>
            <h1> Contador: <small>{contador}</small> </h1>
            <hr/>
            <br/>
            <p>{memoProcesoPesado}</p>
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
