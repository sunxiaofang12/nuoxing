require(["config"], function(){
	require(["jquery", "template", "header", "footer"], function($,template,header,footer){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			
			$("footer").load("/html/component/footer.html", function(){
				
			});
				
		}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/117321/proj",
				success: function(res){
					console.log(res)
					var html = template("pro-template",{products: res.products});
					console.log();
					$("#proList").html(html);
				}

			})
				
		})
		
	})
})
