import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DCScreen = () => {
    return (
        <div className='container mt-2'>
            <h1>DC Heroes</h1>
            <hr/>
            <HeroesList publisher={'DC Comics'}/>
        </div>
    )
}
