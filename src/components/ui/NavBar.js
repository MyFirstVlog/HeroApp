import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'



export const NavBar = () => {
    const {user:{name}, dispatch} = useContext(AuthContext)

    let history = useNavigate()

    const handleLogout = () => {

        dispatch({
            type:types.logout,
            payload: {
                logged : false
            }
        })

        history('/login',{replace:true})

        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DCs
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Searh Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span
                        className="nav-item nav-link text-info"
                    >
                        {name}
                    </span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button> 
                </ul>
            </div>
        </nav>
    )
}

 