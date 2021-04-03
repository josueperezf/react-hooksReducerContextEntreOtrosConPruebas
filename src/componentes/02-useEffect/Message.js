import React, { useEffect } from 'react'

export const Message = () => {
    // useEffect casi funciona como ciclo de vida de angular, tipo ngoninit, y el return es cuando sale del componente
    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
        }
    }, [])
    return (
        <div>
            <h3>Eres Genial</h3>
        </div>
    )
}
