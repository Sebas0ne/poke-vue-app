<template>
  <v-container>
    <v-container class="mt-4">
      <H5Title title="Pagina no encontrada!"></H5Title>
      <InnerLine />
    </v-container>
    <div>
      <v-img height="300" src="@/assets/not_found.gif"></v-img>
    </div>
    <v-container class="button_not_found mt-4">
      <v-btn class="pokeTheme" fab dark @click="homeBack">
        <v-icon color="pokeThemeSecondary">
          mdi-refresh
        </v-icon>
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound",
  methods: {
    homeBack() {
      this.$router.push({ name: "about" });
    }
  }
};
</script>

<style scoped>
.button_not_found {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
