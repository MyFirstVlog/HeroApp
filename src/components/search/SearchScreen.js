import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log({searchText});
        navigate(`?q=${searchText}`)
    }
    return (
        <>
            <h1>Busqueda</h1>
            <hr />

            <div className='row'>                
                <div className='col-5'>                    
                    <h4>Custom Search</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name= 'searchText'
                            autoComplete='off'
                            value={searchText}                            
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1'
                        >
                            Buscar...
                        </button>
                    </form>                
                 </div>
                 <div className='col-7'>
                    <h4>Resultados</h4>

                    {
                        (q === '') ? <div className='alert alert-info'>
                            Buscar Un heroe
                        </div>
                        : (heroesFiltered.length === 0) && <div className='alert alert-danger'>No hay Resultados: {q}</div>
                    }

                    {
                       heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                        
                    }
                 </div>
           
           
           
           
           
           
            </div>
        </>
    )
}
