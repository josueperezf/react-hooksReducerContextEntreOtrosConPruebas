
// import { renderHook, act } from '@testing-library/react-hooks';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../componentes/03-ejemplos/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

// no me importa la implementacin de useFetch, solo los resultados, es para emular que ya hizo la llamada http
// con la siguiente llamada evita la llamada del hook usefech
jest.mock('../../../hooks/useFetch');

// la siguiente es para emular tambien la llamada del hook que me sirve de contador
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', ()=>{

    beforeEach( () => {
        useCounter.mockReturnValue({
            contador:10,
            incrementar:()=>{},
            decrementar:()=>{},
            reset:()=>{},
        });
    });


    test('debe mostrarse correctamente <MultipleCustomHooks/>', () => {
        // suponemos que usefech hizo la llamada al servidor y lo siguiente fue la respuesta
        useFetch.mockReturnValue({
            data:   null,
            loading:true,
            error:  null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data:   [{
                author:'Josue',
                quote:'Hola Mundo'
            }],
            loading:false,
            error:  null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        // console.log(wrapper.html());
        // es para verificar si el alert que se pone cuando la data esta cargando, realmente desaparecio
        expect(wrapper.find('.alert').exists()).toBe(false );
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Josue');
    });
    
    
});