
<template>
  <vue-splash
    :show="true"
    :logo="logo"
    title="Quickloc"
    color="white"
    :size="300"
    :fixed="true"
  />
</template>

<script>
import YourLogo from "/home/yonela/quicklog-app/src/assets/Quicloc8-logo.png";
// import { SplashScreen } from '@capacitor/splash-screen';



export default {
  name: "SplashScreen",
  computed: {
    logo() {
      return YourLogo;
    }
  }
  
}
</script>