import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroeCard } from '../heroes/HeroeCard'
import { getHeroesByName } from '../selectors/getHeroesByName'

export const SearchScreen = () => {
    let history = useNavigate() 

    const {search} = useLocation()

    //const query = search.split('=')[1]

    const {q = ''} = queryString.parse(search)
    
    const [valueSearch,handleInputChange, reset] = useForm({
        value: '',
    })
    
    const {value} = valueSearch

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    

    const handleSearch = (e) => {
        e.preventDefault()
        history(`?q=${value}`)
        reset()
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find Your Hero'
                            className='form-control'
                            autoComplete='off'
                            name='value'
                            value={value}
                            onChange={handleInputChange}
                        />

                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>

                    {
                        (q === '') 
                            &&
                            <div className='alert alert-info'>
                                 Search a Hero
                            </div>

                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            &&
                            <div className='alert alert-danger'>
                                 There is no hero available with the name {q}
                            </div>

                    }

                    {
                        heroesFiltered.map(hero =>(
                            <HeroeCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
