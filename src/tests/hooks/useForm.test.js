import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm',()=>{
    const valorInicialForm = {
        name: 'Josue',
        email: 'josueperezf'
    };

    test('debe de regresar un formulario por default', () => {
        // usar to  equal
        const {result} =  renderHook (()=>useForm(valorInicialForm));
        const [ formValues, handleInputChange, reset] = result.current;

        expect(valorInicialForm).toEqual(formValues);
        expect(typeof handleInputChange).toEqual('function');
        expect(typeof reset).toEqual('function');
    });

    test('Debe cambiar el valor del name del formulario', () => {
        const {result} =  renderHook (()=>useForm(valorInicialForm));
        // la ',' es para indicar que no me interesa importar el primer elemento que exporta el useForm
        const [ , handleInputChange] = result.current;
        act(()=>{
            handleInputChange({target:{
                name: 'name',
                value: 'Josue Perez'
            }});
        });
        const [ formValues] = result.current;
        expect(formValues).toEqual({...valorInicialForm, name: 'Josue Perez'});
    });

    test('debe de restablecer el formulario con el RESET', () => {
        // primero le cambiamos el valor, luego llamamos al reset para ver si realmente coloco el valor como estaba inicialmente
        const {result} =  renderHook (()=>useForm(valorInicialForm));
        // la ',' es para indicar que no me interesa importar el primer elemento que exporta el useForm
        const [ , handleInputChange, reset] = result.current;
        act(()=>{
            handleInputChange({target:{
                name: 'name',
                value: 'Josue Perez'
            }});
            reset();
        });
        const [ formValues] = result.current;
        expect(formValues).toEqual(valorInicialForm );

    });
    
    
});