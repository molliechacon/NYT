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
