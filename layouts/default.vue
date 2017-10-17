<template>
  <div>
    <USGSHeader :width='width'></USGSHeader>
    <Jumbo></Jumbo>
    <nuxt/>
    <USGSFooter :width='width'></USGSFooter>
  </div>
</template>

<script>
import USGSHeader from '~/components/Header.vue'
import Jumbo from '~/components/Jumbo.vue'
import USGSFooter from '~/components/Footer.vue'
import '@nuxtjs/font-awesome'

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

section.container{
  width: 70%;
  margin-left: 0;
}
.sidebar{
  width: 30%;
  padding-left: 20px;
}
.container>div{
  padding: 20px 5px;
  width: 100%;
  line-height: 2em;
}
.container>div>h3, .container>div>h4, .container>div>h5{
  padding: 10px 0;
  width: 70%;
}
.container>div>img{
  min-width: 200px;
  max-width: 500px;
  width: 80%;
  height: auto;
}
.container>div>div{
  padding: 20px 0;
}
.illustrated{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.illustrated>div{
  width: 100%;
  max-width: 550px;
  flex: 1 0 auto;
  text-align: left;
  margin-top: 0;
}
.image{
  padding-left: 30px;
  max-width: 95vw;
  margin: auto;
}
.illustrated .image img{
  max-width: 500px;
  width: 100%;
  margin: auto;
}
.caption{
  font-size: 0.8em;
  font-style: italic;
  padding: 5px 0 0;
  line-height: 1.23m;
}

/*canvas{
  width: 100%;
  height: auto;
}*/
@media (max-width: 500px){
  section.container{
    width: 100%;
  }
  .sidebar{
    width: 100%;
  }
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
  line-height: 1.428;
  background: #fff;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1280px;
}

.flex{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
h1, h2, h3, h4, h5, h6{
  color: #003366;
  font-weight: 700;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: .5rem;
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
main{
  display: flex;
  flex-wrap: wrap;
}

/* default from bootstrap */

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

dfn {
  font-style: italic;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}



pre,
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
      touch-action: manipulation;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #868e96;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: left;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}



.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.1;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: normal;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 5px;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #868e96;
}

.blockquote-footer::before {
  content: "\2014 \00A0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #868e96;
}

</style>
