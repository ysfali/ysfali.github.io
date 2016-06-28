var HTMLstartName='<h1 id="start-name" class="center">%data%</h1>';
var HTMLstartMessage='<h2 id="start-msg" class="center">Interactive Resume</h2>';

var HTMLheaderName = '<h2 id="name" class="center pad-top headings">Profile</h2><hr/>';
var HTMLheaderRole = '<h5 class="center">%data%</h5>';

var HTMLcontactGeneric = '<li class="flex-item"><p class="orange-text">%contact%</p><p class="white-text">%data%</p></li>';
var HTMLmobile = '<li class="flex-item"><p class="orange-text">mobile</p><p class="white-text">%data%</p></li>';
var HTMLemail = '<li class="flex-item"><p class="orange-text">email</p><p class="white-text">%data%</p></li>';
var HTMLtwitter = '<li class="flex-item"><p class="orange-text">twitter</p><p class="white-text">%data%</p></li>';
var HTMLgithub = '<li class="flex-item"><p class="orange-text">github</p><p class="white-text">%data%</p></li>';
var HTMLblog = '<li class="flex-item"><p class="orange-text">blog</p><p class="white-text">%data%</p></li>';

var HTMLdetails='<div class="col l4 s12 m12 center" id="extra"><h5 class="headings-1">Details</h5><br/></div>'
var HTMLlocation = '<li><p><strong>Location : </strong><br/>%data%</p></li>';
var HTMLname='<li><p><strong>Name : </strong><br/><span id="myname">%data%</span></p></li>';
var HTMLage='<li><p><strong>Age : </strong><br/>%data%</p></li>';

var HTMLbioPic = '<div class="col l4 s12 m12 center"><img src="%data%" alt="My Photograph" class="responsive-img circle pic tooltipped" data-position="bottom" data-delay="50" data-tooltip="Happy to see you!"></div>';
var HTMLWelcomeMsg = '<div class="col l4 s12 m12 center"><h5 class="headings-1">About Me :</h5><br/><p class="welcome-message">%data%</p></div>';

var HTMLcontactsStart='<div id="contact-entry" class="row center"><h5 class="headings-1 center">Contacts</h5></div>';
var HTMLcontactsMobile='<div class="col l6 m12 s12 center pad-bottom"><p><svg style="width:30px;height:30px" viewBox="0 0 24 24"><path fill="#000000" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg> %data%</p></div>';
var HTMLcontactsEmail='<div class="col l6 m12 s12 center"><p><svg style="width:30px;height:30px" viewBox="0 0 24 24"><path fill="#000000" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg> %data%</p></div>';
var HTMLcontactsTwitter='<div class="col l6 m12 s12 center"><p><svg style="width:30px;height:30px" viewBox="0 0 24 24"><path fill="#000000" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg> %data%</p></div>';
var HTMLcontactsGithub='<div class="col l6 m12 s12 center"><p><svg style="width:30px;height:30px" viewBox="0 0 24 24"><path fill="#000000" d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H14.85C14.5,21.92 14.5,21.24 14.5,21V18.26C14.5,17.33 14.17,16.72 13.81,16.41C16.04,16.16 18.38,15.32 18.38,11.5C18.38,10.39 18,9.5 17.35,8.79C17.45,8.54 17.8,7.5 17.25,6.15C17.25,6.15 16.41,5.88 14.5,7.17C13.71,6.95 12.85,6.84 12,6.84C11.15,6.84 10.29,6.95 9.5,7.17C7.59,5.88 6.75,6.15 6.75,6.15C6.2,7.5 6.55,8.54 6.65,8.79C6,9.5 5.62,10.39 5.62,11.5C5.62,15.31 7.95,16.17 10.17,16.42C9.89,16.67 9.63,17.11 9.54,17.76C8.97,18 7.5,18.45 6.63,16.93C6.63,16.93 6.1,15.97 5.1,15.9C5.1,15.9 4.12,15.88 5,16.5C5,16.5 5.68,16.81 6.14,17.97C6.14,17.97 6.73,19.91 9.5,19.31V21C9.5,21.24 9.5,21.92 9.14,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2Z" /></svg> %data%</p></div>';

/*
var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><p class="white-text">%data%</p></li>';
*/
var HTMLworkStart = '<div class="work-entry left-aligned row"></div>';
var HTMLworkEmployer = '<div class="col l4"><h5><strong class="left-aligned">%data%</strong></h5>';
var HTMLworkDates = '<p>%data%</p>';
var HTMLworkLocation = '<p class="location-text"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>%data%</p></div>';
var HTMLworkTitle = '<div class="col l6 offset-l1"><h6><strong>%data%</strong></h6>';
var HTMLworkDescription = '<p class="left-aligned">%data%</p></div>';

var HTMLprojectStart = '<div class="row center pad-left" id="prj"></div>';
var HTMLprojectImage = '<div class="project col l5 m8 offset-m2 s10 offset-s1"><div class="ch-item" style="background-image:url(%data%);background-size:100% 100%;" title="Project">';
var HTMLprojectTitle = '<div class="ch-info"><h3>%data%</h3>';
var HTMLprojectURL='<p>by Yusuf Ali <a href="%data%" target="_blank">Link to Project</a></p></div></div></div>';
var HTMLprojectDescription = '<p>%data%</p>';

var HTMLabilitiesStart='<h2 class="center pad-top headings">Abilities</h2><hr/>';

var HTMLskillEntry='<div class="skills-entry"><h4 class="headings-1">Skills</h4></div>';
var HTMLskillHeader='<div class="skills center"></div>';
var HTMLskillList='<ul class="skill row"></ul>';
var HTMLskill='<li class="hover col l5 m8 s12"><span class="lefty">%data%</span></li>';
var HTMLstars='<span class="star"></span>';
var HTMLstarFilled='<span class="glyphicon glyphicon-star filled"></span>';
var HTMLstar='<span class="glyphicon glyphicon-star"></span>';
var HTMLtoolsEntry='<div class="tools-entry"><h4 class="headings-1">Tools</h4></div>';
var HTMLtoolsHeader='<div class="tools center"></div>';
var HTMLtoolList='<ul class="tool row"></ul>';
var HTMLtool='<li class="hover col l5 m8 s12"><span class="lefty">%data%</span></li>';

var HTMLschoolStart = '<div class="education-entry"><br/><h4 class=" center headings-1">Schools/Colleges</h4><br/><ul id="school" class="collapsible popout" data-collapsible="accordion"></ul></div>';
var HTMLschoolEntry='<li class="school-entry center"></li>'
var HTMLschoolName = '<div class="collapsible-header"><span><strong>%data%</strong>';
var HTMLschoolDegree = ' -- %data%</span></div>';
var HTMLschoolDates = '<div class="collapsible-body"><p><strong>Year : </strong>%data%<br/>';
var HTMLschoolLocation = '<span class="location-text"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>%data%</span><br/>';
var HTMLschoolGrade='<strong>Percentage/SPI : </strong>%data%<br/>'
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLschoolURL='<a href="%data%">Link to website</a></p></div>';

var HTMLonlineStart='<div class="education-entry"><br/><h4 class=" center headings-1">Online Courses</h4><br/><ul id="online" class="collapsible popout" data-collapsible="accordion"></ul><br/></div>';
var HTMLonlineEntry='<li class="online-entry center"></li>';
var HTMLonlineTitle = '<div class="collapsible-header"><span><strong>%data%</strong>';
var HTMLonlineSchool = ' - %data%</span></div>';
var HTMLonlineDates = '<div class="collapsible-body"><p><strong>Year : </strong>%data%<br/>';
var HTMLonlineURL = '<a href="#">%data%</a></p></div>';

//var internationalizeButton = '<button>Internationalize</button>';
var internationalizeButton='<div class="fixed-action-btn" id="Internationalize" style="bottom: 2vh; right: 88vw;"><a class="btn-floating btn-small teal tooltipped" data-position="right" data-delay="50" data-tooltip="Internationalize"><i class="large material-icons">mode_edit</i></a></div>'
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('#Internationalize').click(function() {
    var name=$("#start-name").html();
    var iName = inName(name) || function(){};
    $('#start-name').html(iName); 
    $('#myname').html(iName);
    //alert(iName); 
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX,loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].city);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    console.log(locations);
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();// longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    
    var infowindow = new google.maps.InfoWindow({
      content:name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
