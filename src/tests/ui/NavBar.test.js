import { mount } from "enzyme"
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { NavBar } from "../../components/ui/NavBar";

const handleLogout = jest.fn()

const contextValue = {
    dispatch : jest.fn(),
    user:{
        logged:true,
        name : 'Alejandro'
    }

}
describe('Pruebas en <NavBar/>', () => {

    const historyMock = {}
    
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('span').text().trim()).toBe(contextValue.user.name)
    })

    test('debe de llamar el logout y el usar history ', () => {
        wrapper.find('button').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalledWith({payload:{
                                                                logged: false,
                                                            },
                                                            type: "[auth] logout",})
    })


    
    
})
