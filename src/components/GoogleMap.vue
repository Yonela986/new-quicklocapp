<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
       <GmapAutocomplete
        @place_changed='setPlace'
      />
    </div>
    <br>
     <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    />
    <button
        @click='addMarker'
      >
        Add
      </button>
       <gmap-map
        :center="center"
        :zoom="17"
        style="width:100%;  height: 350px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :icon="{url:require('/home/yonela/New-Projects/new-quicklocapp/src/components/GoogleMap.vue')}"
          @click="center=m.position"></gmap-marker>
      </gmap-map>
     
  </div>
</template>

<script>

import { maplocation } from '../assets/messages.json';
export default {
  name: 'GoogleMap',
  data() {
    return {
        center:{Lat:51.508742,lng:-0.120850},
                infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
          pixelOffset: {
          width: 0,
          height: -35
          }
        },
    };
  },
  computed:{
      markers(){
          return maplocation.map(({location: { lat, lng}, heading }) => ({
              position: {
                  lat,
                  lng
              },
              heading
          }));
      }
  },
  methods: {
      getPosition : function(marker){
          return {
              lat: parseFloat(marker.position.lat),
              lng: parseFloat(marker.position.lng)
          }
      },
        toggleInfoWindow: function(marker, index) {
      this.infoWindowPos = this.getPosition(marker);
      this.infoContent = marker.text;

      if (this.currentMidx == index) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else{
        this.infoWinOpen = true;
        this.currentMidx = index;
      }
    }
  }
};
  

//   computed: {
//     google: gmapApi,
//     mapData() {
//       return JSON.parse(data);
//     },
//    mounted() {
//     this.geolocate();
//   },
//   methods: {
//     setPlace(place) {
//       this.currentPlace = place;
//     },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng(),
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
//   methods: {
//     geolocate: function() {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.center = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };
//       });
//     },
//   },
 
</script>

