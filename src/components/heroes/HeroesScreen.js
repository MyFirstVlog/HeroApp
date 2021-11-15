import React, { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link, Navigate } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroById'

export const HeroesScreen = () => {
    const {heroeID} =useParams()
    let history = useNavigate() 

    console.log({history})

    const heroe = useMemo(() => getHeroesById(heroeID), [heroeID]) //optimiazcion del codigo, memorizar resultad si las dependencias se mantienen igual

    if(!heroe){
        return <Navigate to='/'/>
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe
    
    const handleReturn = () => {

        switch (publisher) {
            case 'DC Comics':
                history('/dc');
                break;
            case 'Marvel Comics':
                history('/marvel');
                break;
     
            default:
                history('/',{replace:true})
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`/assets/heroes/${heroeID}.jpg`}          
                      alt={heroeID}
                      className='img-thumbnail animate__animated animate__fadeInLeft'          
                />
            </div>

            <div className='col -8 animate__animated animate__fadeInDown'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b> {alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b> {publisher}</li>
                    <li className='list-group-item'><b>First Appeareance: </b> {first_appearance}</li>
                </ul>
                <h5 className='ml-2'>Characters</h5>
                <p className='ml-2'>{characters}</p>

                <button 
                    className='btn btn-outline-primary ml-2'
                    onClick = {handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
