<template>
  <div class="about">
    <v-container class="mt-4">
      <v-container class="mt-4">
        <H5Title title="Lista de pokemones."></H5Title>
      </v-container>
      <div v-for="pokemones in poke" class="pokemones" v-bind:key="pokemones">
        <v-card class="mx-auto" max-width="400" tile>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ pokemones.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      poke: null
    };
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => (this.poke = response.data.results));
  }
};
</script>
