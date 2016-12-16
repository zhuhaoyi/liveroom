//-------------	窗体高度 -------------	
var windowHeight = $(window).height();
/**
 * 通用JS文件
 */
Cms = {};
/**
 * 浏览次数
 */
Cms.viewCount = function(base, contentId, viewId, commentId, downloadId, upId,
		downId) {
	viewId = viewId || "views";
	commentId = commentId || "comments";
	downloadId = downloadId || "downloads";
	upId = upId || "ups";
	downId = downId || "downs";
	$.getJSON(base + "/content_view.jspx", {
		contentId : contentId
	}, function(data) {
		if (data.length > 0) {
			$("#" + viewId).text(data[0]+500);
			$("#" + commentId).text(data[1]);
			$("#" + downloadId).text(data[2]);
			$("#" + upId).text(data[3]);
			$("#" + downId).text(data[4]);
		}
	});
}

/**
 * SEO统计代码
 * 
 * @param o
 * @param n
 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?5d0d873d6088a65ba7c9902fe26c4a57";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


// 导航切换
/*function jeeNav(o,n){
	 o.className="selected";
	 var t;
	 var id;
	 var s;
	 for(var i=1;i<=n;i++){
	   id ="nav"+i;
	   t = document.getElementById(id);
	   s = document.getElementById("sub"+i);
	   if(id != o.id){
	   	 t.className="hide";
	   	 s.style.display = "none";
	   }
	   else{
			s.style.display = "block";
	   }
	 }
}

function strReplace(str,len,o) {
	if (str.length > len) {
		str = str.substr(0,len) + o;
	}
	return str;
}*/


// 拼装股票代码
var stock_codes = "";
function getStockCode(codes){
	var returnCodes = "";
	var strs = codes.split(";");
	// 分析每条消息解读
	for(i=0; i<strs.length-1; i++){
		// 分析每个消息的多个相关个股
		var isMore = strs[i].split(",");
		if(isMore.length>0){
			var vi = "";
			for(var k = 0 ; k < isMore.length; k++){
				var code = isMore[k]+"";
				if(code.length>0){
					if(code.substring(0,2)=='60')// 沪
				    {
						code = "sh"+code;
				    }else{
				    	code = "sz"+code;
				    }
					returnCodes+=code+",";
				}
			}
		}
	}
	stock_codes = returnCodes.replace(/(^\s*)|(\s*$)/g,'');
}

var lastDate = "";	// 消息解读日期控制变量

// 刷新消息解读-消息解读列表页专用
function reflushInfoIndex1() {
	var lastId = $('.Message_box_r_box').eq(0).attr('id');
	lastId = lastId ==null ? "0" : lastId;
	// lastId :最大ID days:默认取几天内的数据
	var params = {"lastId":lastId,"days":"3"};
	var code_array = "";	// 消息股价数组
	var eachId_array = ""; 	// 用来定位每个消息的相关股票（避免重复相关股）
	var j = 0;	// 消息数量
	$.ajax({
	    url:"/liveWord/refreshInfoAjax.htm",
	    data:params,
	    success: function(data) {
	    	
	    	var li = '';
	    	// 拼装最新的股价信息(循环每条数据)
	    	$.each(data,function(k,v){
	    		// 组装股票代码 sh sz
	    		code_array = code_array + v.stock_codes +";";
	    		eachId_array = eachId_array + v.stock_codes +","+v.id+";";
		    	// 单个或者多个涨跌幅拼装
	    		var now = v.pub_time.substring(0,10);
	    		var stock_div_id = "";
		    	// 单个或者多个涨跌幅拼装 && 只有第一次才加载日期信息
	    		if(lastDate != now && lastId == 0){
	    			li = li + '<div class="Message_box_time dian_40">'+now+'</div><div id="addDiv">';
	    			lastDate = now;
	    		}
	    		if(v.stock_codes!=null){
	    			stock_div_id = v.stock_codes.replace(new RegExp(/(,)/g),"-")+v.id;
	    		}
    			li = li + '<div class="Message_box_li">'+
		    			 	'<div class="Message_box_r">'+
			    			 	'<div class="Message_box_r_box" id="'+v.id+'">'+
			    			 		// '<h5><a
									// href="/liveWord/liveDetail-'+v.id+'-s.htm">'+v.summary+'</a></h5>'+
			    			 		'<p><a href="/liveWord/liveDetailList-'+v.id+'-s.htm"><span class="Message_box_time">'+v.pub_time.substring(10,16)+'</span>'+strReplace(v.summary,145,"...")+'</a></p>'+
			    			 		'<div id="'+stock_div_id+'" class="clearfix"></div>' +
			    			 	'</div>'+
			    			 '</div>'+
			    		 '</div></div>';
	    	});
	    	if(lastId==0){
	    		// $("#message").prepend(li);
                        // 兼容IE8以下
	    		document.getElementById("message").innerHTML=li;
			}else{
				$('#addDiv').prepend(li);
			}
	    	getStockCode(code_array);
	    	$.ajax({
	    		cache : true,  
	    		url: 'http://hq.sinajs.cn/list='+stock_codes,  
	    		type : "GET",  
	    		dataType : "script",  
	    		success : function(msg){
	    			var codes = eachId_array.split(";");
	    			var id = "";
	    			for (i=0;i<codes.length-1 ;i++ )   
	    		    {   
	    				// 判断每个消息解读是单个还是多个相关个股 002609,300155,ID
	    				var isMore = codes[i].split(",");
	    				var vi = "";
	    				var setCode = "";
	    				for(var k = 0 ; k < isMore.length -1; k++){
		    				var code = "";
		    				if(!isMore[k]==""){
			    				// 循环
			    				if(isMore[k].substring(0,2)=='60')// 沪
			    			    {
			    					code = "sh"+isMore[k];
			    			    }else{
			    			    	code = "sz"+isMore[k];
			    			    }
			    				// 0：”大秦铁路”，股票名字；
			    				// 1：”27.55″，今日开盘价；
			    				// 2：”27.25″，昨日收盘价；
			    				// 3：”26.91″，当前价格；
			    				// 4：”27.55″，今日最高价；
			    				// 5：”26.20″，今日最低价；
			    				// 6：”26.91″，竞买价，即“买一”报价；
			    				// 7：”26.92″，竞卖价，即“卖一”报价；
			    				// 8：”22114263″，成交的股票数，由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百；
			    				// 9：”589824680″，成交金额，单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万；
			    				// 10：”4695″，“买一”申请4695股，即47手；
			    				// 11：”26.91″，“买一”报价；
			    				// 12：”57590″，“买二”
			    				// 13：”26.90″，“买二”
			    				// 14：”14700″，“买三”
			    				// 15：”26.89″，“买三”
			    				// 16：”14300″，“买四”
			    				// 17：”26.88″，“买四”
			    				// 18：”15100″，“买五”
			    				// 19：”26.87″，“买五”
			    				// 20：”3100″，“卖一”申报3100股，即31手；
			    				// 21：”26.92″，“卖一”报价
			    				// 获取行情数据
			    				if(!eval("hq_str_"+code) == ""){
			    					var item = eval("hq_str_"+code).split(",")
				    				var price= item[3];
			    					// 涨跌幅 = (现价-昨日收盘价 )/昨日收盘价 * 100
				    				var updown= (((price - item[2])/item[2])*100).toFixed(2);
				    				var name= item[0];
				    				var code = codes[i].substring(2);
				    				
				    				// 封装价格文本
				    				var priceText = updown>=0 ? "+"+updown+"%" : updown+"%";
				    				// 颜色样式判定
				    				var addClass=updown>=0?"red_gp_sy gp_sy":"green_gp_sy gp_sy";
				    				// 封装对象
				    				if(price==0){
				    					priceText = "----";// 停牌显示4个空字符
				    					addClass="gray_gp_sy gp_sy clearfix";
				    				}
				    				vi = vi + '<div class="'+addClass+'"><em>'+name+'</em><span>'+priceText+'</span></div>';
			    				};
			    				
			    				// 循环不结构不循环002609,300155,ID。ID，至循环前两位
			    				if(k==isMore.length-2){
			    					// 吧ID取出来作为唯一标识，避免出现相同推荐股问题
			    					setCode = setCode+isMore[k] + isMore[k+1];
			    				}else{
			    					setCode = setCode+isMore[k]+"-"
			    				}
		    				}
	    				}
	    				// 封装对象
	    				if(vi.length>0){
	    					$("#"+setCode).html(vi);
	    					// $("#"+setCode).addClass(addClass);
	    				}
	    		    }
	    		}
	    	})
	    	if(lastId == 0){
	    		// 先写完数据再加载滚动条
	    		$("#message").mCustomScrollbar();
	    	}else{
	    		// 每次加载新消息后滚动置顶
	    		$("#message").mCustomScrollbar("scrollTo","top");
	    	}
	    	
	    },
	    error: function(a,b,c){
	    }
	})
}

/* 登录 */
/*function loginSubmit(usernameTag,passwordTag) {
	var mobile = $("#"+usernameTag).val();
	var password = $("#"+passwordTag).val();
	var params = {"mobile":mobile,"password":password};
	var re=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
	if (!re.test(mobile)){
		alert("请输入正确的手机号!");
		return false;
	}
				
	$.ajax({
	    url:"/login/loginSubmit.htm",
	    data:params,
	    success: function(data) {
	    	if(data.success){
	    		window.location.reload();
	    	}else{
	    		alert("请输入正确的账号密码!");
	    	}
	    },
	    error: function(a,b,c){
	    	window.location.reload();
	    }
	});
}
*/
/**
 * 选股策略明细/消息解读明细页 获取股价信息 codes: 股票代码 多个以,分割
 * 
 * @author sunzuqiang 2015-12-9
 */
var stock_codes1 = ""; // 拼装股票代码
function getSplitStockCode(codes){
	var returnCodes = "";
	if(codes){
		var split_codes = codes.split(",");
		for (i=0;i<split_codes.length ;i++ )   
	    { 
			var code = split_codes[i];
			if(code.substr(0,2)=='60')// 沪
		    {
				code = "sh"+code;
		    }else{
		    	code = "sz"+code;
		    }
			returnCodes+=code+",";
	    };	
	}
	// 去除所有的空格,(避免后台多录入空格)
	stock_codes1 = returnCodes.replace(/(^\s*)|(\s*$)/g,'');
}

/**
 * 请求新浪股票接口拼装表格 tableClass: 表格的样式
 * 
 * @author sunzuqiang 2015-12-9
 */
function getStockPrice(tableClass) {
	if(stock_codes1){
		var url='http://hq.sinajs.cn/list='+stock_codes1;
		$.ajax({
			cache : true,  
			url: url ,  
			type : "GET",  
			dataType : "script",  
			success : function(msg){
				var codes = stock_codes1.split(",");
				for (i=0;i<codes.length-1 ;i++ )   
			    {   
					var item = eval("hq_str_"+codes[i]).split(",")
					var price= item[3];
					// alert(item+"---"+price+"---"+updown+"--"+name+"--"+code)
					// 涨跌幅 = (现价-昨日收盘价 )/昨日收盘价 * 100
    				var updown= (((price - item[2])/item[2])*100).toFixed(2);
    				var name= item[0];
    				var code = codes[i].substring(2);
    				
    				// 封装价格文本
    				var priceText = updown>=0 ? "+"+updown+"%" : updown+"%";
    				// 颜色样式判定
    				var addClass=updown>=0?"colred":"colgreen";
    				// 封装对象
    				if(price==0){
    					priceText = "----";// 停牌显示4个空字符
    					price = "----";
    					addClass = "";
    				}
    				
					var li = '<tr>'+
				   			 	'<td class="td_t">名称</td>'+
				   			 	'<td>'+name+'（'+code+'）</td>'+
					    		'<td class="td_t">最新价</td>'+
					    		'<td>'+price+'</td>'+
					    		'<td class="td_t">涨跌幅</td>'+
					    		'<td class="'+addClass+'">'+priceText+'</td>'+
					    	 '</tr>';
			   		$("."+tableClass).prepend(li);
			    }
				
				
			}
		});
	}
}
// 获取课程表
/*function showCourse(){
	var now = new Date().getHours()*60+new Date().getMinutes();
	$.ajax({
	    url:"/live/getCourse.htm",
	    success: function(data) {
	    	$("#courseMt").html("");
	    	var li ='';
	    	$.each(data,function(k,v){
	    		var startTime =v.start_time.split(':');
	    		var start = parseInt(startTime[0])*60+parseInt(startTime[1]);
	    		var endTime =v.end_time.split(':');
	    		var end = parseInt(endTime[0])*60+parseInt(endTime[1]);
                        // 显示日期
	    		if(k== 1){
	    			var month = v.start_day.substring(5,7);
	    			var day = v.start_day.substring(8,10);
	    			$("#div_title").html(month+"月"+day+"日"+"课程安排");
	    		}
	    		// 今日显示的课程
	    		if(v.is_display){
	    			if(start<=now && end >now){
    					if(v.is_mark){
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				  '<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">'+v.teacher+'</div>'+
    	    				  '<div class="fr jg_kcb_color">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">正在直播中</span>'+
    	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">'+v.teacher+'</div>'+
    	    				'<div class="fr">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">正在直播中</span>'+
    	    				  '</div></div></li>';
    	    			}
    				}else{
    					if(v.is_mark){
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">'+v.teacher+'</div>'+
    	    				'<div class="fr jg_kcb_color">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
    	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">'+v.teacher+'</div>'+
    	    				'<div class="fr">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
    	    				  '</div></div></li>';
    	    			}
    				}
	    		}
	    		// 今日不显示的课程
	    		else{
	    			li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl"></div>'+
    				'<div class="fr">'+v.title+'</div></div>'+
    				  '<div class="fl">'+
    				  '<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">该时间段无直播</span>'+
    				  '</div></div></li>';
	    		}
	    		$("#courseMt").append(li);
	    	});
	    },
	    error: function(a,b,c){
	    }
	});
	$("#pub_div").show();
}*/


/**
 * 空值转换
 * 
 * @param value
 * @returns {String}
 */
function isNullConvert(value)
{
	if(typeof(value) == "undefined" || value == null)
	{
		return "";
	}
	else
	{
		return value;
	}
}

// 加载付文斌编辑器
/*function initEdit() {
	var array = ['emoticons','xianhua','guzhang','ding','zan','bjjh'];
	editor = KindEditor.create('textarea[name="content"]', {
		resizeType : 0,
		items : array,
			afterCreate : function() {
				var self = this;
				self.html(tsy);
				KindEditor.ctrl(document, 13, function() {
					self.sync();
					sendMessage();
				});
				KindEditor.ctrl(self.edit.doc, 13, function() {
					self.sync();
					sendMessage();
				});
			},
			afterFocus : function(){
				var self = this;
				var v = self.text();
				if (v == '选择您专业，股市我们专心') {
					self.html("");
				}
			},
			afterBlur : function(){
				var self = this;
				var v = self.text();
				if (v == '') {
					self.html(tsy);
				}
			}
	});
}*/

// 加载视频直播插件
/*function loadLive() {
	var liveHtml = "";
	var isPlay = true;
	// 停播时间锁屏
    if (live_lock == 2) {
    	// 全部封锁
    	isPlay = false;
    }
    // 会员时间锁屏
    else if (live_lock == 1) {
    	// 非会员封锁
    	if (grade == 0) {
    		isPlay = false;
    	}
    } 
    // 显示视频或锁屏图
    var liveHtml = "";
    if (!isPlay) {
	   if (live_img != '') {
		   if(live_lock ==1){
			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_tanchuang\')"/>';
		   }
		   else if(live_lock ==2){
			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_ts\')"/>';
		   }
	   }
	   $("#liveRoom").children().remove();
	   $("#liveRoom").html(liveHtml);
	}else{
		play("liveRoom","100%",liveHeight,uri);
	}
}

function play(liveName,width,height,uri){
	InitPlayer(liveName,width,height,uri);
}*/

function refresh_fuc() {
	$
			.ajax({
				cache : true,
				url : "http://hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006,s_sz399300,int_hangseng,int_dji",
				type : "GET",
				dataType : "script",
				success : function() {
					// 上证指数
					var szzs = hq_str_s_sh000001.split(",");
					var szzs1 = parseFloat(szzs[1]).toFixed(2);
					var szzs2 = parseFloat(szzs[2]).toFixed(2);
					var szzs3 = parseFloat(szzs[3]).toFixed(2);
					$("#szzs div:eq(0)").html(szzs1);
					$("#szzs div").removeClass();
					if (szzs2 < 0) {
						$("#szzs div:eq(1) span").html(
								"" + szzs2 + "&nbsp;&nbsp;" + szzs3 + '%');
						$("#szzs div").addClass('colgreen');
					} else if (szzs2 > 0) {
						$("#szzs div:eq(1) span")
								.html(
										"+" + szzs2 + "&nbsp;&nbsp;+"
												+ szzs3 + '%');
						$("#szzs div").addClass('colred');
					} else {
						$("#szzs div:eq(1) span").html(
								"" + szzs2 + "&nbsp;&nbsp;" + szzs3 + '%');
						// $("#szzs div").addClass('colgreen');
					}
					// 深成指
					var szcz = hq_str_s_sz399001.split(",");
					var szcz1 = parseFloat(szcz[1]).toFixed(2);
					var szcz2 = parseFloat(szcz[2]).toFixed(2);
					var szcz3 = parseFloat(szcz[3]).toFixed(2);
					$("#szcz div:eq(0)").html(szcz1);
					$("#szcz div").removeClass();
					if (szcz2 < 0) {
						$("#szcz div:eq(1) span").html(
								"" + szcz2 + "&nbsp;&nbsp;" + szcz3 + '%');
						$("#szcz div").addClass('colgreen');
					} else if (szcz2 > 0) {
						$("#szcz div:eq(1) span")
								.html(
										"+" + szcz2 + "&nbsp;&nbsp;+"
												+ szcz3 + '%');
						$("#szcz div").addClass('colred');
					} else {
						$("#szcz div:eq(1) span").html(
								"" + szcz2 + "&nbsp;&nbsp;" + szcz3 + '%');
					}
					// 创业板
					var cyb = hq_str_s_sz399006.split(",");
					var cyb1 = parseFloat(cyb[1]).toFixed(2);
					var cyb2 = parseFloat(cyb[2]).toFixed(2);
					var cyb3 = parseFloat(cyb[3]).toFixed(2);
					$("#cybzs div:eq(0)").html(cyb1);
					$("#cybzs div").removeClass();
					if (cyb2 < 0) {
						$("#cybzs div:eq(1) span").html(
								"" + cyb2 + "&nbsp;&nbsp;" + cyb3 + '%');
						$("#cybzs div").addClass('colgreen');
					} else if (cyb2 > 0) {
						$("#cybzs div:eq(1) span").html(
								"+" + cyb2 + "&nbsp;&nbsp;+" + cyb3 + '%');
						$("#cybzs div").addClass('colred');
					} else {
						$("#cybzs div:eq(1) span").html(
								"" + cyb2 + "&nbsp;&nbsp;" + cyb3 + '%');
					}
					// 沪深300
					// 创业板
					var hs300 = hq_str_s_sz399300.split(",");
					var hs3001 = parseFloat(hs300[1]).toFixed(2);
					var hs3002 = parseFloat(hs300[2]).toFixed(2);
					var hs3003 = parseFloat(hs300[3]).toFixed(2);
					$("#hs300 div:eq(0)").html(hs3001);
					$("#hs300 div").removeClass();
					if (hs3002 < 0) {
						$("#hs300 div:eq(1) span")
								.html(
										"" + hs3002 + "&nbsp;&nbsp;"
												+ hs3003 + '%');
						$("#hs300 div").addClass('colgreen');
					} else if (hs3002 > 0) {
						$("#hs300 div:eq(1) span").html(
								"+" + hs3002 + "&nbsp;&nbsp;+" + hs3003
										+ '%');
						$("#hs300 div").addClass('colred');
					} else {
						$("#hs300 div:eq(1) span")
								.html(
										"" + hs3002 + "&nbsp;&nbsp;"
												+ hs3003 + '%');
					}
					// 恒生指数
					var hszs = hq_str_int_hangseng.split(",");
					var hszs1 = parseFloat(hszs[1]).toFixed(2);
					var hszs2 = parseFloat(hszs[2]).toFixed(2);
					var hszs3 = parseFloat(hszs[3]).toFixed(2);
					$("#hszs div:eq(0)").html(hszs1);
					$("#hszs div").removeClass();
					if (hszs2 < 0) {
						$("#hszs div:eq(1) span").html(
								"" + hszs2 + "&nbsp;&nbsp;" + hszs3 + '%');
						$("#hszs div").addClass('colgreen');
					} else if (hszs2 > 0) {
						$("#hszs div:eq(1) span")
								.html(
										"+" + hszs2 + "&nbsp;&nbsp;+"
												+ hszs3 + '%');
						$("#hszs div").addClass('colred');
					} else {
						$("#hszs div:eq(1) span").html(
								"" + hszs2 + "&nbsp;&nbsp;" + hszs3 + '%');
					}
					// 道琼斯指数
					var dqs = hq_str_int_dji.split(",");
					var dqs1 = parseFloat(dqs[1]).toFixed(2);
					var dqs2 = parseFloat(dqs[2]).toFixed(2);
					var dqs3 = parseFloat(dqs[3]).toFixed(2);
					$("#dqs div:eq(0)").html(dqs1);
					$("#dqs div").removeClass();
					if (dqs2 < 0) {
						$("#dqs div:eq(1) span").html(
								"" + dqs2 + "&nbsp;&nbsp;" + dqs3 + '%');
						$("#dqs div").addClass('colgreen');
					} else if (dqs2 > 0) {
						$("#dqs div:eq(1) span").html(
								"+" + dqs2 + "&nbsp;&nbsp;+" + dqs3 + '%');
						$("#dqs div").addClass('colred');
					} else {
						$("#dqs div:eq(1) span").html(
								"" + dqs2 + "&nbsp;&nbsp;" + dqs3 + '%');
					}
				}
			});
	setTimeout(function() {
		refresh_fuc();
	}, 1000);
}

// 初始化客服
/*function initKefu() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#nav_qqList").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_top_qq_img_in+'" ></a></li>');
		// 最多显示6个
		if(i==5){
			break;
		}
	}
	
}*/
// 初始化客服2
/*function initKefu1() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#indexQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_index_div_qq_img+'" ></a></li>');
		if(i==11){
			break;
		}
	}
}*/
// 初始化客服2
/*function initKefu2() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#tgqqs").append('<a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+notice_qq_img+'"></a>');
                $("#control_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
		if(i==5){
			break;
		}
	}
}*/
// 初始化客服3（弹窗）
/*function initKefu3() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#zhenduanQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_top_teacher_qq_img+'"></a></li>');
		$("#timeQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_div_lecture_qq_img+'"></a></li>');
        $("#timeQQ30").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_div_lecture_qq_img+'"></a></li>');
        // 最多显示12个
		if(i==11){
			break;
		}
	}
}
*/
// 初始化客服4（弹窗）
/*function initKefu4() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
        $("#dbzcqq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/zxzx.gif" width="115"></a></li>');
		// 最多显示6个
		if(i==5){
			break;
		}
	}
}*/

function initKefuSuoP() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
        $("#lockQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
        $("#huiyuanQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');
	$("#noJinGuChiQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');
        $("#controlQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_login_control_qq_img+'"></a></li>');
        $("#networkQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
// 最多显示12个
		if(i==11){
			break;
		}
	}
}

// 初始化客服3（散户专题）
/*function initKefu5() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#sanhu_jijie").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default/images/qq_ico.gif" ></a></li>');
		// 最多显示6个
		if(i==11){
			break;
		}
	}
}*/

// 初始化客服6
/*function initKefu6() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#jinguchi_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
		$("#jinguchi_qq1").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');       
		$("#risk_qq1").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');		
		$("#risk_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');				
		if(i==7){
			break;
		}
	}
}*/

// 初始化控件事件
/*function initFunction() {
	
	// 为页头的客服和数据中心添加事件
	  $("#nav_service").hover(function(){
		    $("#nav_qqList").toggle();
	  });
	  
		$("#nav_qqList").mouseout(function(){  
		  $("#nav_qqList").hide();  
	   }).mouseover(function(){
	   	  $("#nav_qqList").show();  
	   });

}*/

/**
 * 新的提示方法
 */
/*function jAlert(o,t) {
	var d = $("#ts_div");
	d.find("h3").html(t);// 标题
	d.find(".tan_padding").find("div").html(o);// 内容
	d.show();
}

function checkTime() {
	var ar = ['8:30','21:00'];
    var d = new Date();
    if(d.getDay() == 0 || d.getDay() == 6) {
    	return true;
    }
    var current = parseInt(d.getHours()) * 60 + parseInt(d.getMinutes());
    var ar_begin = ar[0].split(':');
    var ar_end = ar[1].split(':');
    var b = parseInt(ar_begin[0]) * 60 + parseInt(ar_begin[1]);
    var e = parseInt(ar_end[0]) * 60 + parseInt(ar_end[1]);
    if (current >= b && current <= e) 
	{
    	return false;
	}else{
		return true;
	} 
}*/

/*
 * 获取大盘涨跌 1 好 -1 坏
 */
function getGrail() {
	$.ajax({
		cache : true,
		url : "http://hq.sinajs.cn/list=s_sh000001",
		type : "GET",
		async: false,
		dataType : "script",
		success : function() {
			// 上证指数
			var szzs = hq_str_s_sh000001.split(",");
			var szzs3 = parseFloat(szzs[3]).toFixed(2);
			if (szzs3 > -3) {
				// 行情好
				$("#menu_q1").attr("src","/r/cms/www/default3/images/qq_lqng.gif");
				$(".ke-icon-jjzg").addClass("ke-icon-lqng").removeClass("ke-icon-jjzg");
			} else {
				// 行情差
				$("#menu_q1").attr("src","/r/cms/www/default3/images/qq_jjzg.gif");
			}
		}
	});
}

/**
 * 单独点击QQ
 */
/*function clientSimpleQQ() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	// 随机获得组数下标
	var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
	var url = 'http://wpa.qq.com/msgrd?v=3&uin='+salesmanQq[qqIndex]+'&site=qq&menu=yes';
	// document.location.target = '_blank';
	// document.location.href = url;
	window.open(url,"_blank")
}

function setCookie(name,value,expires)
{
	if(expires!=null){
		var exp = new Date();
		exp.setTime(exp.getTime() + expires);
		document.cookie = name + "="+ escape (value)+";expires="+exp.toGMTString();
	}else{
		document.cookie = name + "="+ escape (value);
	}
}

function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function delCookie(name){
	var exp = new Date();exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}*/


// 发表评论
/*function publicDiscuss(userName,liveWord_id,table_name) {
	var discuss = $('#discuss').val();
	if(checkHtml(discuss)){
		alert("请输入合法的字符");
		$('#discuss').val("");
		return;
	}
	var params = {"discuss":discuss,"visiterName":userName,"source":'pc',"tactics_id":liveWord_id,"source_table":table_name};
	if(discuss.length <= 0){
		alert("请输入您的评论!");
		return false;
	}
	$.ajax({
	    url:"/tactics/publicDiscuss.htm",
	    data:params,
	    success: function(data) {
	    	// alert("发布评论成功,请等待审核!")
	    	$("#discuss").val("");
	    	var ht = '<div class="clearfix clxx_pl" id="disContent'+data.id+'">'+
	    				'<div class="fl clxx_pl_img"><img src="/r/cms/www/default3/images/dengji_'+data.commont_type+'.png" width="40" /></div>'+
	        			'<div class="fl clxx_pl_p">'+
	        			'<h4>'+data.commont_nick+'</h4>'+
	            		'<p>'+data.commont_content+'</p>'+
	            		'<p>'+data.create_time+'</p>'+
					      '</div>'+
					        '<div class="fr clxx_pl_z">'+
					        '<span id="discussCount_'+data.id+'">0</span> <a href="javascript:void(0)" onclick="tacticsDiscuss('+data.id+')"><s class="allIcon" id="allIcon_'+data.id+'"></s></a> <a href="javascript:void(0)" onclick="showDiscuss('+data.id+')">回复</a>'+
					        '</div>'+
					    '</div>';
		    $("#disArea").prepend(ht);
		  // 跳转到评论处
		    $("#content").mCustomScrollbar("scrollTo","#disContent"+data.id);
        
	    },
	    error: function(a,b,c){
	    }
	});
}*/

// 赞投资策略
/*function tacticsPraise(tactics_id) {
	var params = {"tactics_id":tactics_id};
	if(getCookie("#tacticsPraise_"+tactics_id)!="1"){
		$.ajax({
		    url:"/tactics/tacticsPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#tacticsPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("不能重复赞！");
		return false;
	}
	
}*/

// 赞消息解读
/*function liveWordPraise(liveWord_id) {
	var params = {"liveWord_id":liveWord_id};
	if(getCookie("#liveWordPraise_"+liveWord_id)!="1"){
		$.ajax({
		    url:"/liveWord/liveWordPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#liveWordPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("不能重复赞！");
		return false;
	}
	
}*/

// 赞投资参考
/*function msgInterPraise(msgInter_id,table) {
	var params = {"msgInter_id":msgInter_id,"table":table};
	if(getCookie("#msgInterPraise_"+table+msgInter_id)!="1"){
		$.ajax({
		    url:"/msgInter/msgInterPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#msgInterPraise_"+table+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("不能重复赞！");
		return false;
	}
	
}*/
// 赞股票百科
/*function gpbkPraise(id) {
	var params = {"id":id};
	if(getCookie("#gpbkPraise_"+id)!="1"){
		$.ajax({
		    url:"/live/gpbkPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#gpbkPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("不能重复赞！");
		return false;
	}
	
}*/

// 赞评论
/*function tacticsDiscuss(commont_id) {
	var params = {"commont_id":commont_id};
	var count = $("#discussCount_"+commont_id).html();
	if(getCookie("#discussCount_"+commont_id)!="1"){
		$.ajax({
		    url:"/tactics/tacticsDiscuss.htm",
		    data:params,
		    success: function(data) {
		    	// 标识重复赞
		    	setCookie("#discussCount_"+data.commont_id,"1");
		    	$("#discussCount_"+data.commont_id).html(Number(data.count));
		    	$("#allIcon_"+data.commont_id).attr("class","allIcon s_ok");
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("不能重复赞！");
		return false;
	}
}
// 检查是否含有html标签
function checkHtml(htmlStr) {  
    var  reg = /<[^>]+>/g;  
    return reg.test(htmlStr);  
} 

// 回复评论
function reviewDiscuss(tactics_id,table_name) {
	var commont = $("#review").val();
	if(checkHtml(commont)){
		alert("请输入合法的字符");
		$("#review").val("");
		return;
	}
	var userName = parent.visiterName;
	var commont_id = $("#commont_id").val();
	var params = {"commont_id":commont_id,"commont":commont,"visiterName":userName,"source":'pc',"tactics_id":tactics_id,"source_table":table_name};
	
	if(commont.length <= 0){
		alert("请输入您的回复!");
		return false;
	}
	$.ajax({
	    url:"/tactics/reviewDiscuss.htm",
	    data:params,
	    success: function(data) {
	    	// 回复评论框至空
	    	$("#review").val("");
	    	var ht = '<div class="clearfix clxx_pl" id="disContent'+data.id+'">'+
	    				'<div class="fl clxx_pl_img"><img src="/r/cms/www/default3/images/dengji_'+data.rev_type+'.png" width="40" /></div>'+
	        			'<div class="fl clxx_pl_p">'+
		        			'<h4 >'+data.rev_nick+'</h4>'+
		            		'<p>'+data.rev_commont+'</p>'+
		            		'<div class="clxx_pl_hf box_Fillet5 dian_40">回复：'+data.commont_nick+'&nbsp;'+data.create_time+'&nbsp;</p>'+data.commont_content+'&nbsp;</div>'+
		            		'<p>'+data.rev_time+'</p>'+
					    '</div>'+
				        '<div class="fr clxx_pl_z">'+
				        	'<span id="discussCount_'+data.rev_id+'">0</span> <a href="javascript:void(0)" onclick="tacticsDiscuss('+data.rev_id+')"><s class="allIcon" id="allIcon_'+data.rev_id+'"></s></a> <a href="javascript:void(0)"  onclick="showDiscuss('+data.rev_id+')">回复</a>'+
				        '</div>'+
					  '</div>';
		    $("#disArea").prepend(ht);
		    // 隐藏回复评论弹层
		    hide('huifu_tan');
		    // 跳转到评论处
		    $("#content").mCustomScrollbar("scrollTo","#disContent"+data.id);
		    
	    },
	    error: function(a,b,c){
	    	alert(c);
	    }
	});
}
function showDiscuss(id){
	$('#commont_id').val(id);
	show('huifu_tan');
}

function show(diveName){
	$('#'+diveName).show();
}

function hide(diveName){
	$('#'+diveName).hide();
}
// 关闭课程预告
function closeCourse(){
	$('.tan_div_public').hide();
}
// 搜索
function search(button){
	    var q = $("#"+button).val();
	    if(q==""||q==null||q=="输入您想搜索的词"){
			alert("搜索内容为空!");
			return;
		}
	    if(CheckStr(q)){
			alert("搜索内容非法!");
			return;
		}
		var entry = encodeURI(encodeURI(q));
		window.location.href="/baike/search.htm?entry="+entry;
	}
// 判断字符是否非法
	function CheckStr(val){  
		var str = "[~!@/'\"#$&^*]+";
		var reg = new RegExp(str);
		if(reg.test(val)) {
		    return true;
		} 
		return false;         
	}

function loginOut(){
	if(confirm('您确定要退出吗?')){
		$.ajax({
			url : "/login/logout.htm",
			success : function(data) {
				if (data == true) {
					window.location.href= window.location.href;
				}
			}
		});
	}
}
// 免责申明
function bqsm(t){
	var str = '<font color="#eeeeee">1.金股直播发布的资讯仅供参考，不代表金股直播立场。金股直播对文中的观点'+
	          '判断保持中立，对该信息内容的准确性、可靠性或内容的完整性不提供保证。'+
	          '投资者自行参考，据此操作风险自担。<br/>'+
	          '2.金股直播分析师发表的言论均代表其个人对于投资市场的观点，问股、互动等行为，'+
	          '仅代表个人观点，不构成任何投资意见，亦不代表金股直播的观点或意见，敬请广大的投资者理性对待，谨慎投资！</font>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
}

// 公告
function ppzs(t){
	var str = '<font color="#eeeeee">1.资质优势：湖南金证投资咨询顾问有限公司是中国证监会批准的全国第一批获得证券投资咨询业务牌照的专业投顾机构。<br/>'+
	'2.服务优势：曾先后为数百家地方政府、经济主管部门、企业集团、上市公司，提供投资理财等专业服务。<br/>'+
	'3.团队优势：拥有国内顶尖投顾团队—5A级首席投顾军团、SSS级热点挖掘团队。提供一对一咨询指导，助投资者实现超额收益。'+
	'</font>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
}

// 布局计划
function bjjh(t){
	var str="";
	if(start_num ==1){
		str += '<div style="top:23%;position:absolute;left:79%; font-size:36px; color:#f00;font-family:Tahoma, Arial" id="minus_people">'+minusNum+'</div>';
	}
	if(start_time ==1){
		str +='<div style="top:51%;position:absolute;left:58%; font-size:30px; color:#f00;font-family:Tahoma, Arial" id="timer2"></div>';
	}
	str +='<a href="javascript:void(0)" onclick="show(\'in_tanchuang\')"><img src="'+pc_banner_img+'" width="100%" height="100%"/></a>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
	show_time("timer2");
}


// 首页弹窗倒计时
function show_time(timeName)
{

	var time_now_server,time_now_client,time_end,time_server_client,timerID;

	time_end=new Date(index_end_time.replace("-", "/").replace("-", "/"));// 结束的时间
	time_end=time_end.getTime();
	 
	time_now_server=new Date();// 开始的时间
	time_now_server=time_now_server.getTime();
	 
	time_now_client=new Date();
	time_now_client=time_now_client.getTime();
	 
	time_server_client=time_now_server-time_now_client;
	
	var timer = document.getElementById(timeName);
	if(!timer){
 		return ;
	}
 	timer.innerHTML =time_server_client;
 
	 var time_now,time_distance,str_time;
	 var int_day,int_hour,int_minute,int_second;
	 var time_now=new Date();
	 time_now=time_now.getTime()+time_server_client;
	 time_distance=time_end-time_now;
	 if(time_distance>0){
		  int_day=Math.floor(time_distance/86400000)
		  time_distance-=int_day*86400000;
		  int_hour=Math.floor(time_distance/3600000)
		  time_distance-=int_hour*3600000;
		  int_minute=Math.floor(time_distance/60000)
		  time_distance-=int_minute*60000;
		  int_second=Math.floor(time_distance/1000)
		 
		  if(int_hour<10)
		   int_hour="0"+int_hour;
		  if(int_minute<10)
		   int_minute="0"+int_minute;
		  if(int_second<10)
		   int_second="0"+int_second;
		  str_time=int_day+"天"+int_hour+"时"+int_minute+"分"+int_second+"秒";
		  timer.innerHTML=str_time;
		  setTimeout("show_time('"+timeName+"')",1000);
	 }
	 else
	 {
		  timer.innerHTML =timer.innerHTML;
		  clearTimeout(timerID)
	 }
}

function isOver(maxlen){
	if(freeToke == 1){
		$("#Chat_Send_Msg").removeAttr("maxlength");
	}else{
		var len = $("#Chat_Send_Msg").val().length;
		if(maxlen>=len){
			$("#tips").html("还可以输入<strong class='colred'>"+(maxlen-len)+"</strong>字");
		}
	}
}*/

/*function showJinGu(){
	$(".jinguchi_ul_li").html("");
	$("#risktips").html("");
	$.ajax({
		url:"/stockPool.htm",
		success:function(data){
			// 有股票推荐时
			if(data.type == "pool"){
				if(data.isHy){
					$("#jgcKf").hide();
				}
				var li ='';
				$.each(data.data,function(k,v){
					li += '<div class="jinguchi_li"><ul class="clearfix">'+
					'<li style="width:46%">股票名称(代码)：'+v.stock_name+'('+v.stock_code+')</li>'+
					' <li style="width:27%">预期收益：<span class="colred">'+v.prospective_earnings+'</span></li>'+
					'<li style="width:27%">推荐时间：'+v.recommon_date.substring(5,16)+'</li>'+
					'</ul>'+
					' <div class="jinguchi_ly">'+
					'推荐理由：'+v.recommon_reason+
					' </div></div>';
				});	
				$(".jinguchi_ul_li").html(li);
				show('jingu_tanchuang');
				// 风险提示时
			}else if(data.type == "risk"){
				if(data.data!=""){
					var content ="";
					if(data.isHy){
						$("#riskKf").hide();
					}
					$.each(data.data,function(k,v){
						content =v.risk_content;
					});
					$("#risktips").html(content);
					show('risk_tip');
				}else{
					show('noJinGuChi');
				}
			}
		},
		error: function(a,b,c){
	    	show('noJinGuChi');
	    }
	});
}

function loginControl(type){
	var now = new Date();
	var todayLast =now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" 23:59:59";
	var time =parseInt(new Date(todayLast).getTime()) - parseInt(new Date().getTime());
	if(type=="1"){
		var loginCode = $("#loginCode").val();
		if(loginCode==null || loginCode.replace(" ","")==""){
			alert("请输入登录码！");
		}
		var params = {"type":"1","loginCode":loginCode};
		$.ajax({
		    url:"/user/loginControl.htm",
		    data:params,
		    success: function(data) {
		    	if(data.success){
		    		setCookie("loginStatus","1",time);
		    		location.reload();
		    	}else{
		    		$("#loginCode").val("");
		    		show('loginError');
		    	}
		    }
		})
	}else{
		var mobile = $("#username9").val();
		var password = $("#password9").val();
		var params = {"type":"2","userName":mobile,"password":password};
		var re=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
		if (!re.test(mobile)){
			alert("请输入正确的手机号!");
			return false;
		}
		$.ajax({
		    url:"/user/loginControl.htm",
		    data:params,
		    success: function(data) {
		    	if(data.success){
		    		window.location.reload();
		    	}else{
		    		alert("请输入正确的账号密码!");
		    	}
		    },
		    error: function(a,b,c){
		    	window.location.reload();
		    }
		});
	}
}

// 登陆控制
function operationControl(loginStatus,controlType,controlLong){
	var status =getCookie("loginStatus");
	if(status ==1){
		loginStatus =1;
		show("in_tanchuang");
	}
	if(loginStatus == '0' && controlType =='2'){
		var now = new Date();
		var todayLast =now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" 23:59:59";
		var time =parseInt(new Date(todayLast).getTime()) - parseInt(new Date().getTime());
		if(controlLong!=""){
		   var beforeTime = getCookie("loginControl");
		   if(typeof(beforeTime) == 'undefined' || beforeTime == null || beforeTime ==""){
			   beforeTime = new Date().getTime();
			   setCookie("loginControl",beforeTime,time);
		   }
		   var syLong = new Date().getTime() - Number(beforeTime) - Number(controlLong)*1000*60;
		   if(syLong >= 0){
			   show('login_control');
			   hide("in_tanchuang");
                           $("#liveRoom").remove();
		   }else{
	          setTimeout(function(){
	        	  location.reload();
	        },0-syLong);
		   }
		}
	}
}

// Tab切换 s:起始位置 i选中位置 a 最大位置
function setTab(s,i,a,menuc,contc){
	for(var n=s;n<=a;n++){
		if(i==n){
			$("#menu_"+n).addClass(menuc);
			$("#content_"+n).removeClass(contc);
		}else{
			$("#menu_"+n).removeClass(menuc);
			$("#content_"+n).addClass(contc);
		}
	}
}

// 回车时，默认是登陆
function on_return(id,event){
    if(event.keyCode == 13){
        if (document.all(id)!=null){
              document.all(id).click();
              }
        }
 }*/