import React from 'react'
/**
 * para este ejemplo, el componente memorize llama a este componente,
 * como memorize tiene varios useState, cada vez que los metodos de uno de ellos son cambiados, se renderiza toda la pagina,
 * por ende, el componente Small es llamada cada vez que el metodo de modificar cualquier useState es llamado
 * para evitar ello se usa el memo, que lo que hace es memorizar el contenido de este componente,
 * y solo llamarlo de nuevo solo cuando el parametro que recibe es cambiado de valor
*/
export const Small = React.memo( ({value}) => {
    console.log('Me volvieron a llamar =( ');
    return (
        <small>{value}</small>
    )
})