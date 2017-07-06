$(document).ready(function(){


	$("#search-button").click(function(){
		var search = $("#search").val().trim();
		console.log(search);
		var limit = $("#records").val().trim();
		console.log(limit);
		var yearB = $("#start").val().trim();
		console.log(yearB);
		var yearE = $("#end").val().trim();
		console.log(yearE);
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		if (yearB.length < 4 || yearE.length < 4) {
			url += '?' + $.param({
			  'api-key': "d458e2def8dc4f8dbd1a70891929e0f2",
			  'q': search,
			  'page': limit
			});
		} else {
			url += '?' + $.param({
			  'api-key': "d458e2def8dc4f8dbd1a70891929e0f2",
			  'q': search,
			  'page': 1,
			  'begin_date': yearB,
			  'end_date': yearE
			});
		}
		console.log(url);

		$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result) {
			  console.log(result);
			var results = result.docs;

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
					
		});

		

		});//click end

		$("#clear").click(function(){
			$("#topArticles").empty();
		});
		
});