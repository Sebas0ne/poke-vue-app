<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Logo de Pokemon"
        class="shrink mr-2"
        contain
        src="@/assets/poke_logo.png"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn target="_blank" text v-bind="attrs" v-on="on">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="secondary" dark>
              Sebastián Albán.
            </v-toolbar>
            <v-card-text>
              <div class="text-h4 pa-10">Bienvenido a la Poke App!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
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
