define(["jquery"],function($){
	function Header(){}
	//实现下拉菜单
	Header.prototype.log = function(){
		var username = $.cookie("username");
		
			if(username){
				$(".sub").text(username+"   欢迎您");
				$(".sub").css("display","none");
				
				
				
			}
	}

	return new Header();
})




//define(["jquery"],function($){
//	function Header(){}
//	Header.prototype.llo = function(){
//		var username = $.cookie("username");
//		
//		if(username){
//		$(".sub").text(username+"     欢迎您");
//		$(".zc").css("display","none");
//		$(".qq").css("display","none");
//		$(".qc").css("display","none");
//		}
//	}
//	
// 	return new Header();
//})