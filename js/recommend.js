function recommend(permission){ 
	var commendHTML = document.getElementById('content');
	 if(!permission){	
	commendHTML.innerHTML="<div class='content_area' >\
	<ul class='tuijian' >\
	<li style='width:42%;padding-left:3%;'>股票名称(代码)：XXXX(XXXX)</li>\
	<li style='width:25%;'>预期收益：<span style='color:red;'>XXX</span></li>\
	<li style='width:30%;'>推荐时间：09-13 09:35</li>\
	</ul>\
	<div class='reason'>推荐理由：</div>\
    </div>\
	<div class='content_area' >\
	<ul class='tuijian' >\
	<li style='width:42%;padding-left:3%;'>股票名称(代码)：XXXX(XXXX)</li>\
	<li style='width:25%;'>预期收益：<span style='color:red;'>XXX</li>\
	<li style='width:30%;'>推荐时间：09-13 09:35</li>\
	</ul>\
	<div class='reason'>推荐理由：</div>"
    $(".jingu_tuijian").css("display","block");
	$(".tuijian_tanchuang").show();
	 }else{
		commendHTML.innerHTML="<div class='content_area' >\
	<ul class='tuijian' >\
	<li style='width:42%;padding-left:3%;'>股票名称(代码)：赛福天(603028)</li>\
	<li style='width:25%;'>预期收益：<span style='color:red;'>XXX</span></li>\
	<li style='width:30%;'>推荐时间：09-13 09:35</li>\
	</ul>\
	<div class='reason'>推荐理由：</div>\
    </div>\
	<div class='content_area' >\
	<ul class='tuijian' >\
	<li style='width:42%;padding-left:3%;'>股票名称(代码)：XXXX(XXXX)</li>\
	<li style='width:25%;'>预期收益：<span style='color:red;'>XXX</li>\
	<li style='width:30%;'>推荐时间：09-13 09:35</li>\
	</ul>\
	<div class='reason'>推荐理由：</div>"
    $(".jingu_tuijian").css("display","block");
	$(".tuijian_tanchuang").show();
	 }
}	 
	
