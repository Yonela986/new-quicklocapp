<template>
  <div id="app">
    <div>
    <img alt="Vue logo" src="./assets/Quicloc8-logo.png">
        <loading-screen v-if="isLoading"></loading-screen>
            <SplashScreen msg="Welcome to Your Vue.js App"/>

    </div>
  <div>
    <GoogleMap />
  </div>
  </div>
  

</template>


<script>
import SplashScreen from './components/SplashScreen.vue'
import GoogleMap from './components/GoogleMap.vue';

export default {
  name: 'App',
  components: [{
    // eslint-disable-next-line vue/no-unused-components
    SplashScreen,

  },
  {
    GoogleMap
  }
  ]
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  margin-top: 60px;
}
</style>

