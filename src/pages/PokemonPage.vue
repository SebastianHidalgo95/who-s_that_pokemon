<template>
    <h1 v-if="!pokemon"> Espere par favar...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions 
            :pokemons="pokemonArr" 
            :selected-option="selectedOption"
            @selection="checkAnswer" />

        <template v-if="showAnswer">
          <h2 class="fade-in">{{ msg }}</h2>
            <div class="button-container">
                <button @click="newGame"> 
                    Nuevo Juego
                </button>
            </div>  
        </template>
        
        
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
            selectedOption: false,
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
            this.selectedOption = true
            this.showPokemon = true
            this.showAnswer = true
            if ( pokemonId === this.pokemon.id ){
                this.msg =`Correcto, ${ this.pokemon.name }`
            } else {
                this.msg =`Upsss, era ${ this.pokemon.name }`
            }
        },
        newGame(){
            this.selectedOption = false
            this.showAnswer = false
            this.showPokemon = false
            this.pokemon = null
            this.pokemonArr = []
            this.mixPokemonArray()
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