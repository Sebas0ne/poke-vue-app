<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/poke_logo.png"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn target="_blank" text>
      <span class="mr-2"></span>
      <v-icon>mdi-checkbox-marked-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style></style>
