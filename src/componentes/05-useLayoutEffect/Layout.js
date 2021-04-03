import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
export const Layout = () => {

    const {contador, incrementar} = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${contador}`;
    const { data } = useFetch(url);
    /**
     * con un ! en el data, si la misma viene null, el resultado seria true,
     * con dos !! en el data, si la data viene null, el resultado es falso,
     * con dos !! si el resultado es true, mejor dicho, si tiene data, entonces '&&' obtenga de data[0]
     */
    // si existe la data extrae la posicion cero

    
    const { quote} = !!data && data[0];

    const etiquetaP = useRef();
    const [tamanoDeLaEtiquetaP, setstateEquitaP] = useState ({});

    useLayoutEffect (() => {
        console.log('termino de cargar');
        console.log(etiquetaP.current.getBoundingClientRect());
        setstateEquitaP(etiquetaP.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>uso del hook useLayoutEffect </h1>
            <p>Este hook es similiar a ngAfterViewInit de angular </p>
            <p> Este ejemplo busca medir las dimensiones de una equite 'p', que se carga al presionar un boton, esto hace que no siempre la etiqueta tenga el mismo alto o ancho, para ello se una <b>useLayoutEffect</b> para esperar a que se renderice el html para luego medir el tamaño </p>
            <hr/>
            
            <blockquote className="blockquote text-end">
                <p ref={etiquetaP} >{quote}</p> <br/>
            </blockquote>
            <pre > { JSON.stringify(tamanoDeLaEtiquetaP, null, 3)}</pre>
             
            <button
                className="btn btn-primary"
                onClick={()=>incrementar(1) }
                > Siguiente frase</button>
        </div>
    )
}
