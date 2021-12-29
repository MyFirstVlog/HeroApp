import { mount } from "enzyme"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { Navbar } from "../../components/ui/NavBar";
import { Types } from "../../types/Types";

const mockNavigate = jest.fn(); //Debe estar asi exactamente, si no, no sirve
jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

// const mockLocation = jest.fn();

// jest.mock('react', ()=> ({
//     ...jest.requireActual('react'),
//     useContext: () => mockLocation
// }))

describe('should test <Navbar />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:true,      
            name: 'Pedro'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']} >
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    test('should show correctly ', () => {
     
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
        
    })

    test('should call logout and call navigate and dipatch with elements', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({"type": Types.logout});
        expect(mockNavigate).toHaveBeenCalledWith("/login", {"replace": true})

    })
    
    
})
