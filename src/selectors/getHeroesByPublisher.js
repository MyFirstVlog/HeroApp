import { LIST_OF_HEROES } from "../data/heroes"

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return LIST_OF_HEROES.filter((hero) => hero.publisher === publisher)
}