import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoutes = ({
    isAtuhenticated,
    element : Element,
}) => {

    return (
        (!isAtuhenticated)
            ? (Element)
            : (<Navigate to='/' />)
    )

}

PublicRoutes.propTypes = {
    isAtuhenticated : PropTypes.bool.isRequired,
    Element : PropTypes.func.isRequired
}
