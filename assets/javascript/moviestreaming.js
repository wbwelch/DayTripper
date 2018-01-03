// JavaScript Document

 

var queryURL = "http://api-public.guidebox.com/v2/search?api_key=1c94ca8b2662e97be6c424070e65bb62ea5&type=" + "movie" + "&field=title&query=" + "Pacific Rim"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
		  console.log(response);
	  });
		  
