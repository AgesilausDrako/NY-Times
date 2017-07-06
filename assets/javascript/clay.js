$(document).ready(function(){
	

	$("#button-search").click(function(){
		var search = $("#search-term");
		var limit = $("#records");
		var yearB = $("#start");
		var yearE = $("#end");
		var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			
			queryUrl +="?&api-key=d458e2def8dc4f8dbd1a70891929e0f2&q=" + search + "&page=" + limit +
						"&begin_date=" + yearB + "&end_date=" + yearE;
	
			
	
			$.ajax({
			  url: queryUrl,
			  method: 'GET',
			}).done(function(response) {
			  console.log(result);
			}).fail(function(err) {
			  throw err;
		});

		
			var results = response.docs;

			for (i=0; i<results.length; i++) {
				var articleDiv = $("<div>");
				var p = $("<p>");
				p.text(results[i].lead_paragraph);
				var a = $("<a>");
				a.attr("href", results[i].web_url);


				articleDiv.append(p);
				articleDiv.append(a);

			}

			$("#topArticles").prepend(articleDiv);
		});//click end

		$("#clear").click(function(){
			$("#topArticles").empty();
		});
		
});