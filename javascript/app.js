var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  	'api-key': "5ed925f732514972b6eaa36c67a2051c",
  	'q': "kickboxing"
});

 	$.ajax({
        url: url,
        method: "GET"
      }).done(function(response) {
      	var 
      	
      	$("#searchTerm").val();

      	$("#")
      	


      });


 // console.log(response.response.docs[0].web_url)

	function processSearchSubmit(e) { // nabbed from: https://stackoverflow.com/questions/5384712/capture-a-form-submit-in-javascript
    if (e.preventDefault) e.preventDefault();    

    // do stuff here

    	return false;
	}

	var form = document.getElementById('searchForm'); 
		if (form.attachEvent) {
    		form.attachEvent("submit", processSearchSubmit);
		} 
		else {
	    	form.addEventListener("submit", processSearchSubmit);
		}


