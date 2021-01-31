<template>
  <div class="home">
    <v-container class="mt-4">
      <v-container class="d-flex justify-space-between mt-4">
        <H5Title title="Bienvenido a la Poke App."></H5Title>
        <v-btn class="mx-2" fab dark color="secondary" @click="listPokemon">
          <v-icon>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script>
// import Main from "@/components/Main.vue";

export default {
  name: "Home",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    listPokemon() {
      this.$router.push("about");
    }
  }
  // components: {
  //   Main
  // }
};
</script>

<style scoped></style>
