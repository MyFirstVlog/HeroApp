import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    console.log('id', `./assets/heroes/${id}.jpg`)
    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                        <img 
                        src={`./assets/heroes/${id}.jpg`} 
                        className='card-img-top'
                        alt={superhero}
                        />
                </div>         
            </div>
        </div>
    )
}
