import { LIST_OF_HEROES } from "../data/heroes"


export const getHeroById = (id = '') => {
    return LIST_OF_HEROES.find(hero => hero.id ===id)
}