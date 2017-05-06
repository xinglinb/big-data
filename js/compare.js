
window.onload=function(){

	$(".sub").click(function(){
		
		$("#left-car").slideDown();
	});

	$("#left-car li").click(function(){
		var x=0;
		// for (var i = 0; i < $("#left-car li").length; i++) {
		// 	if ($("#left-car ul").find("li").eq(i).attr("index")==0) {
		// 		x=x+1
		// 	};
			
		// };
		if ($(this).attr("index")==0) {
			for (var i = 0; i < $("#left-car li").length; i++) {
				if ($("#left-car ul").find("li").eq(i).attr("index")==1) {
					$("#left-car ul").find("li").eq(i).attr("index","2");

				}
				else if ($("#left-car ul").find("li").eq(i).attr("index")==2) {
					$("#left-car ul").find("li").eq(i).attr("index","0");
					$("#left-car ul").find("li").eq(i).find("p[class='li-add']").text("+")
				};
			};
			$(this).attr("index","1");
			$(this).find("p[class='li-add']").text("-")
		}
		else if($(this).attr("index")==1){
			$(this).attr("index","0");
			$(this).find("p[class='li-add']").text("+")
		}
		else if($(this).attr("index")==2){
			
			$(this).attr("index","0");
			$(this).find("p[class='li-add']").text("+")
		};

		
	});

	$("#left-car-b").click(function(){
		// $("#left-car").hide()
		for (var i = 0; i < $("#left-car li").length; i++) {
				if ($("#left-car ul").find("li").eq(i).attr("index")==1) {
					var x1=$("#left-car ul").find("li").eq(i).find("p[class!='li-add']").text()
				}
				else if ($("#left-car ul").find("li").eq(i).attr("index")==2) {
					var x2=$("#left-car ul").find("li").eq(i).find("p[class!='li-add']").text()
				};
			};
	});
	
}