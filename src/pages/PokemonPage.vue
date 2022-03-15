<template>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemonId="150" :showPokemon="false"/>
    <PokemonOptions />
</template>
<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

export default {
    name: 'PokemonPage',
    components: { PokemonOptions, PokemonPicture }
}
</script>
<style lang="">
    
</style>