require(["config"], function(){
	require(["jquery", "tools", "header", "footer","cookie"], function($,tools,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			
			
			$("footer").load("/html/component/footer.html", function(){
				resolve();
			});
				
		}).then(function(){
			console.log("data");
				//处理表单提交
			$("#regist").click(function(e){
				//构造请求携带的参数
				var data = {
					username: $("#username").val(),
					password: $("#userPwd").val()
				};
				
				$.ajax({
					
					method:"post",
					data: data,
					dataType:"json",
					url:"http://localhost/projectserverB/api/log.php",
					success: function(res){
						console.log(res);
						if(res.code === 1){
								
							//document.cookie = "log=true;path=/"; //使用cookie记录登录状态
							$.cookie("username", data.username,{
								path:"/"
							})
							alert("登陆成功")
							location.href = "http://localhost:2333/";
						}else{
							alert("用户名或者密码错误");
						}
					}
				})



				e.preventDefault();
			});
			
		})
	})
}) 
