<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <div class="nav-header-text">Room Type CRUD</div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
      <v-snackbar v-model="localSnackbarState" multi-line light :timeout="snackbarTime" text :color="snackbarColor" top>
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click.stop="closeSnackbar" icon>
            <v-icon color="#091E42">mdi-close</v-icon>
          </v-btn>
        </template>

      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "App",

  data: () => ({
    localSnackbarState: false,
  }),
  methods: {
    ...mapMutations(["openSnackbar", "closeSnackbar"]),
  },
  computed: {
    ...mapGetters(["snackbarState", "snackbarText", "snackbarTime", "snackbarColor"]),
  },
  watch: {
    snackbarState(nv) {
      this.localSnackbarState = nv;
    },
    localSnackbarState(nv) {
      if (!nv) {
        this.closeSnackbar();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-header-text {
  color: $white;
  font-weight: 600;
  font-size: 1.7rem;
}
</style>
