<template>
  <form class="pokemon-form" on:submit="{handleSubmit}">
    <input
      class="pokemon-input"
      type="text"
      name="pokemon"
      v-model="pokemonName"
      placeholder="Busca tu pokemon"
      autocomplete="off"
    />
    <input type="submit" class="pokemon-btn" value="" />
  </form>
</template>

<script>
export default {
  name: "PokedexForm",
  data() {
    return {
      pokemonName: ""
    };
  },
  methods: {
    search(e) {
      e.preventDefault();
      const pokemonName = this.pokemonName;
      const newPokemonId = window.isNaN(parseInt(pokemonName))
        ? pokemonName.toLowerCase()
        : pokemonName;
      this.$emit("submit", newPokemonId);
    },
    getPokemon() {
      //...
    },
    handleSubmit(pokemonId) {
      if (pokemonId !== "") {
        this.error = false;
        this.loading = true;
        this.pokemonId = pokemonId;
        this.getPokemon();
        return;
      }
      this.error = true;
    }
  }
};
</script>
