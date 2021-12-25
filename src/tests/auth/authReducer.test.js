

import { authReduer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Pruebas en auth reducer', () => {
    const objectPruebaAuth = {
        name : 'Alejandro',
        logged : true
    }
    const actionDefecto = {
        type : 'La vita est bella',
    }
    const actionAuth = {
        type : types.login,
        payload : {
            name : 'Alejandro',
            logged : true 
            }
    }
    const actionDeAuth = {
        type : types.logout
    }
    test('debe de retornar el estado por defecto ', () => {
        const state = authReduer(objectPruebaAuth, actionDefecto)
        expect(state).toEqual(objectPruebaAuth)
    })

    test('debe de autenticar y colocar el name del usuario ', () => {
        
        const state = authReduer(objectPruebaAuth, actionAuth)
        
        const {logged, name} = state

        expect(name).toBe(actionAuth.payload.name)
        expect(logged).toBe(actionAuth.payload.logged)
        
    })
    
    test('debe de borrar el name de usuario y logged en false ', () => {
        const state = authReduer(objectPruebaAuth, actionDeAuth)
        const {name, logged} = state
        expect(name).toBeUndefined()
        expect(logged).toBe(false)
    })
    
})
