import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {
    //Crea un array de 650 posiciones con valor de 1 a 650
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map( ( _, index ) => index + 1 )
}

const getPokemonNames = async ( [a,b,c,d] = [] ) => {
    //Obtiene los nombres de los pokemons con un array de promises
    const arrPromises = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]
    const [ p1, p2, p3, p4] = await Promise.all( arrPromises ).then()
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]
}
const getPokemonsOptions = async () => {
    
    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
    return pokemons
}



export default getPokemonsOptions
