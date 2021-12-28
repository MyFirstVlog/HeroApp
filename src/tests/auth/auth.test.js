import { authReducer } from "../../auth/authReducer";
import { Types } from "../../types/Types";


describe('Testing auth reducer', () => {
    test('should return default state ', () => {
        
        const state = authReducer({logged: false}, {}); //initializin auth reducer
        expect(state).toEqual({logged:false})
    });

    test('should authenticate and set user name', () => {
        const action = {
            type: Types.login,
            payload: {
                name: 'Alejandro' 
            }
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            name:'Alejandro',
            logged: true
        })
    });

    test('should return logged in false and delete user name ', () => {
        const action = {
            type: Types.logout,
        }

        const state = authReducer({name:'Alejandro', logged:true}, action);

        expect(state).toEqual({logged: false});
    });

})
