import { mount } from "enzyme";
import { AppRouter } from "../../../componentes/09-useContext/AppRouter";
import { UserContext } from "../../../componentes/09-useContext/UserContext";

describe('Pruebas en el <AppRouter/>', ()=>{

    const user = {
        id: 123,
        name:'Josue Perez'
    };
    const setUser = jest.fn();
    // nuestro componente AppRouter esta detro de otro component4e que le pasa parametro, por ello debemos hacer lo mismo en la prueba para emular y hacer bien las pruebas
    const wrapper = mount(
                        <UserContext.Provider value={{user, setUser}}>
                            <AppRouter/>
                        </UserContext.Provider>
                    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});