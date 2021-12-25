import React from 'react';
import { mount, shallow } from "enzyme"
import {MemoryRouter} from 'react-router-dom'
import { PrivateRoutes } from '../../routers/PrivateRoutes';

describe('Pruebas en <PrivateRoutes/>', () => {
    
    //para simular el set del localsorage

    // Storage.prototype.setItem = jest.fn()

    test('debe de mostrar el componente si esta autenticado y guardar localstorage ', () => {
        
        // const wrapper = mount(
        //     <MemoryRouter>
        //         <PrivateRoutes 
        //             isAtuhenticated={false}
        //             element = {()=> <span>Listo</span>}

        //         />
        //     </MemoryRouter>
        // )

        // console.log(wrapper.html())
        // expect(wrapper.find('span').exists()).toBe(true)
        // expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })

    // test('debe de bloquear el componene si no esta autenticado ', () => {
    //     const wrapper = mount(
    //         <MemoryRouter>
    //             <PrivateRoutes 
    //                 isAtuhenticated={false}
    //                 element = {()=> <span>Listo</span>}

    //             />
    //         </MemoryRouter>
    //     )
    //     // expect(wrapper.find('span').exists()).toBe(false)
    // })
    
    
})
