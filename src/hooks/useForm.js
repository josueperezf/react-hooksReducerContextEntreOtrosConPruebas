import { useState } from 'react'

// initialState es el nombre de los input que deseo que tenga el formulario
export const useForm = (initialState= {}) => {
    const [values, setvalues] = useState(initialState);

    const reset = ()=>{
        setvalues(initialState);
    }
    const handleInputChange = ({target})=>{
        setvalues({
            ...values,
            [target.name]:target.value
        });
    }
    return [values, handleInputChange, reset];
}
