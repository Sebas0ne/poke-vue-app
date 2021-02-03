<template>
  <div class="home">
    <v-container class="mt-4">
      <v-container class="d-flex justify-space-between mt-4">
        <H5Title title="Bienvenido a la Poke App."></H5Title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              color="secondary"
              @click="listPokemon"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Click para ingresar a la app.</span>
        </v-tooltip>
      </v-container>
    </v-container>
    <div class="img_poke_landing"></div>
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

<style scoped>
.img_poke_landing {
  position: absolute;
  background-image: url("https://steemitimages.com/p/JvFFVmatwWHRfvmtd53nmEJ94xpKydwmbSC5H5svBACH7y78ZHMRmMqDV2AcjNkGNwnpYBAdgqF94io27tUAtTtKjEpW23k45dBCCahQG1kmHDNLZ9aaoiKAV7hgw4wpm8dbgvKQ1k?format=match&mode=fit&width=640");
  background-repeat: repeat-x;
  bottom: 60px;
  height: 150px;
  width: 100%;
}
</style>
