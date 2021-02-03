<template>
  <v-footer dark padless fixed>
    <v-card class="flex" flat tile>
      <v-card-title class="secondary">
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          target="_blank"
          :href="icon.url"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Poke app</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-github", url: "https://github.com/Sebas0ne" },
      {
        icon: "mdi-twitter",
        url: "https://twitter.com/SEBAS0NE"
      },
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/josue-sebastian-alb%C3%A1n-maza-jsbm/"
      },
      {
        icon: "mdi-instagram",
        url: "https://www.instagram.com/sebas0ne/"
      }
    ]
  })
};
</script>
