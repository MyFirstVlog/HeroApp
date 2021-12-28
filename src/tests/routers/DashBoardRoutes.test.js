import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";

describe('Testing DashBoardRoutes ', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Alejandro'
        }
    };
    test('should show correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Alejandro');
    })
    
});
