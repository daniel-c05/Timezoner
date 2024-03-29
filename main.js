var locations = [
"New York City, New York",
"Los Angeles, California",
"Chicago, Illinois",
"Houston, Texas",
"Philadelphia, Pennsylvania",
"Phoenix, Arizona",
"San Antonio, Texas",
"San Diego, California",
"Dallas, Texas",
"San Jose, California",
"Austin, Texas",
"Jacksonville, Florida",
"Indianapolis, Indiana",
"San Francisco, California",
"Columbus, Ohio",
"Fort Worth, Texas",
"Charlotte, North Carolina",
"Detroit, Michigan",
"El Paso, Texas",
"Memphis, Tennessee",
"Boston, Massachusetts",
"Seattle, Washington",
"Denver, Colorado",
"Washington, DC",
"Nashville, Tennessee",
"Baltimore, Maryland",
"Louisville, Kentucky",
"Portland, Oregon",
"Oklahoma City, Oklahoma",
"Milwaukee, Wisconsin",
"Las Vegas, Nevada",
"Albuquerque, New Mexico",
"Tucson, Arizona",
"Fresno, California",
"Sacramento, California",
"Long Beach, California",
"Kansas City, Missouri",
"Mesa, Arizona",
"Virginia Beach, Virginia",
"Atlanta, Georgia",
"Colorado Springs, Colorado",
"Raleigh, North Carolina",
"Omaha, Nebraska",
"Miami, Florida",
"Oakland, California",
"Tulsa, Oklahoma",
"Minneapolis, Minnesota",
"Cleveland, Ohio",
"Wichita, Kansas",
"Arlington, Texas",
"New Orleans, Louisiana",
"Bakersfield, California",
"Tampa, Florida",
"Honolulu, Hawaii",
"Anaheim, California",
"Aurora, Colorado",
"Santa Ana, California",
"Saint Louis, Missouri",
"Riverside, California",
"Corpus Christi, Texas",
"Pittsburgh, Pennsylvania",
"Lexington, Kentucky",
"Anchorage, Alaska",
"Stockton, California",
"Cincinnati, Ohio",
"Saint Paul, Minnesota",
"Toledo, Ohio",
"Newark, New Jersey",
"Greensboro, North Carolina",
"Plano, Texas",
"Henderson, Nevada",
"Lincoln, Nebraska",
"Buffalo, New York",
"Fort Wayne, Indiana",
"Jersey City, New Jersey",
"Chula Vista, California",
"Orlando, Florida",
"Saint Petersburg, Florida",
"Norfolk, Virginia",
"Chandler, Arizona",
"Laredo, Texas",
"Madison, Wisconsin",
"Durham, North Carolina",
"Lubbock, Texas",
"Winston Salem, North Carolina",
"Garland, Texas",
"Glendale, Arizona",
"Hialeah, Florida",
"Reno, Nevada",
"Baton Rouge, Louisiana",
"Irvine, California",
"Chesapeake, Virginia",
"Irving, Texas",
"Scottsdale, Arizona",
"North Las Vegas, Nevada",
"Fremont, California",
"Gilbert, Arizona",
"San Bernardino, California",
"Boise, Idaho",
"Birmingham, Alabama",
];

  var latlongs = [
"40.7069,-73.6731",
"33.9731,-118.2479",
"41.9613,-87.8849",
"29.8131,-95.3098",
"39.865,-75.2752",
"33.704,-112.3518",
"29.4711,-98.5356",
"32.7185,-117.1593",
"32.7904,-96.8044",
"37.3894,-121.8868",
"30.3264,-97.7713",
"30.3375,-81.7686",
"39.8269,-86.2374",
"37.7848,-122.7278",
"40.0999,-83.0157",
"32.7714,-97.2915",
"35.26,-80.8042",
"42.3474,-83.0604",
"31.7584,-106.4783",
"35.1693,-89.9904",
"42.4464,-71.4594",
"47.4323,-121.8034",
"39.838,-104.9988",
"38.9122,-77.0177",
"36.1657,-86.7781",
"39.1753,-76.6732",
"38.189,-85.6768",
"45.4373,-122.6147",
"35.3792,-97.5362",
"43.0113,-87.9584",
"36.1721,-115.1224",
"35.1996,-106.6448",
"32.2139,-110.9694",
"36.8411,-119.801",
"38.3805,-121.5554",
"33.8043,-118.201",
"39.1479,-94.568",
"33.4317,-111.8469",
"36.776,-76.0766",
"33.8687,-84.3351",
"38.8615,-104.8578",
"35.7727,-78.6324",
"41.2917,-96.1711",
"25.7791,-80.1978",
"37.7806,-122.2166",
"36.0557,-96.0602",
"45.0523,-93.2541",
"41.5234,-81.5996",
"37.652,-97.259",
"32.6945,-97.1275",
"29.9614,-90.1577",
"35.3866,-119.0171",
"27.9961,-82.582",
"21.3278,-157.8294",
"33.8428,-117.9546",
"39.7378,-104.8152",
"33.7523,-117.8541",
"38.6459,-90.3264",
"33.9924,-117.3694",
"27.7941,-97.403",
"40.4752,-79.9528",
"38.0378,-84.6164",
"61.2116,-149.8761",
"37.958,-121.2876",
"38.9469,-83.8629",
"44.8965,-93.1034",
"41.7207,-83.5694",
"40.7361,-74.2251",
"36.0446,-79.8596",
"33.055,-96.7365",
"36.0008,-114.9588",
"40.8651,-96.8231",
"42.8967,-78.8846",
"41.0938,-85.0707",
"40.7328,-74.0755",
"33.0169,-116.846",
"28.3067,-80.6862",
"27.7723,-82.6386",
"36.8466,-76.2855",
"33.3301,-111.8632",
"27.5155,-99.4986",
"43.0696,-89.4239",
"35.9967,-78.8966",
"33.5865,-101.8606",
"36.1024,-80.2228",
"32.9227,-96.6248",
"33.5311,-112.1767",
"25.5584,-80.4582",
"39.5268,-119.8113",
"30.4492,-91.1856",
"33.7419,-117.7467",
"36.7352,-76.2384",
"32.7673,-96.7776",
"33.5218,-111.9049",
"36.2115,-115.1241",
"37.5605,-121.9999",
"33.3354,-111.8153",
"34.1105,-117.2898",
"43.6038,-116.2729",
"33.4564,-86.8019"];

var API_KEY = "AIzaSyAGZBPE-bBT4iS1DbwaOst5f-nfy9NIDBo";
var REQUEST_BASE_URL = "https://maps.googleapis.com/maps/api/timezone/json?";

var accentMap = {
    "á": "a",
    "ö": "o"
};

var PST_OFFSET = 7;
var MST_OFFSET = 6;
var CST_OFFSET = 5;
var EST_OFFSET = 4;

var pst_time = "";
var mst_time = "";
var cst_time = "";
var est_time = "";

var lastLocation = "";
var nextIsOdd = false;

function setTimezones () {

  var date = new Date();
  var now = date.getTime();
  var offset = date.getTimezoneOffset() / 60;  
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  var pst_time = (hours + (offset - PST_OFFSET)) + ':' + minutes + ' ' + ampm;
  var mst_time = (hours + (offset - MST_OFFSET)) + ':' + minutes + ' ' + ampm;
  var cst_time = (hours + (offset - CST_OFFSET)) + ':' + minutes + ' ' + ampm;
  var est_time = (hours + (offset - EST_OFFSET)) + ':' + minutes + ' ' + ampm;

  $("#pst").text(pst_time);
  $("#mst").text(mst_time);
  $("#cst").text(cst_time);
  $("#est").text(est_time);

  setTimeout(function() {
    setTimezones();
    console.log("Timeout");
  }, 10000);

}

var normalize = function( term ) {
	var ret = "";
	for ( var i = 0; i < term.length; i++ ) {
	  ret += accentMap[ term.charAt(i) ] || term.charAt(i);
	}
	return ret;
};

function getTimeFor (location) {  

	var now = new Date().getTime() / 1000;
	var index = locations.indexOf(location);
  
  if (index == -1) {
    return;
  }

  else if (location === lastLocation) {
    return;
  }

	var latlong = latlongs[index];
	var reqUrl = REQUEST_BASE_URL + "location=" + latlong + "&timestamp=" + now + "&sensor=false&key=" + API_KEY;
	var timezone = $.getJSON( reqUrl, function( data ) {
    appendLocation(location, data.dstOffset, data.rawOffset);
    lastLocation = location;
  });
}

function getTimeForOffset (offset) {

  var date = new Date();
  var now = date.getTime();
  var curOffset = date.getTimezoneOffset() / 60;  

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  var str_time = (hours + (curOffset + offset)) + ':' + minutes + ' ' + ampm;
  return str_time;
}

function appendLocation (location, dstOffset, rawOffset) {

  var time = new Date().getTime();
  var offset = (rawOffset + dstOffset) / 3600;
  var timezoneData = ''; 

  if (nextIsOdd) {
    timezoneData = '<li class="timezone odd"><h2>' + location + '</h2><div><span>' + getTimeForOffset(offset) + '</span> || (GMT ' + offset + ':00)</div></li>';
    nextIsOdd = false;
  }
  else {
    timezoneData = '<li class="timezone"><h2>' + location + '</h2><div><span>' + getTimeForOffset(offset) + '</span> || (GMT ' + offset + ':00)</div></li>';  
    nextIsOdd = true;
  }

  console.log(timezoneData);

  $(timezoneData).hide().prependTo('.sortable').fadeIn('slow');
  $('.sortable').sortable();
}

$(document).ready(function(){

  setTimezones();

  $( "#searchbox" ).autocomplete({
    source: function( request, response ) {
      var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
      response( $.grep( locations, function( value ) {
        value = value.label || value.value || value;
        return matcher.test( value ) || matcher.test( normalize( value ) );
      }) );
    }
  });

  $("#searchbox").blur(function(){
  	var location = $("#searchbox").val();
  	getTimeFor(location);
  });

  $('.sortable').sortable();

  var online = navigator.onLine;
  
});