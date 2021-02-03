<template>
  <div>
    <Navbar />
    <main class="pb-2" id="main-p">
      <transition name="page" mode="out-in">
        <router-view class="lg:pt-4" />
      </transition>
    </main>
    <v-footer dark padless fixed>
      <v-card class="flex" flat tile>
        <v-card-title class="secondary">
          <strong class="subheading"
            >Puedes seguirme en mis redes sociales!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Poke app</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "default-content",
  data: () => ({
    icons: ["mdi-github", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
#main-p {
  margin-top: 60px;
}
</style>
