
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from "../../hooks/useCounter";

// el act sirve para llamar a funciones de nuestros hook
describe('Pruebas en useCounter', ()=>{

    test('Dede de retornar valores por defecto', () => {
        const {result} =  renderHook (()=>useCounter());
        // verificar si el valor inicial del contador es 10
        // console.log(result.current);
        expect(result.current.contador).toBe(10);
        expect(typeof result.current.incrementar).toBe('function');
        expect(typeof result.current.decrementar).toBe('function');
    });

    test('Debe tener el contador en 100', () => {
        const {result} =  renderHook (()=>useCounter(100));
        expect(result.current.contador).toBe(100);
    });
    
    test('debe de incrementar el contador a 101', () => {
        const {result} =  renderHook (()=>useCounter(100));
        const {incrementar} = result.current;
        act(()=>{
            incrementar();
        });
        expect(result.current.contador).toBe(101);
    });

    test('debe de decrementar el contador a 99', () => {
        const {result} =  renderHook (()=>useCounter(100));
        const {decrementar} = result.current;
        act(()=>{
            decrementar();
        });
        expect(result.current.contador).toBe(99);
    });

    test('luego de decrementar, debe de restaurar a 100 su valor', () => {
        const {result} =  renderHook (()=>useCounter(100));
        const {decrementar, reset} = result.current;
        act(()=>{
            decrementar();
            reset();
        });
        expect(result.current.contador).toBe(100);
    });
});