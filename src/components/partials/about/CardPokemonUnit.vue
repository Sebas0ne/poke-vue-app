<template>
  <div>
    <v-sheet class="pa-5" v-if="loading === true">
      <v-skeleton-loader
        class="mx-auto"
        max-width="600"
        type="card"
      ></v-skeleton-loader>
    </v-sheet>
    <v-card v-else class="mx-auto my-12" max-width="374" id="card_pokemon">
      <v-img
        height="250"
        :src="poke.data.sprites.other.dream_world.front_default"
      ></v-img>

      <v-card-title class="d-flex justify-space-between mt-4">
        {{ poke.data.name.toUpperCase() }}
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="pokeTheme mx-2"
              fab
              dark
              small
              color="secondary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="pokeThemeSecondary">
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Más información</span>
        </v-tooltip>
      </v-card-title>

      <v-card-text>
        <div class="grey--text ml-1">
          <ul>
            <li>Altura: {{ poke.data.height }}</li>
          </ul>
          <ul>
            <li>Peso: {{ poke.data.weight }}</li>
          </ul>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title
        >Estadisticas | EXP ( {{ poke.data.base_experience }} )</v-card-title
      >
      <v-card-text>
        <v-chip-group column active-class="secondary accent-4 white--text">
          <v-chip
            v-for="(pokemones, index) in poke.data.stats"
            class="pokemones"
            :key="index"
            >{{ pokemones.stat.name.toUpperCase() }} :
            {{ pokemones.base_stat }}</v-chip
          >
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardPokemonUnit",
  props: {
    item: {
      type: Object,
      default() {
        return {
          name: "",
          url: ""
        };
      }
    }
  },
  watch: {
    item() {
      this.fetchData();
      return true;
    }
  },
  data() {
    return {
      poke: {},
      loading: true
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const newPokemon = await axios.get(this.item.url);
      this.poke = newPokemon;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style>
#card_pokemon {
  box-shadow: 2px 2px 2px 2px #3f3f41;
}
</style>
