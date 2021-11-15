import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Redirect,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import {LoginScreen} from '../components/login/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
                {/* in react-router-dom 6 Switch does not work replace with Routes */}
                <Routes>
                    <Route exact path='/login' element={<PublicRoutes isAtuhenticated={user.logged} element={<LoginScreen />} />} />
                     {/* the * indicates nested routes in DashboardRoutes comp */}
                    <Route path='/*' element={<PrivateRoutes isAtuhenticated={user.logged} element={<DashBoardRoutes />} />} />
                </Routes>
        </Router>
    )
}
