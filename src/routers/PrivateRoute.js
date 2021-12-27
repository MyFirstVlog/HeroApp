import { Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({children}) => {
    //? El chidren es el componente dashboardroutes que tiene anidado


    const {user} = useContext(AuthContext);

    return user.logged ? children : <Navigate to="/login" />

   
}
