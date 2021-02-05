<template>
  <div class="about">
    <v-container class="d-flex justify-space-between mt-4">
      <v-container class="mt-4">
        <H5Title title="LIST OF POKEMONS"></H5Title>
        <InnerLine />
      </v-container>
    </v-container>
    <v-container>
      <v-row>
        <v-col md="3" v-for="(pokemon, index) in pokemones" :key="index">
          <card-pokemon-unit :item="pokemon" />
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-pagination
        color="secondary"
        v-model="pagination.page"
        :length="pagination.pages"
        :total-visible="7"
        @input="fetchData"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardPokemonUnit from "../components/partials/about/CardPokemonUnit.vue";

export default {
  components: { CardPokemonUnit },
  name: "About",
  layout: "burguer-content",
  data() {
    return {
      pokemones: [],
      pagination: {
        page: 1,
        offset: 1,
        limit: 12,
        totalItems: 0,
        pages: 1
      }
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      this.pagination.offset += 12;
      const pokemones = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
        params: this.pagination
      });
      this.pokemones = pokemones.data.results;
      const items = pokemones.data.count;
      const pages = Math.ceil(items / this.pagination.limit);
      this.pagination.pages = pages;
      this.pagination.totalItems = pokemones.data.count;
    }
  }
};
</script>
