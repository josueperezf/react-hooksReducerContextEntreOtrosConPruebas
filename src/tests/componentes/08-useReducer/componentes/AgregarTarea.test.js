import { shallow } from "enzyme";
import { AgregarTarea } from "../../../../componentes/08-useReducer/componentes/AgregarTarea";

describe('Pruebas en <AgregarTarea/>',()=>{

    const handleAgregarTarea = jest.fn();
    const wrapper = shallow(<AgregarTarea handleAgregarTarea={handleAgregarTarea} />);
    // expect.any es para decir q no me importa el valor solo el tipo de dato que retornara

    test('Debe Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar AgregarTarea cuando no hay value en el form', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // console.log(formSubmit);
        formSubmit({
            preventDefault:()=>{}
        });
        // verifico que haya sido llamado cero veces, hay otra forma de hacer lo mismo pero el quiso variar
        expect(handleAgregarTarea).toHaveBeenCalledTimes(0)
    });

    test('debe de llamar la funcion handleAgregarTarea', () => {
        // con argumento
        const value = 'Aprender Python';
        wrapper.find('input').simulate('change',{
            target:{
                value,
                name:'descripcion'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault:()=>{}
        });

        expect(handleAgregarTarea).toHaveBeenCalledTimes(1);
        expect(handleAgregarTarea).toHaveBeenCalledWith( expect.any(Object));
        // id: expect.any(Number), digo que el id no me importa su valor con tal y sea un numero
        expect(handleAgregarTarea).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc:   value,
            done:   false
        });
    })
    
    
    
});