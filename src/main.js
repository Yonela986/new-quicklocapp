import Vue from 'vue'
import App from './App.vue'

// import VueSplash from 'vue-splash';

import * as VueGoogleMaps from 'vue2-google-maps'
import { SplashScreen } from '@capacitor/splash-screen';

//  import VueGoogleMaps from 'vue2-google-maps';



// Vue.use(VueSplash);

// Vue.config.productionTip = false

// Vue.filter('snippet', function(value) {
//   return value.slice(0,100);
// });

// Vue.component('loading-screen', {
// template: '<div id="loading">Loading...</div>'
// })

// new Vue({

// render: h => h(App),
// data: {
//   isLoading: true
// },
// mounted() {
//   setTimeout(this.closeHandler(), 3000)
// }
// }).$mount("#app");

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

SplashScreen();{
  const splash = new Vue({
  methods: {
    closeHandler() {
      return function() {
        splash.$destroy();
        splash.$el.remove();
      };
    }
  },
  render(h) {
    return h(SplashScreen, {
      mounted() {
        setTimeout(this.closeHandler(), 3000)
      }
    });
  }
}).$mount();
document.body.appendChild(splash.$el);
}
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAM15L8iPeUJAQ-ccZj6joQNIl4Xtxlej4',
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')