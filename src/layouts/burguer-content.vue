<template>
  <div id="burguer-content">
    <Slide right>
      <a>
        <span @click="homeBack">Principal</span>
      </a>
      <a id="home">
        <span @click="goPokemon">Pokemones</span>
      </a>
      <a>
        <span @click="goGame">Juego</span>
      </a>
      <a>
        <span @click="goPokedex">Pokedex</span>
      </a>
    </Slide>
    <main class="pb-2" id="main-p">
      <transition name="page" mode="out-in">
        <router-view class="lg:pt-4" />
      </transition>
    </main>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
    Slide // Register your component
  },
  methods: {
    homeBack() {
      this.$router.push({ name: "home" });
    },
    goPokemon() {
      this.$router.push({ name: "about" });
    },
    goGame() {
      this.$router.push({ name: "game" });
    },
    goPokedex() {
      this.$router.push({ name: "pokedex" });
    }
  }
};
</script>

<style scoped>
#burguer-content {
  background-color: #0000;
}
</style>
