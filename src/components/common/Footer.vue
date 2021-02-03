<template>
  <v-footer dark padless fixed>
    <v-card class="flex" flat tile>
      <v-card-title class="secondary">
        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4"
          dark
          icon
          target="_blank"
          :href="icon.url"
        >
          <v-icon size="24px" color="pokeTheme">
            {{ icon.mdi }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pokeTheme py-2 white--text text-center">
        <strong>{{ new Date().getFullYear() }} — Poke app</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { mdi: "mdi-github", url: "https://github.com/Sebas0ne" },
      {
        mdi: "mdi-twitter",
        url: "https://twitter.com/SEBAS0NE"
      },
      {
        mdi: "mdi-linkedin",
        url: "https://www.linkedin.com/in/josue-sebastian-alb%C3%A1n-maza-jsbm/"
      },
      {
        mdi: "mdi-instagram",
        url: "https://www.instagram.com/sebas0ne/"
      }
    ]
  })
};
</script>

<style scoped>
strong {
  color: #000000;
}
</style>
