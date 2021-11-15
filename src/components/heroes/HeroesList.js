import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // se vuelva ejecuatar esto si el publisher cambia
    // const heroes = getHeroesByPublisher(publisher)

    // Uso esta opcion  para que solo se renderiza cuando solamente el publisher cualqueir otro cambio deberia evitar renderizarse

    return (
        <div className='card-columns animate__animated animate__pulse'>
            {
                heroes.map(heroe => (
                    <HeroeCard 
                        key={heroe.id}
                        {...heroe}
                    />

                ))
            }
        </div>
    )
}
