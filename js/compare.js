
window.onload=function(){

	$(".sub").click(function(){
		$("#add").show();
	});

	$("#add li").click(function(){
		var x=1;
		for (var i = 0; i < $("#add li").length; i++) {
			if ($("#add ul").find("li").eq(i).attr("index")!=0) {
				x=x+1
			};
			
		};
		if (x==1) {
			$(this).css({"background":"#bcbaba"});
			$(this).attr("index","1");
		}
		else if(x==2){
			$(this).css({"background":"#bcbaba"});
			$(this).attr("index","2");
		}
		else if(x==3){
			for (var i = 0; i < $("#add li").length; i++) {
				if ($("#add ul").find("li").eq(i).attr("index")==1) {
					$("#add ul").find("li").eq(i).attr("index","0");
					$("#add ul").find("li").eq(i).css({"background":"#c8c8d6"})
				}
				else if ($("#add ul").find("li").eq(i).attr("index")==2) {
					$("#add ul").find("li").eq(i).attr("index","1");
				};
			};
			$(this).css({"background":"#bcbaba"});
			$(this).attr("index","2");
		};

		
	});

	$("#add-b").click(function(){
		$("#add").hide()
	});
	
}