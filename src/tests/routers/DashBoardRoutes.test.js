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
    test('should show correctly marvel view', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
        expect(wrapper.find('.text-info').text().trim()).toBe('Alejandro');
    });

    test('should show correctly dc view', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Dc Screen');
        expect(wrapper.find('.text-info').text().trim()).toBe('Alejandro');
    });
    
});
