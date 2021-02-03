<template>
  <div class="home">
    <v-container class="mt-4">
      <v-container class="d-flex justify-space-between mt-4">
        <H5Title title="Bienvenido a la Poke App."></H5Title>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="pokeTheme mx-2"
              fab
              dark
              color="secondary"
              @click="listPokemon"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="pokeThemeSecondary">
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Click para ingresar a la app.</span>
        </v-tooltip>
      </v-container>
      <v-row>
        <v-img
          alt="Gif de la evolución de Sharizar"
          id="landing_sharizar"
          class="shrink mr-2"
          contain
          src="@/assets/sharizar.gif"
        />
      </v-row>
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
      dialog: false,
      alignments: ["start"]
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
@media screen and (min-width: 600px) {
  .img_poke_landing {
    position: absolute;
    background-image: url("https://steemitimages.com/p/JvFFVmatwWHRfvmtd53nmEJ94xpKydwmbSC5H5svBACH7y78ZHMRmMqDV2AcjNkGNwnpYBAdgqF94io27tUAtTtKjEpW23k45dBCCahQG1kmHDNLZ9aaoiKAV7hgw4wpm8dbgvKQ1k?format=match&mode=fit&width=640");
    background-repeat: repeat-x;
    bottom: 60px;
    height: 150px;
    width: 100%;
  }
  #landing_sharizar {
    width: 536px;
    height: 300;
  }
}

@media screen and (max-width: 900px) {
  .img_poke_landing {
    position: absolute;
    background-image: url("https://steemitimages.com/p/JvFFVmatwWHRfvmtd53nmEJ94xpKydwmbSC5H5svBACH7y78ZHMRmMqDV2AcjNkGNwnpYBAdgqF94io27tUAtTtKjEpW23k45dBCCahQG1kmHDNLZ9aaoiKAV7hgw4wpm8dbgvKQ1k?format=match&mode=fit&width=640");
    background-repeat: repeat-x;
    bottom: 60px;
    height: 150px;
    width: 100%;
  }
  #landing_sharizar {
    width: 526px;
    height: 280;
  }
}

@media screen and (max-width: 1024px) {
  .img_poke_landing {
    position: absolute;
    background-image: url("https://steemitimages.com/p/JvFFVmatwWHRfvmtd53nmEJ94xpKydwmbSC5H5svBACH7y78ZHMRmMqDV2AcjNkGNwnpYBAdgqF94io27tUAtTtKjEpW23k45dBCCahQG1kmHDNLZ9aaoiKAV7hgw4wpm8dbgvKQ1k?format=match&mode=fit&width=640");
    background-repeat: repeat-x;
    bottom: 60px;
    height: 150px;
    width: 100%;
  }
  #landing_sharizar {
    width: 526px;
    height: 250;
  }
}

@media screen and (max-width: 1380px) {
  .img_poke_landing {
    position: absolute;
    background-image: url("https://steemitimages.com/p/JvFFVmatwWHRfvmtd53nmEJ94xpKydwmbSC5H5svBACH7y78ZHMRmMqDV2AcjNkGNwnpYBAdgqF94io27tUAtTtKjEpW23k45dBCCahQG1kmHDNLZ9aaoiKAV7hgw4wpm8dbgvKQ1k?format=match&mode=fit&width=640");
    background-repeat: repeat-x;
    bottom: 60px;
    height: 150px;
    width: 100%;
  }
  #landing_sharizar {
    width: 526px;
    height: 280;
  }
}
</style>
