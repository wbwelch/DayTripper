
var latitude = 0;
var longitude = 0;
var map, infoWindow;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 18
          });
          infoWindow = new google.maps.InfoWindow;

          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
			  
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
				
				longitude = position.coords.longitude;
				latitude = position.coords.latitude;
				console.log(latitude);
				console.log(longitude);
				console.log(position);
				
              infoWindow.setPosition(pos);
              infoWindow.setContent('<p>Location found.</p>');
              infoWindow.open(map);
              map.setCenter(pos);
				function initMapReverse() {
				  var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 18,
					center: {lat: latitude, lng: longitude}
				  });
				  var geocoder = new google.maps.Geocoder;
				  var infowindow = new google.maps.InfoWindow;

				  document.getElementById('submit').addEventListener('click', function() {
					geocodeLatLng(geocoder, map, infowindow);
				  });
				}

				function geocodeLatLng(geocoder, map, infowindow) {
				  var latlng = {lat: latitude, lng: longitude};
				  geocoder.geocode({'location': latlng}, function(results, status) {
					if (status === 'OK') {
					  if (results[0]) {
						map.setZoom(18);
						var marker = new google.maps.Marker({
						  position: latlng,
						  map: map
						});
						infowindow.setContent("<p>" + results[0].formatted_address);
						infowindow.open(map, marker);
					  } else {
						window.alert('No results found');
					  }
					} else {
					  window.alert('Geocoder failed due to: ' + status);
					}
				  });
				}
			$("#submit").on("click", initMapReverse());

            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
				
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        };

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        };


//function addressSearch() {
//	var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyBr0JPLjGiIEkdpGe60caL1HkansZ5Wf9w";
//
//		  $.ajax({
//			url: queryURL2,
//			method: "GET"
//		  }).done(function(newResponse) {
//			  console.log(newResponse);
//		  });
//	};

//working on code to convert lat and long to physical address. How do I make it wait to locate lat and long before running this function
//http://techslides.com/convert-latitude-and-longitude-to-a-street-address
//want to print street address in sidebar beside map
//function addressConvert() {
	
	//var queryUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=false"

	//$.ajax({
			//url: queryURL,
			//method: "GET"
		//  }).done(function(response) {
				//console.log(respone);
		//	});
	//};

//addressConvert();

	