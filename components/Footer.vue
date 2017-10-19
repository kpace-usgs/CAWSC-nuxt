<template>
	<footer class='hidden-print row'>
		<div id='footer'>	
			<div class='cawscFoot'>
				<div class='col-xs-12 col-md-3'>
					<dl>
						<dt>California Water Science Center</dt>
						<dd><a href="/about/"><span>About</span></a></dd>
						<dd><a href="/about/contact-california-water-science.html"><span>Locations</span></a></dd>
						<dd><a href="/about/contact-california-water-science.html#inquire"><span>Contact</span></a></dd>
					</dl>
				</div>
				<div class="col-xs-12 col-md-3">
					<dl>
						<dt>Public Affairs</dt>
						<dd><a href="/news/">News</a></dd>
					<!-- 	<dd><a href="/about/outreach/"><span>Outreach</span></a></dd> -->
						<dd><a href="/media/"><span>Media Gallery</span></a></dd>
					</dl>
				</div>
				
				<div class="col-xs-12 col-md-3">
					<dl>
						<dt>Resources</dt>
						<dd><a href="/partner_with.html"><span>Partner with Us</span></a></dd>
						<dd><a href="/links.html"><span>Informational Links</span></a></dd>
						<dd><a href="/webcams/">Webcams</a></dd>
					</dl>
				</div>
				<div class="col-xs-12 col-md-3">
					<dl>
						<dt>Connect</dt>
						<dd>
							<a href="https://twitter.com/USGSwaterCA" title="USGS California Water Science Center Twitter feed">
								<i class="fa fa-twitter-square fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="http://facebook.com/usgeologicalsurvey" title="USGS Facebook page">
								<i class="fa fa-facebook-square fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="https://plus.google.com/112624925658443863798/posts" title="USGS Google+ page">
								<i class="fa fa-google-plus-square fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="http://github.com/usgs" title="USGS on GitHub">
								<i class="fa fa-github-square fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="http://flickr.com/usgeologicalsurvey" title="USGS Flickr site">
								<i class="fa fa-flickr fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="http://youtube.com/usgs" title="USGS YouTube channel">
								<i class="fa fa-youtube-play fa-2x grey" aria-hidden="true"></i>
							</a>
							<a href="http://instagram.com/usgs" title="USGS Instagram page">
								<i class="fa fa-instagram fa-2x grey" aria-hidden="true"></i>
							</a>
						</dd>
					</dl>
				</div>
			</div>
		

			<div class="navbar  navbar-inverse" role="navigation">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" v-on:click='showNavbar'>
						<span class="sr-only">Toggle navigation</span>
						<i class="fa fa-bars" aria-hidden="true"></i>
					</button>
				</div>

		
				<div class="navbar-collapse collapse usgsFootNav" v-if='showNav'>
					<ul class='nav navbar-nav'>
						<li><a href="https://www2.usgs.gov/laws/accessibility.html"  title="Accessibility Policy (Section 508)">Accessibility</a></li>
						<li><a href="https://www2.usgs.gov/foia/"  title="Freedom of Information Act">FOIA</a></li>
						<li><a href="https://www2.usgs.gov/laws/privacy.html" title="Privacy policies of the U.S. Geological Survey.">Privacy</a></li>
						<li><a href="https://www2.usgs.gov/laws/policies_notices.html" title="Policies and notices that govern information posted on USGS Web sites.">Policies and Notices</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			
			</div>

			<div id="usgsfootertext" >
				<div id="finePrint" class="col-sm-8 pull-left">
					<p><a href="http://www.doi.gov/">U.S. Department of the Interior</a> | <a href="https://www2.usgs.gov/">U.S. Geological Survey</a><br>
					URL: https://<!--#echo var="SERVER_NAME"--><!--#echo var="DOCUMENT_URI"--><br />
					Page Contact Information: <a href="https://ca.water.usgs.gov/about/contact-california-water-science.html#inquire">Send Us a Message</a><br/>
					Page Last Modified: <!--#echo var="LAST_MODIFIED" -->{{dateModified}}</p>
				</div>
				<div id="govLogos" class="col-sm-4">
					<a href="http://usa.gov/"><img class="pull-right" alt="USA.gov logo" height="26" src="../static/footer_graphic_usagov.jpg" title="USAGov: Government Made Easy" width="90"></a>
				</div>
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

footer{
	margin: 0;
	width: 100%;
}
i.grey{
	color: #808080;
	margin-right: 5px;
}
.cawscFoot{
	background: #EFF5FB;
	border-top: 2px solid #DDD;
	padding-top: 0.75em;
	overflow: hidden;
	margin: 0 -15px;
}
#footer {
	width: 100%;
	margin: 0 -15px;
}
.navbar, #navbar, .navbar-inverse{
	margin: 0 -15px;
	border-radius: 0;
}
.navbar{
	border-bottom: 1px solid #fff;
}
.nav > li > a{
	color: #fff;
}
.cawscFoot {
    background: #EFF5FB;
    border-top: 2px solid #DDD;
    overflow: hidden;
    width: 100%;
	padding-top: .75em;
	}
	
.cawscFoot a {color: #003366;}	

.usgsFoot {
    background: #ccc;
    border-top: 2px solid #DDD;
	color: #fff;
	font-weight: 700;
}


#govLogos img {
	margin: .5em;
}

</style>