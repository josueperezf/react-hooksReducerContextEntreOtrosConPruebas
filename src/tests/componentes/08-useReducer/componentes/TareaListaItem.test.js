import { shallow } from "enzyme"
import { TareaListaItem } from "../../../../componentes/08-useReducer/componentes/TareaListaItem"
import { listadoTareasDePrueba } from "../../../fixtures/listadoTareasDePrueba";
describe('Pruebas en <TareaListaItem/>', ()=>{
    // recibe {tarea, i, handleDelete, handleToggle}
    // es para crear un funcion tipo ()=>{} con la diferencia que nos retorna infomacion, como por ejemplo:
    // si fue llama, cuantas veces lo hizo y demas
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const i = 0;
    const  wrapper = shallow(<TareaListaItem
                                tarea={listadoTareasDePrueba[0]}
                                i={i}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                            />)
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar a la funcion borrar handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(listadoTareasDePrueba[0].id);
    });

    test('debe de llamar a la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(listadoTareasDePrueba[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        const textoEsperado = `${listadoTareasDePrueba[0].id}. ${listadoTareasDePrueba[0].desc}`;
        // 2. Aprender React
        const parrafo = wrapper.find('p').text();
        expect(textoEsperado).toBe(parrafo);
    });


    test('debe tener la clase css complete, si eñl', () => {
        const tarea = listadoTareasDePrueba[0];
        tarea.done = true;
        const wrapper = shallow(<TareaListaItem tarea={ tarea }  />);
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
      
})