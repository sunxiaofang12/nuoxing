
require(["config"], function(){
	require(["jquery", "template", "header", "footer","cookie"], function($,template,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
			
			$("footer").load("/html/component/footer.html", function(){
				
			});
				
		}).then(function(){
			
				var str = location.search.slice(1);
					var arr = str.split("="); // ["id","3"];
					var obj = {};
					obj[arr[0]] = arr[1];
//		$.ajax({
//				method: "get",
//				url:"http://rap2api.taobao.org/app/mock/117321/proj",
//				success: function(res){
//					console.log(res.products[arr[1]*1-1].price);
//					console.log(res.products[arr[1]*1-1].name);
//					if(res.code==1){
//						
//					}
//				}
//			})
			$.ajax({
			url:"http://rap2api.taobao.org/app/mock/117321/products",
			data: obj,
			method:"get",
			dataType:"json",
			success: function(res){
				console.log(res);
				if(res.code === 1){
					 console.log(res.products);              
					var str = template("detail-template",{products: res.products});
					console.log(str);
					$("#details").html(str);
				}
			}
		})
	
			
			
		})
			$(".btn").click(function(){
				var obj = {
					img:
					price:
					name:
					amout:1
					
				}
				arr.push(obj);
				var str = JSON.stringify(arr);
				template.cookie("cart",str);
				
				return false;//阻止冒泡和阻止默认
				
				
			})
		})
		
		
		
		
		
		
	})
})