var API_KEY = "AIzaSyAGZBPE-bBT4iS1DbwaOst5f-nfy9NIDBo";
var REQUEST_BASE_URL = "https://maps.googleapis.com/maps/api/timezone/json?key=AIzaSyAGZBPE-bBT4iS1DbwaOst5f-nfy9NIDBo&sensor=false&";
"location=39.6034810,-119.6822510&timestamp=1331161200"

function getTimeFor (location) {
	var now = new Date().getTime();
	var reqUrl = REQUEST_BASE_URL + "timestamp=" + now + "&location=" + location;
}

function updateTimeZone (location, target) {
	
}