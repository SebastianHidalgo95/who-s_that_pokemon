<template>
    <h1 v-if="!pokemon"> Espere par favar...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>

        <div>
            
        </div>
        <h2>{{ msg }}</h2>
        <div class="button-container">
            <button> 
                Nuevo Juego
            </button>
        </div>
        
    </div>

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
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer : false,
            msg: ''
        }
    },

    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonsOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer(pokemonId){
            this.showPokemon = true
            this.showAnswer = true
            if ( pokemonId === this.pokemon.id ){
                this.msg =`Correcto, ${ this.pokemon.name }`
            } else {
                this.msg =`Upsss, era ${ this.pokemon.name }`
            }
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
    
}
</script>
<style scoped>
    .button-container {
        display: flex;
        justify-content: center;
        align: center;
    }
</style>