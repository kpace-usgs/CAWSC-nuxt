<template>
  <header>
      <a id='skipLink' href='#mainMenu'>Skip to Main Menu</a>
      <div class='flex' id='firstBar'>
        <div id='usgsidentifier'>
          <a href='https://www2.usgs.gov'>
            <img src='../static/header-logo.jpg' alt='USGS - science for a changing world' title='U.S. Geological Survey Home Page' />
          </a>
        </div>
        <div id='usgscolorband' class='hidden-xs'>
          <img src='~/static/header-banner.jpg' alt='sparkling pool water' />
        </div>
        <div id='usgsccsa'>
          <a href='https://www2.usgs.gov/'>USGS Home</a>
          <a href='https://www2.usgs.gov/ask/'>Contact USGS</a>
        </div>
      </div>

      <div class='flex' id='usgstitle'>
        <div class='title'>
          <a href='/index.html' >California Water Science Center</a>
        </div>
        <div id='search_form'>
          <USASearch></USASearch>
        </div>
      </div>

      <div class='flex'>
        <nav>
          <div class='navbar-header'>
            <p>CAWSC Menu</p>
            <button type='button' class='navbar-toggle ' role='tab' aria-expanded='false' v-on:click='showNavbar'>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <transition name='slide'>
            <div class='navbar-collapse' v-if='showNav'>
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
      </div>

      <!-- breadcrumb -->
      <ul class='flex' id='breadcrumb' style='margin-bottom: 0;'>
        <p style='font-weight: bold; padding-right: 10px'>You are here:</p>
        <li><a href='/'>Home  </a>/</li>
        <li><a href='/projects'>  Projects  </a>/</li>
        <li class='active'><a href='./index.html'>  Oil, Gas &amp; Groundwater</a></li>
      </ul>

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
  width: 100%;
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
  padding: 20px 15px;
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
  width: 16.667%;
  z-index: 99;
} 
#usgsidentifier{
  padding-top: 5px;
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
  margin: 0 auto;
  background-color: #003366;
  padding: 0px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: 43px;
}
.title{
  width: 66.67%;
  min-width: 400px;
  line-height: 25px;
  font-size: 17.5px;
  padding: 0px 0px 0px 17.5px;
  text-align: left;
}
.title a{
  font-weight: bold;
  color: white;
}

#usgstitle a, #usgstitle a:visited, #usgstitle a:active {
  color: #fff;
}
#search_form{
  height: 40px;
  width: 33.33%;
  line-height: 20px;
  padding: 0px 15px;
  font-weight: bold;
}
#breadcrumb{
  list-style-type: none;
  justify-content: flex-start;
  padding: 12px 20px;
  background-color: #eceeef;
}
#breadcrumb li{
  padding: 0 5px;
  display: flex;
  color: silver;
}
#breadcrumb li a{
  padding-right: 10px;
}
#breadcrumb li.active a{
  color: #333;
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
  #search_form{
    margin: 0 auto;
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