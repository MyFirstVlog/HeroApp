import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    console.log('renderizo')
    return (
        <div className='container mt-2'>
            <h1>Marvel Heroes</h1>
            <hr/>
            <HeroesList publisher={'Marvel Comics'}/>
        </div>
    )
}
