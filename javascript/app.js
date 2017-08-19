
$(document).ready(function() {

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// 	url += '?' + $.param({
//   	'api-key': "5ed925f732514972b6eaa36c67a2051c",
//   	'q': "kickboxing"
// });

//  	$.ajax({
//         url: url,
//         method: "GET"
//       }).done(function(response) {
//       	var 
      	
//       	$("#searchTerm").val();

//       	$("#")
      	


//       });





$("#goButton").click(function (){
	// console.log("go button was clicked");
	var mySearchTerm = $("#searchTerm").val();
	var startDate = $("#searchStartDate").val();
	var endDate = $("#searchEndDate").val();

	// console.log("Search: " + mySearchTerm + " start date: " + startDate + " end date" + endDate);



	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
  		'api-key': "5ed925f732514972b6eaa36c67a2051c",
  		'q': mySearchTerm
  	});
	







	 	$.ajax({
        url: url,
        method: "GET"
      }).done(function(response) {
      	 console.log(response);

      	$("#resultsHere").html(JSON.stringify(response));

      });



});

});