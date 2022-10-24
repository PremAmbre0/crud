module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/main.scss";
      `
      },
    },
  },

  transpileDependencies: ["vuetify"],
  publicPath: ""
};
