require(["config"], function(){
	require(["jquery", "tools", "header", "footer","lunbo"], function($,tools,header){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			
			$("footer").load("/html/component/footer.html", function(){
				
			});
				
		}).then(function(){
			$(".Carousel").lunbo({
				goPrev:"goPrev",
				goNext:"goNext"
			});
			
		})
	})
})
