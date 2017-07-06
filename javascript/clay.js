$(document).ready(function(){
	var search = $("#inputS");
	var limit = $("#inputL");
	var yearB = $("#inputYB");
	var yearE = $("#inputYE");

	$("#search").click(function(){

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "d458e2def8dc4f8dbd1a70891929e0f2",
		  'q': search,
		  'page': limit/10-1,
		  'begin_date': yearB,
		  'end_date': yearE
		});
			$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result) {
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