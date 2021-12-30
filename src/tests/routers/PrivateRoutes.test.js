import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { PrivateRoute } from "../routers/PrivateRoute";


//?Componente no es mas que una funcion que devuelve un jsx
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo de aqui</span>
}))

describe('Testing <PrivateRoutes />', () => {

    //? Proptotype of localStorage
    Storage.prototype.setItem = jest.fn();

    test('should show the component if is logged and save in local Storage', () => {
        const textValue = {
            user:{
                logged: true,
                name: 'Alejandro'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={textValue} >
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.text().trim()).toBe('Private Component');
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
    });

    test('should block and redirected to /login', () => {
        const textValue = {
            user:{
                logged: false,
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={textValue} >
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //* Mock de <Navigate arriba />

       expect(wrapper.text().trim()).toBe('Saliendo de aqui');
    })
    
    
})
