<template>
  <div class='container-fluid' id='app'>
    <USGSHeader :width='width'></USGSHeader>
    <nuxt/>
    <USGSFooter :width='width'></USGSFooter>
  </div>
</template>

<script>
import USGSHeader from '~/components/Header.vue'
import Jumbo from '~/components/Jumbo.vue'
import USGSFooter from '~/components/Footer.vue'
//import '@nuxtjs/font-awesome'

export default{
  data(){
    return {
      width: ''
    }
  },
  components: {
    USGSHeader, Jumbo, USGSFooter
  },

  mounted(){
    this.width = window.innerWidth;
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
/* styling across all content pages */

@media (max-width: 500px){
  section.container{
    width: 100%;
  }
  .sidebar{
    width: 100%;
  }
}

.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
button{
  border:1px solid #2e6da4;
  color: #fff;
  line-height: 1.42;
  border-radius: 4px;
  background-color: #337ab7;
  font-size: 14px;
  padding: 6px 12px;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

html
{
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: all .4s ease-out
}
.page-enter, .page-leave-to {
  opacity: 0;
}
body{
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.428;
  background: #fff;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1280px;
  overflow: auto;
}


h1, h2, h3, h4, h5, h6{
  color: #003366;
  font-weight: 700;
  line-height: 1.1;
  margin-top: 20px;
  margin-bottom: 10px;
}
dt{
  color: #003366;
  font-weight: 700;
  margin-top: 0.75em;
}
dd, dt{
  line-height: 1.428;
}
h1{
  font-size: 36px;
}
h2{
  font-size: 30px;
}
h3{
  font-size: 24px;
}
h4{
  font-size: 1.2rem;
}
a{
  text-decoration: none;
  color: rgb(51, 122, 183);
  cursor: pointer;
}
a:hover{
  text-decoration: underline;
  color: #286498;
}
button{
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}



/* correct for different versions of bootstrap.css */
.caption{
  padding: 0.5em;
  background-color: black;
  color: #fff;
  width: 100%;
}
.img-responsive{
  display: block;
  max-width: 100%;
  height: auto;
}
.img-thumbnail{
  display: inline-block;
  margin: 0 15px 0 0;
}

ol.breadcrumb{
  background-color: #F9F9F7;
  padding: 8px 15px;
  list-style: none;
}
.breadcrumb>li{
  display: inline;
}
.breadcrumb>.active{
  color: #333;
}

/* from gama.css */
html, body {
  max-width: 1440 px;
  margin: 0 auto;
}


#bear, #antelope, #klamath, #cascade, #eastside, #centralla, #borrego, #coachella, #colorado, #hardrock, #kern, #sesj, #madera, #mojave, #monterey, #sacvly, #ncoast, #nsj, #nsfb, #owens, #nsac, #diego, #barbara, #scrcoast, #scrint, #sanfran, #sosac, #gabriel, #ana, #clara, #wsjv, #sierrareg, #ssierra, #tahoe, #csierras {
  display: none;
}

#deepmap {
  margin: 0;
  padding: 0;
}


.info, .info-control {
  /* width: 60%; */
  float: right;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 1em;
  padding: 1em;
}

#content {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 800px;
  width: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 1em;
  padding: 1em;
}

#usgsbanner {
  background: none;
}

.legend {
  bottom: 30px;
  width: 200px;
  padding: 0 1em;
  border-radius: 10px;
}

.legend h3 {
  margin-top: 0;
}

#map_panel .panel-body, #map_toggle .panel-group .panel, #map_toggle .panel-heading {
  border: none;
}

#map_toggle .panel-default > #map_toggle .panel-heading {
  background-color: #fff;
  border: none;
}
#map_panel .panel-body, #map_toggle .panel, #map_toggle .panel-group, #map_toggle .panel-heading {
  box-shadow: none;
  border: none;
  background-color: #fff;
}

#map_toggle .panel-title {
  /* float: right; */
  color: #003366;
  font-weight: 500;
  font-size: .75em;
  margin-bottom: .5em
}


a.accordion-toggle {
  margin-bottom: 1em;
  
}

#shallowmap .leaflet-label {
  width: 25px;
  font-size:.95em;
  background: none; 
  border: none;
  margin: 0;
  padding: 0;
  color: #000000;
  font-weight: 600;
  text-transform: uppercase;
    text-align: center;
}

#shallowmap .leaflet-label:before,#shallowmap .leaflet-label:after {border: none;}

#information {
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 97%;
  padding: 1em;
  margin: 1.5em auto;
  background-color: #f5f5f5;
}

#information h3, #information h4, #information h5 {
  font-weight: 700;
}

.info-well {
  background-color: #fff;
  padding: 1em;
}

.labeltest {
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-top: -1em;
  }

  .labeltest div {
    position: relative;
    left: -50%;
    text-shadow: 0px 2px 1px rgba(255,255,255,0.85);
  }

.leaflet-bar a {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    /* border-bottom-color: rgb(204, 204, 204); */
    color: #444;
    display: block;
    height: 26px;
    width: 26px;
    line-height: 1.45 !important;
    text-align: center;
    text-decoration: none;
    font: bold 18px'Lucida Console', Monaco, monospace;
}
</style>
