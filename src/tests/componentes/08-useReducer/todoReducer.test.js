import { todoReducer } from "../../../componentes/08-useReducer/todoReducer";
import { listadoTareasDePrueba } from "../../fixtures/listadoTareasDePrueba";

describe('Pruebas en todoReducer', ()=>{

    test('debe retornar mi estado por default', () => {
        const state = todoReducer(listadoTareasDePrueba,{});
        expect(state).toEqual(listadoTareasDePrueba);
    });
    
    test('debe de agregar una tarea nueva', () => {
        const nuevaTarea = {
            id:     3,
            desc:   'Aprender Python',
            done:   false
        };
        const state = todoReducer(listadoTareasDePrueba,{ type:'add', payload:nuevaTarea});
        expect(state.length).toBe(3);
        expect(state).toEqual([...listadoTareasDePrueba, nuevaTarea] );
    });

    test('debe de borrar una tarea', () => {
        // como en nuestro array de listadoTareasDePrueba hay 2 elementos, si eliminamos uno quedara 1,
        // para eliminar, en el pyload debo pasarle el id del elemento a eliminar
        const id = 1;
        const state = todoReducer(listadoTareasDePrueba,{type:'delete', payload:id });
        expect(state.length).toBe(1);
        expect(state).toEqual(listadoTareasDePrueba.filter(tarea=> tarea.id !== id) );
    });

    test('Debe de hacer el TOGGLE en la tarea, si el campo done esta en true lo pasa a falso o viceversa', () => {
        // inicialmente el campo done esta en false, si si pasa la prueba debe retornar un true
        const id = 1;
        const state = todoReducer(listadoTareasDePrueba,{type:'toggle', payload:id });
        expect(state[0].done).toBe(true);
    })
    
});

