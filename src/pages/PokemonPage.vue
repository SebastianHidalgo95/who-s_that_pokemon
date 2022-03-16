<template>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="150" :showPokemon="false"/>
    <PokemonOptions :pokemons="pokemonArr"/>
</template>
<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonsOptions from '../helpers/getPokemonOptions.js'


export default {
    name: 'PokemonPage',
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: []
        }
    },

    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonsOptions()
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>
<style lang="">
    
</style>