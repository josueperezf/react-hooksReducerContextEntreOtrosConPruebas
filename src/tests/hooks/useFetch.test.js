import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch', ()=>{

    test('Debe de retornar la informacion por default', () => {
        const url = `https://www.breakingbadapi.com/api/quotes/1`;
        const {result} =  renderHook(()=>useFetch(url));
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('debe tener la info deseada', async () => {
        const url = `https://www.breakingbadapi.com/api/quotes/1`;
        // renderHook es una funcion propia de react, ella retorna el result.current y waitForNextUpdate entre otras propiedades, en el current esta la data que retorna mi hook personalizado
        const {result, waitForNextUpdate} =  renderHook(()=>useFetch(url));
        // waitForNextUpdate(100); es como para decir que ejecute el query y espere 100ms si en ese tiempo no hay nada, es por algun fallo
        await waitForNextUpdate({timeout:2000});
        const {data, loading, error} = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('Debe de manerjar el error', async () => {
        // una url mala
        const url = `https://reqres.in/apid/users?page=2`;
        // renderHook es una funcion propia de react, ella retorna el result.current y waitForNextUpdate entre otras propiedades, en el current esta la data que retorna mi hook personalizado
        const {result, waitForNextUpdate} =  renderHook(()=>useFetch(url));
        // waitForNextUpdate(100); es como para decir que ejecute el query y espere 100ms si en ese tiempo no hay nada, es por algun fallo
        try {
            await waitForNextUpdate({timeout:2000});
        } catch (e) {
            console.log(e);
        }
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    })
    
    
    
});