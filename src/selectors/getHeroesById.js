import { LIST_OF_HEROES } from "../data/heroes"


export const getHeroById = (id = '') => {
    console.log('getherobyidcalled');
    return LIST_OF_HEROES.find(hero => hero.id ===id)
}