import { shallow } from "enzyme";
import { EjemploRealRef } from "../../../componentes/04-useRef/EjemploRealRef";

describe('Pruebas en  <EjemploRealRef/>',()=>{

    const wrapper = shallow(<EjemploRealRef/>);
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('debe de mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
    
});