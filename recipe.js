

var queryURL = "http://food2fork.com/api/search?key=3a4f22fb3ddd09f03521f9daf18117a1&q=shredded%20chicken"

$.ajax({
          url: queryURL,
          method: "GET"
          })
		.done(function(response) {
			console.log(response);
		})
