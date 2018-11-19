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
				
				
				
			}).then(function(){
			
			var str = location.search.slice(1);
			var arr = str.split("="); // ["id","3"];
			var obj = {};
			obj[arr[0]] = arr[1];
			
			$.ajax({
				url:"http://rap2api.taobao.org/app/mock/117321/products",
				data: obj,
				method:"get",
				dataType:"json",
				success: function(res){
					console.log(res);
					if(res.code === 1){
						 console.log(res.products);  
//						 
//						 //渲染页面,读取cookie
//			            $.cookie.json=true;
//			            var products=this.products=$.cookie("products")||[];
//						 
//						 //从cookie中删除
//			            $.cookie("products",this.products,{expires:3,path:"/"})
						 
						var str = template("cart-template",{products: res.products});
						console.log(str);
						$("#cart").html(str);
					}
				}
			})
			
			
		})
			 
		
	})
})