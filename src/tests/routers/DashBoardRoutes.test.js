import React from 'react';
import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <DashBoardRoutes/>', () => {
    const contextValue = {
        dispatch : jest.fn(),
        user:{
            logged:true,
            name : 'Alejandro'
        }
    }

    //SE USA EL MEMORY ROUTER CUANDO, high order componenent hecho para hacer pruebas de router con ciertas rutas 
    //Uncaught [Error: useRoutes() may be used only in the context of a <Router> component.]
    test('debe de mostarse correctamente ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('span').text()).toBe(contextValue.user.name)
    })
    
})
