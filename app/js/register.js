require(["config"], function(){
	require(["jquery", "tools", "header", "footer","cookie"], function($,tools,header,footer,cookie){

		//promise
		new Promise(function(resolve, reject){
			
			
			$("footer").load("/html/component/footer.html", function(){
				
			});
			resolve();
				
		}).then(function(){
			
				//处理表单提交
			$("#regist").click(function(e){
//				console.log("123");
				//构造请求携带的参数
				var data = {
					username: $("#username").val(),
					password: $("#userPwd").val(),
//					password: $("#oldPwd").val()
					phone: $("#userTell").val()
				};

				$.ajax({
					
					method:"post",
					data: data,
					dataType:"json",
					url:"http://localhost/projectserverB/api/select.php",
					success: function(res){
						console.log(res);
						if(res.code === 1){
							//document.cookie = "login=true;path=/"; //使用cookie记录登录状态
							location.href = "http://localhost:2333/";
							alert("用户名已存在");
						}else{
							
							$.ajax({
								
								method:"post",
								data: data,
								dataType:"json",
								url:"http://localhost/projectserverB/api/register.php",
								success: function(res){
									console.log(res);
									if(res.code === 1){
										console.log(res.code);
										//document.cookie = "login=true;path=/"; //使用cookie记录登录状态
										location.href = "http://localhost:2333/";

									}
								}
							})	
						
						}
					}
				})



				e.preventDefault();
			})
			
			
			
		})
	})
})
