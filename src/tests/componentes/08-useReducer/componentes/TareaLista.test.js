import { shallow } from "enzyme";
import { TareaLista } from "../../../../componentes/08-useReducer/componentes/TareaLista";
import { listadoTareasDePrueba } from "../../../fixtures/listadoTareasDePrueba";


describe('Prueba del componente <TareaLista />', ()=>{
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TareaLista
                                tareas={listadoTareasDePrueba}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                            />);
    test('Debe Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe dibujar varios <TareaListaItem/> segun el length de arreglo enviado', () => {
        expect(wrapper.find('TareaListaItem').length).toBe(listadoTareasDePrueba.length);
        // verificamos si tiene las funciones, Function es para el tipo de dato
        expect(wrapper.find('TareaListaItem').at(0).prop('handleDelete')).toEqual(expect.any(Function) );
        expect(wrapper.find('TareaListaItem').at(0).prop('handleToggle')).toEqual(expect.any(Function) );
    })
    
    
});