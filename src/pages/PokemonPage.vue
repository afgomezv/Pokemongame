<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <!-- TODO: img -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <!-- TODO: Opciones -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
  </div>
  <template v-if="showAnswer">
    <h2 class="fade-in">{{ message }}</h2>
    <button @click="newGame">Nuevo Juego</button>
  </template>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

//console.log(getPokemonOptions());

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      //console.log(this.pokemonArr);
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectId) {
      this.showPokemon = true;
      this.showAnswer = true;
      //console.log("Pokemon Page Llamado", pokemonId);
      if (selectId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops era ${this.pokemon.name}`;
      }
    },
    newGame() {
      (this.showPokemon = false),
        (this.showAnswer = false),
        (this.pokemonArr = []),
        (this.pokemon = null);
      this.mixPokemonArray();
    },
  },

  mounted() {
    this.mixPokemonArray();
  },
};
</script>

