import { mount } from "enzyme"
import { AuthContext } from "../../auth/authContext"
import { AppRouter } from "../../routers/AppRouter"


describe('Testing AppRouter', () => {
    test('should show login when user is not logged', () => {
        const contextUserValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextUserValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').html().includes('login')).toBe(true);
    });

    test('should show marvel component if user is logged', () => {
        const contextUserValue = {
            user: {
                logged: true,
                name: 'Alejo'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextUserValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });

    
    
    
})
