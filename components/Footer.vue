<template>
	<footer class='hidden-print'>
		<div class='flex cawscFoot'>	
			<div>
				<dl>
					<dt>California Water Science Center</dt>
					<dd><a href="/about/"><span>About</span></a></dd>
					<dd><a href="/about/contact-california-water-science.html"><span>Locations</span></a></dd>
					<dd><a href="/about/contact-california-water-science.html#inquire"><span>Contact</span></a></dd>
				</dl>
			</div>
			<div>
				<dl>
					<dt>Public Affairs</dt>
					<dd><a href="/news/">News</a></dd>
					<dd><a href="/about/outreach/"><span>Outreach</span></a></dd>
					<dd><a href="/media/"><span>Media Gallery</span></a></dd>
				</dl>
			</div>
			
			<div>
				<dl>
					<dt>Resources</dt>
					<dd><a href="/partner_with.html"><span>Partner with Us</span></a></dd>
					<dd><a href="/links.html"><span>Informational Links</span></a></dd>
					<dd><a href="/webcams/">Webcams</a></dd>
				</dl>
			</div>
			<div>
				<dl>
					<dt>Connect</dt>
					<dd class='icons'>
						<a href="https://twitter.com/USGSwaterCA" title="USGS California Water Science Center Twitter feed">
							<i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
						</a>
						<a href="http://facebook.com/usgeologicalsurvey" title="USGS Facebook page">
							<i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
						</a>
						<a href="https://plus.google.com/112624925658443863798/posts" title="USGS Google+ page">
							<i class="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
						</a>
						<a href="http://github.com/usgs" title="USGS on GitHub">
							<i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
						</a>
						<a href="http://flickr.com/usgeologicalsurvey" title="USGS Flickr site">
							<i class="fa fa-flickr fa-2x" aria-hidden="true"></i>
						</a>
						<a href="http://youtube.com/usgs" title="USGS YouTube channel">
							<i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
						</a>
						<a href="http://instagram.com/usgs" title="USGS Instagram page">
							<i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
						</a>
					</dd>
				</dl>
			</div>
			
		</div>


		<nav>
			<div class="navbar-header">
				<span class="sr-only"></span>
				<button type="button" class="navbar-toggle" v-on:click='showNavbar'>
					<i class="fa fa-bars" aria-hidden="true"></i>
				</button>
			</div>

	
			<div class="navbar-collapse" v-if='showNav'>
				<ul>
					<li><a href="https://www2.usgs.gov/laws/accessibility.html"  title="Accessibility Policy (Section 508)">Accessibility</a></li>
					<li><a href="https://www2.usgs.gov/foia/"  title="Freedom of Information Act">FOIA</a></li>
					<li><a href="https://www2.usgs.gov/laws/privacy.html" title="Privacy policies of the U.S. Geological Survey.">Privacy</a></li>
					<li><a href="https://www2.usgs.gov/laws/policies_notices.html" title="Policies and notices that govern information posted on USGS Web sites.">Policies and Notices</a></li>
				</ul>
			</div><!--/.nav-collapse -->
		
		</nav>

		<div id="usgsfootertext" class='flex'>
			<div id="finePrint" >
				<p><a href="http://www.doi.gov/">U.S. Department of the Interior</a> | <a href="https://www2.usgs.gov/">U.S. Geological Survey</a><br>
				URL: https://ca.water.usgs.gov/projects/gama/sacMetro/index.html<!--#echo var="SERVER_NAME"--><!--#echo var="DOCUMENT_URI"--><br />
				Page Contact Information: <a href="https://ca.water.usgs.gov/about/contact-california-water-science.html#inquire">Send Us a Message</a><br/>
				Page Last Modified: <!--#echo var="LAST_MODIFIED" -->{{dateModified}}</p>
			</div>
			<div id="govLogos" >
				<a href="http://usa.gov/"><img class="pull-right" alt="USA.gov logo" height="26" src="../static/footer_graphic_usagov.jpg" title="USAGov: Government Made Easy" width="90"></a>
			</div>
		</div>
	</footer>
</template>

<script>

export default {
	name: 'USGSFooter',
	props: [ 'width' ],
	data() {
		return {
			showNav: '',
			dateModified: ''
		}
	},

	watch: {
	    width: function widthChanged() {
	      this.checkWidth();
	    }
	},

	mounted(){
		this.showNavbar();
		this.modifyDate();
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
			this.showNav = !this.showNav;
		},
		modifyDate(){
			var dt = new Date(document.lastModified);

			console.log(dt.toUTCString());
			this.dateModified = dt.toUTCString();
			//this.dateModified = document.lastModified;
		}
	}
}
</script>

<style scoped> 
.navbar-collapse{
	height: 50px;
}
.icons .fa{
	color: #808080;
	margin-right: 5px;
}

footer{
	margin: 0 auto;
	padding: 0 10px;
}

.cawscFoot{
	background: #EFF5FB;
	border-top: 2px solid #DDD;
	margin: 50px auto 0px;
	padding-top: 0.75em;
	flex-wrap: wrap;
}
.cawscFoot>div{
	text-align: left;
	width: 25%;
	min-width: 200px;
	padding: 0 15px;
	color: #003366;
	font-family: 'Open Sans', sans-serif;
}
.cawscFoot>div>dl{
	margin: 0 0 20px 0;
}
dl>dt{
	font-weight: 700;
	margin-top: 0.75em;
}
dl>dd{
	margin-left: 0;
}
.cawscFoot a{
	color: #003366;
}
.cawscFoog a:hover{
	text-decoration: none;
}

#usgsfootertext{
	flex-wrap: wrap;
	position: static;
}
#finePrint{
	text-align: left;
}
#govLogos{
	margin: 10px;
}
#footer-waypoint{
	border: 1px solid black;
}
</style>