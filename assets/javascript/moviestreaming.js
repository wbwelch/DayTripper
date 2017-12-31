// JavaScript Document

 

var queryURL = "http://api-public.guidebox.com/v2//v2/search?type=" + "movie" + "&field=title&query=" + "Pacific Rim"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
		  console.log(response);
	  });
		  