import { LIST_OF_HEROES } from "../data/heroes";


export const getHeroesByName = (name = '') => {
    if(name === ''){
        return []
    }
    name = name.toLowerCase();

    console.log('executed')

    return LIST_OF_HEROES.filter(hero => hero.superhero.toLowerCase().includes(name));
}