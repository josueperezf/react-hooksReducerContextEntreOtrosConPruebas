import { mount } from "enzyme";
import { LoginScreen } from "../../../componentes/09-useContext/LoginScreen";
import { UserContext } from "../../../componentes/09-useContext/UserContext";

describe('Pruebas en <LoginScreen/>', ()=>{
    
    const setUser = jest.fn();
    // el componente LoginScreen usa el archivo o componente, UserContext del cual extrae a la variable setUser, 
    // para hacer las pruebas debemos enviarle ese mismo contenido, como las pruebas es solo saber si llamo a esa funcion setUser
    // entonces se usa el setUser con jest.fn() que  nos informa si esa funcion fue llamada, cuantas veces y demas

    // debe usarse el mount y no el shallow, ya que este no renderiza todo el html de los subcomponentes
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name:'Josue Perez'
        });
    });
    
    
});