<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <div class="nav-header-text">Room Type CRUD</div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.nav-header-text{
  color:$white;
  font-weight: 600;
  font-size: 1.7rem;
}

</style>
