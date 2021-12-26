import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    const {heroeId} = useParams();
    
    const hero = useMemo(()=> getHeroById(heroeId), [heroeId]) //? [heroeID] dependencia
    //? Funcion se esta renderizando cada vez que me devuelvo '/', se usa useMemo, memorizo el valor,objetos o componentes solo si una dependencia cambia ejecuto la funcion

    const navigate = useNavigate();

    if(!hero){
        //* EN vez de utilizar el hook navigate
        return <Navigate to='/' />
    }

    const { 
        publisher,
        superhero,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/heroes/${heroeId}.jpg`;

    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <div className="row mt-5">
          <div className="col-4 animate__animated animate__backInLeft">
            <img 
                src={imagePath} 
                alt={superhero}
                className='img-thumbnail'
            />
          </div>
          <div className='col-8 animate__animated animate__backInDown'>
            <h3>{superhero}</h3>
            <ul
                className='list-group'
            >
                <li className='list-group-item'>
                    <b>Alter ego:</b> {alter_ego}
                </li>
                <li className='list-group-item'>
                    <b>Publisher:</b> {publisher}
                </li>
                <li className='list-group-item'>
                    <b>First Appereance:</b> {first_appearance}
                </li>
            </ul>

            <h5 className='mt-5' >Characters</h5>
            <p>{characters}</p>

            <button
                className='btn btn-outline-danger'
                onClick={handleReturn}
            >
                return
            </button>
          </div>
        </div>
    )
}
