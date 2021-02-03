<template>
  <ul class="pokemon-stats">
    <Stat
      v-bind:item="item"
      v-for="item in pokemon.stats"
      v-bind:key="item.stat.name"
    />
  </ul>
</template>

<script>
import Stat from "@/components/pokedex/Stat.vue";

export default {
  name: "PokedexScreen",
  components: {
    Stat
  }
};
</script>
