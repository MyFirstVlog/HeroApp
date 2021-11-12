import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Navigate,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { DCScreen } from '../components/dc/DCScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import {NavBar} from '../components/ui/NavBar'
export const DashBoardRoutes = () => {
    return (
        <>
            <NavBar/>
                <Routes>
                    <Route path='/marvel' element={<MarvelScreen/>} />
                    <Route path='/marvel/:heroeID' element={<HeroesScreen/>} />
                    <Route path='/dc' element={<DCScreen/>} />
                    <Route path='*' element={<MarvelScreen/>}/>
                </Routes>
        </>
    )
}
