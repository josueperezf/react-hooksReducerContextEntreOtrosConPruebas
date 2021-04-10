//import { mount, shallow } from "enzyme";
import { mount } from "enzyme";
import { HomeScreen } from "../../../componentes/09-useContext/HomeScreen";
import { UserContext } from "../../../componentes/09-useContext/UserContext";

describe('Pruebas en <HomeScreen/>',()=>{
    const usuario = {
        name:'Josue',
        email:'josueperezf'
    };
    // como el homeScreen usa un useContext entonces debemos de colocarlo aqui tambien
    // en la siguiente linea se debe renderizar con mount y no con shallow ya que este solo renderiza pocos hijos de la etiqueta
    const wrapper = mount(
                        <UserContext.Provider value={usuario}>
                            <HomeScreen />
                        </UserContext.Provider>
                    );

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    })
    test('should', () => {
        
    })
    
    
});