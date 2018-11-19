define(function(){
	function details(){

	}
	details.prototype.init = function(){
		var id = window.location.search.split("=")[1]; 
		$.get("http://rap2api.taobao.org/app/mock/117321/products",{id:id},function(data){
			$.each(data.data,function(index,val){
				var str = "";
				// val.detailshowimg = val.detailshowimg.split(",");			
				str = `<img src="../img/show_banner_1.jpg">`
				$(".picture-a").append(str);

				var str2 = "";
				str2 = `<p class="name">{{products.name}}<i>￥</i><span class="price">{{products.price}}</span></p>`
				$(".goods-left-top").append(str2);

			})
		},"json");

	}
	return new details();
})