import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({children}) => {
    //? El chidren es el componente dashboardroutes que tiene anidado

    const {pathname, search} = useLocation();
    
    const {user} = useContext(AuthContext);
        //* el punto en el location se actuializa cuando las paginas cambian

    localStorage.setItem('lastPath', pathname + search)

    return user.logged ? children : <Navigate to="/login" />

   
}
