import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effect.css';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);

    /*
    const incrementar = (numero)=>{
        setcounter((c)=> c + numero );
    }
    */

    // useCallback sirve para mantener en memoria una funcion
    /**
     * useCallback va a regresar una version memorizada de lo que tenga su funcion
     * que va a servir para enviarla como argumentos a otros lugares,
     * y react va a saber que la funcion no ha cambiado si la dependencia no ha cambiado
     * */
    // va a mantener en memoria si la dependencia setcounter no ha cambiado
    const incrementar = useCallback(
        // numero es el numero con el que se incrementara, ejemplo de 5 en 5
        (numero) => {
            // setcounter(counter+1); // de esta manera mantengo referencia
            // de la siguiente forma elimino dependencia y evito que se llame varias veces el componente ShowIncrement al incrementar el contador
            setcounter((c)=> c + numero );
        }, [setcounter]
    )

    return (
        <div>
            <h1>Uso del hook useCallback {counter}</h1>
            <hr/>
            <ShowIncrement incrementar={incrementar} />
        </div>
    )
}
