import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'


export const PrivateRoutes = ({
    isAtuhenticated,
    element : Element,
}) => {
    
localStorage.setItem('lastPath', useLocation().pathname)

    return (
        (isAtuhenticated)
            ? (Element)
            : (<Navigate to='/login' />)
    )
}

PrivateRoutes.propTypes = {
    isAtuhenticated : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}
