import { mount } from "enzyme"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { LoginScreen } from "../../components/login/LoginScreen"
import { Types } from "../../types/Types"

const mockNavigate = jest.fn();

jest.mock('react-router-dom',()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))



describe('testing <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']} >
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should do dispatch action and navigation to default marvel private route', () => {
        
        wrapper.find('button').prop('onClick')();
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: Types.login,
        payload:{
            name: 'Alejandro'
        }});
        expect(mockNavigate).toHaveBeenCalledWith("/marvel", {"replace": true})
    });

    test('should do dispatch action and navigation to dc private route', () => {
        
        localStorage.setItem('lastPath', '/dc')

        wrapper.find('button').prop('onClick')();
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: Types.login,
        payload:{
            name: 'Alejandro'
        }});
        expect(mockNavigate).toHaveBeenCalledWith("/dc", {"replace": true})
    })
    
    
})
