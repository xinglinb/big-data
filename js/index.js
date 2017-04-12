
window.onload=function(){

	$("#li11").click(function(){
		sow("11");
		$("#rgt-p").text("动态监测 > 搜索类")
	});

	$("#li12").click(function(){
		sow("12");
		$("#rgt-p").text("动态监测 > 社交类")
	});

	$("#li13").click(function(){
		sow("13");
		$("#rgt-p").text("动态监测 > 论坛类")
	});

	$("#li21").click(function(){
		sow("21");
		$("#rgt-p").text("口碑分析 > 产品满意度")
	});

	$("#li22").click(function(){
		sow("22");
		$("#rgt-p").text("口碑分析 > 用户打分")
	});

	$("#li23").click(function(){
		sow("23");
		$("#rgt-p").text("口碑分析 > 口碑词云")
	});

	$("#li24").click(function(){
		sow("24");
		$("#rgt-p").text("口碑分析 > 领先口碑")
	});

	$("#li31").click(function(){
		sow("31");
		$("#rgt-p").text("竞品分析 > 竞品识别")
	});

	$("#li32").click(function(){
		sow("32");
		$("#rgt-p").text("竞品分析 > 竞品对比")
	});

	$("#nav-1").click(function(e){
		$("#nav-21").hide();
		$("#nav-11").toggle();
		e.stopPropagation();
	});

	$("#nav-2").click(function(e){
		$("#nav-11").hide();
		$("#nav-21").toggle();
		e.stopPropagation();
	});

	$(document).click(function() { 
		$("#nav-11").hide(); 
		$("#nav-21").hide();
	}); 
}

function sow(a){
	$("#form11").hide();
	$("#form12").hide();
	$("#form13").hide();
	$("#form21").hide();
	$("#form22").hide();
	$("#form23").hide();
	$("#form24").hide();
	$("#form31").hide();
	$("#form32").hide();
	$("#form"+a).show();
}