$(document).ready(function(){
	
	//Initialize Firebase
	var config = {
		apiKey: "AIzaSyDQSNOjvpEhCUJVqSMF0BGLMPj7EIZ2FA8",
		authDomain: "daytripper-7f668.firebaseapp.com",
		databaseURL: "https://daytripper-7f668.firebaseio.com",
		projectId: "daytripper-7f668",
		storageBucket: "daytripper-7f668.appspot.com",
		messagingSenderId: "681039633666"
	  };
	  firebase.initializeApp(config);

	  //Initialize Values
	  var database = firebase.database();

	  var date = 0;
	  var name = "";
	  var activity = "";
	  var review = "";
	  var userZip = "";

	  //Capture "submit" button click
	  $("#submit-input").on("click", function(event){
		event.preventDefault();

			//Grab values from text boxes on the form
			date = $("#date-input").val().trim();
			name = $("#name-input").val().trim();
			activity = $("#activity-input").val().trim();
			review = $("#review-input").val().trim();


			database.ref().push({
				date: date,
				name: name,
				activity: activity,
				review: review,
			});

			$("#date-input").val("");
			$("#name-input").val("");
			$("#activity-input").val("");
			$("#review-input").val("");

			//Prevent page from reloading
			return false;
	  });

		//Firebase Watcher and Initial Loader

			database.ref().on("child_added", function(childSnapshot, prevChildKey){
				var firebaseDate = childSnapshot.val().date;
				var firebaseName = childSnapshot.val().name;
				var firebaseActivity = childSnapshot.val().activity;
				var firebaseReview = childSnapshot.val().review;


				//Append the new items to the table
				$("#new-review").append("<tr><td>" + firebaseDate + 
				"</td><td>" + firebaseName + 
				 "</td><td>" + firebaseActivity + 
				  "</td><td>" + firebaseReview +"</td></tr>");

				//Handle Errors
			}, function(errorObject){
				console.log("Errors handled" + errorObject.code);
			});

			database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

			   //$("#date-input").text(snapshot.val().date);
			   //$("#name-input").text(snapshot.val().name);
			   // $("#activity-input").text(snapshot.val().activity);
			   //$("#review-input").text(snapshot.val().review);
			});
		function clearField() {
			document.date-input.reset();
		};
	
		//local strage set
		$("#zipcodeSearch").on("click", function(event){
			event.preventDefault();
			userZip = $("#zipcodeInput").val().trim();
			localStorage.clear();
			localStorage.setItem("zip", userZip);
		});
		$("#deliverySearch").on("click", function(event){
			event.preventDefault();
			userZip = $("#zipInput").val().trim();
			localStorage.clear();
			localStorage.setItem("zip", userZip);
		});
		$("#movieZipSearch").on("click", function(event){
			event.preventDefault();
			userZip = $("#zipInput").val().trim();
			localStorage.clear();
			localStorage.setItem("zip", userZip);
		});
		$("#eventSearch").on("click", function(event){
			event.preventDefault();
			userZip = $("#zipInput").val().trim();
			localStorage.clear();
			localStorage.setItem("zip", userZip);
		});


		//local storage get
		$("#zipInput").val(localStorage.getItem("zip"));
		$("#zipcodeInput").val(localStorage.getItem("zip"))

});
         
