<template>
  <!-- Executes the "fade" animation beforeUpdateRoute -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
  created() {
    // Changes the application title to Genius
    document.title = "Genius";
  },
};
</script>

<style>

    * {
        box-sizing: border-box;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #1C2B2D;
        width: 100%;
        height: 100%;
    }

    body, html {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition-duration: 0.6s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    @media only screen and (min-width: 800px){
        html, body, #app {
            min-height: 100%;
        }
    }

</style>
