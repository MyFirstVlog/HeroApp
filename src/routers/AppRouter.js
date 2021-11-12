import React from 'react'
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
import { NavBar } from '../components/ui/NavBar';
import {LoginScreen} from '../components/login/LoginScreen'
import {MarvelScreen} from '../components/marvel/MarvelScreen'
import { DashBoardRoutes } from './DashBoardRoutes';
export const AppRouter = () => {
    return (
        <Router>
                {/* in react-router-dom 6 Switch does not work replace with Routes */}
                <Routes>
                    <Route exact path='/login' element={<LoginScreen/>} />
                     {/* the * indicates nested routes in DashboardRoutes comp */}
                    <Route path='/*' element={<DashBoardRoutes/>} />
                </Routes>
        </Router>
    )
}
