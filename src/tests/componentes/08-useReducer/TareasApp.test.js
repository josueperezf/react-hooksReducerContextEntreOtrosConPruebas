import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TareasApp } from "../../../componentes/08-useReducer/TareasApp";
import { listadoTareasDePrueba } from "../../fixtures/listadoTareasDePrueba";

describe('pruebas en <TareasApp/>',()=>{

    const wrapper = shallow(<TareasApp/>);
    // lo siguiente es para probar que realmente almacena en localstorage
    Storage.prototype.setItem = jest.fn(()=>{});

    test('Debe Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar una tarea', () => {
        // shall es generar para probar un componente
        // mount es para probar toda la aplicacion en contexto, digamos que es para probar los componentes principales
        // mount da mas informacion sobre componentes hijos
        const wrapper = mount(<TareasApp/>);
        // agregando (listadoTareasDePrueba[0]); digamos que ejecuto el resultado de una vez
        //  a = wrapper.find('AgregarTarea').prop('handleAgregarTarea');
        // a(listadoTareasDePrueba[0]);
        act(()=>{
            wrapper.find('AgregarTarea').prop('handleAgregarTarea')(listadoTareasDePrueba[0]);
            wrapper.find('AgregarTarea').prop('handleAgregarTarea')(listadoTareasDePrueba[1]);
        });
        // Todo App ({tareas.length}) 
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (2)`);
        // probando si almaceno en el localshorage dos veces
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    });

    test('Debe de eliminar una tarea', () => {
        // agregamos una tarea
        wrapper.find('AgregarTarea').prop('handleAgregarTarea')(listadoTareasDePrueba[0]);
        
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (1)`);
        // eliminamos una tarea, no podemos hacer esta prueba sin una tarea agregada, por ello se hace
        wrapper.find('TareaLista').prop('handleDelete')(listadoTareasDePrueba[0].id);
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (0)`);
    });
    
    
    
});