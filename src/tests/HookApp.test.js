import { shallow } from "enzyme";
import HookApp from '../HookApp.js';

describe('Pruebas en <HookApp/>', ()=>{

    test('Debe mostrarse correctamente', () => {
        let wrapper   = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});