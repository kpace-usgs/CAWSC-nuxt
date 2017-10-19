<template>
  <header>
      <a id='skipLink' href='#mainMenu' class='sr-only'>Skip to Main Menu</a>
      <div class='row' id='firstBar' style='background: black'>
        <div id='usgsidentifier' class='col-xs-12 col-sm-3 col-md-2'>
          <a href='https://www2.usgs.gov' >
            <img src='../static/header-logo.jpg' alt='USGS - science for a changing world' title='U.S. Geological Survey Home Page' />
          </a>
        </div>
        <div id='usgscolorband' class='hidden-xs col-sm-7 col-md-8'>
        </div>
        <div id='usgsccsa' class='col-xs-12 col-sm-2 col-md-2'>
          <a href='https://www2.usgs.gov/'>USGS Home</a>
          <a href='https://www2.usgs.gov/ask/'>Contact USGS</a>
        </div>
      </div>

      <div class='row' >
        <div id='usgstitle' class='col-xs-12 col-lg-12'>
          <div class='title col-xs-12 col-lg-8'>
            <a href='/index.html' style="color: white;">California Water Science Center</a>
          </div>
          <div class='col-xs-12 col-lg-4'>
            <USASearch></USASearch>
          </div>
        </div>
      </div>


      <nav class='row'>
        <div class='navbar-header'>
          <p>CAWSC Menu</p>
          <button type='button' class='navbar-toggle ' role='tab' aria-expanded='false' v-on:click='showNavbar'>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <transition name='slide'>
          <div class='navbar-collapse' v-if='showNav' style='padding: 20px 15px;'>
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/highlights/">Highlights</a></li>
              <li class='active'><a href="/projects/" >Projects</a></li>
              <li><a href="/pubs/">Publications</a></li>
              <li><a href="/data/">Water Data</a></li>
              <li><a href="/sustainable-groundwater-management">SGMA</a></li>
              <li><a href="/data/drought">Drought</a></li>
              <li><a href="/flooding/">Floods</a></li>
              <li><a href="/land_subsidence/">Land Subsidence</a></li>
              <li><a href="/water_use/">Water Use</a></li>
              <li><a href="/partner_with.html">Cooperators</a></li>
            </ul>
          </div>
        </transition>
      </nav>

    </header>
</template>


<script>

import USASearch from './USASearch.vue'

export default {
  name: 'USGSHeader',
  data () {
    return {
        showNav: ''
    }
  },

  props: ['width'],

  watch: {
    width: function widthChanged() {
      this.checkWidth();
    }
  },

  components:{
    USASearch
  },
  mounted(){
    this.checkWidth()
  },
  methods: {
 
    checkWidth() {
      if(this.width < 768) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    },
    showNavbar() {
      if(this.showNav === false){
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    }
  }
}
</script>

<style>

nav{
  border-bottom: 1px solid white;
  background-color: #222;
  min-height: 50px;
}
/* nav header */
.navbar-header{
  display: none;
  padding: 5px;
  background-color: #222;
  height: 60px;
  color: #666;
  font-weight: bold;
}
.navbar-header>button{
  width: 40px;
  height: 40px;
  border-radius: 3px;
  color: #666;
  background-color: transparent;
  border: 1px solid #333;
  margin-left: auto;
}
.navbar-header>button>.fa-icon{
  color: #666;
  font-size: 20px;
}


/*nav list */
.navbar-collapse {
  font-weight: 700;
  line-height: 20px;
  color: #fff !important;
  width: auto;
}

.navbar-collapse ul{
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  list-style-type: none;
  font-size: 14px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.navbar-collapse li > a:focus,
.navbar-collapse li > a:hover {
  color: #e79951 !important;
  /*background-color: transparent;*/
}

nav .active > a,
nav .active > a:hover,
nav .active > a:focus {
  color: #e79951 !important;
  /*background-color: transparent;*/
}

nav a{
  text-decoration: none;
  color: white;
  padding: 15px;
}

#skipLink{
  position: absolute;
  left: -999em;
  width: 990em;
}
#skipLink:focus, #skipLink:active{
  left: 1em;
  z-index: 99;
  height: 20px;
  color: grey;
  width: 200px    ;
}

.slide-transition{
  transition: all 0.9s ease;
  height: auto;
}
.slide-enter-active{
  transition: all 0.9s ease;
}
.slide-enter{
  transition: all 0.9s ease;
  height: auto;
}

/* Small devices (tablets, 768px and up) */
@media only screen and (max-width:768px) { 
  .navbar-header{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  .hidden-xs{
    visibility: none;
    width: 0%;
  }

  .navbar-collapse ul{
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  } 

}
</style>


<style scoped>

#usgsccsa, #usgsidentifier {
  background-color: black;
  text-align: center;
  height: 80px;
  z-index: 99;
} 
#usgsidentifier{
  padding: 5px;
}
#usgsidentifier img{
  margin-left: 20px;
}
#usgsccsa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 7px 7px 7px;
  line-height: 20px;
}
#usgsccsa a{
  padding: 1px 0px;
}
#usgsccsa a:link, #usgsccsa a:visited { 
  font: bold 1em/1.3em Verdana, Arial, Helvetica, sans-serif; 
  color: #ffffff; 
  margin-left: 4px; 
  text-decoration: none; 
} 

#usgsccsa a:hover { 
  font: bold 1em/1.3em Verdana, Arial, Helvetica, sans-serif; 
  color: #ffffff; 
  margin-left: 4px; 
} 

#usgsccsa a:active { 
  font: bold 1em/1.3em Verdana, Arial, Helvetica, sans-serif; 
  color: #ffffff; 
  margin-left: 4px; 
  text-decoration: none; 
}

#usgscolorband {
  display: block;
  background-position: center;
  background-color: black;
  height: 80px;
  overflow: hidden;
  width: 66.667%;
} 

#usgscolorband  img {
  margin: 0 auto;
  padding: 0;
}

#usgstitle {
  font-weight: bold;
  line-height: 20px;
  margin: 0;
  background-color: #003366;
  padding: 0px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  min-height: 43px;
  display: flex;
  flex-wrap: wrap;
}
.title{
  line-height: 25px;
  font-size: 1.25em;
  padding-top: 0.25em;
  text-align: center;
}
.title a{
  font-weight: bold;
  color: white;
}

#usgstitle a, #usgstitle a:visited, #usgstitle a:active {
  color: #fff;
}

@media only screen and (max-width: 1036px) {
  #usgsidentifier{
 
  }
}
@media only screen and (min-width: 992px){
  .title{
    text-align: left;
    padding: 0.5em 0 0 1em;
  }
}
/* Small devices (tablets, 768px and under) */
@media only screen and (max-width:768px) { 
  #usgsccsa {
    text-align: center;
    align-items: center;
    padding: .5em;
    width: 100%;
  } 
  #usgsidentifier{
    width: 100%;
  }
  #usgstitle{
    justify-content: center;
  }
  .title{
    text-align: center;
  }

   #usgscolorband{
    width: 0%;
    visibility: none;
  }
  #firstBar{
    flex-wrap: wrap;
    justify-content: center;
  }
}


</style>