//? reducedr es una funcion

import { Types } from "../types/Types";

// const state = {
//     name: 'Alejandro',
//     logged: true
// }

/*
Asi luce laaccion que activara al reducer
const loginAction = {
    type: Types.login,
    payload: {
        name: 'Alejandro',
        email: 'alejoestradam@yahoo.com'
    }
}

*/
export const authReducer = (state = {}, action) => { //? Accion que modifica el state, fns puras que no tioenen que salirse de su funcion para cumplir el trabajo

    switch (action.type) {
        case Types.login:
            return{
                ...action.payload,
                logged: true
            }
        case Types.logout:
            return{
                logged: false
            }
            
        default:
            return state;
    }

}