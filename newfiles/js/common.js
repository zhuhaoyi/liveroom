

function strReplace(str,len,o) {
	if (str.length > len) {
		str = str.substr(0,len) + o;
	}
	return str;
}

/*登录*/
function loginSubmit(usernameTag,passwordTag) {
	var mobile = $("#"+usernameTag).val();
	var password = $("#"+passwordTag).val();
	var params = {"mobile":mobile,"password":password};
	var re = /^1\d{10}$/;
	if (!re.test(mobile)){
		alert("请输入正确的手机号!");
		return false;
	}
				
	$.ajax({
	    url:"/login/loginSubmit.htm",
	    data:params,
	    success: function(data) {
	    	if(data.success){
	    		window.location="/";
	    	}else{
	    		alert("请输入正确的账号密码!");
	    	}
	    },
	    error: function(a,b,c){
	    	window.location="/";
	    }
	});
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
}

function showDiscuss(id){
	$('#commont_id').val(id);
	show('SonContent1');
}

function show(diveName){
	$('#'+diveName).show();
}

function hide(diveName){
	$('#'+diveName).hide();
}

function anmShow(diveName) {
	$("#" + diveName).show();
	$("#" + diveName).animate({
		top : "46%"
	}, 400);

}

//首页弹窗倒计时
function show_time(timename)
{

	var time_now_server,time_now_client,time_end,time_server_client,timerID;

	time_end=new Date(index_end_time.replace("-", "/").replace("-", "/"));//结束的时间
	time_end=time_end.getTime();
	 
	time_now_server=new Date();//开始的时间
	time_now_server=time_now_server.getTime();
	 
	time_now_client=new Date();
	time_now_client=time_now_client.getTime();
	 
	time_server_client=time_now_server-time_now_client;
	
	var timer = document.getElementById(timename);
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
		  setTimeout("show_time('"+timename+"')",1000);
	 }
	 else
	 {
		  timer.innerHTML =timer.innerHTML;
		  clearTimeout(timerID)
	 }
}

function clickMenuLT(){
	var now = new Date().getHours()*60+new Date().getMinutes();
	$.ajax({
	    url:"/live/getCourse.htm",
	    success: function(data) {
	    	$("#mCourse").html("");
	    	var li ='';
	    	$.each(data,function(k,v){
	    		var startTime =v.start_time.split(':');
	    		var start = parseInt(startTime[0])*60+parseInt(startTime[1]);
	    		var endTime =v.end_time.split(':');
	    		var end = parseInt(endTime[0])*60+parseInt(endTime[1]);
	    		//显示日期
	    		if(k== 1){
	    			var month = v.start_day.substring(5,7);
	    			var day = v.start_day.substring(8,10);
	    			$("#div_title").html(month+"月"+day+"日"+"课程安排");
	    		}
	    		//今日显示的课程
	    		if(v.is_display){
	    			if(start<=now && end >now){
    					if(v.is_mark){
    	    				li  = '<li><div class="clearfix">'+
    	    				  '<div class="kcb_kc_fl fl clearfix">'+
    	    				  '<div class="kcb_tecer col_y">'+v.teacher+'</div>'+
    	    				  '<div class="kcb_wd fr col_y">'+v.title+'</div></div>'+
    	    				  '<div class="kcb_kc_fr fl"> | 时间：<span class="col_y">正在直播中</span>'+
    	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix">'+
  	    				  '<div class="kcb_kc_fl fl clearfix">'+
  	    				  '<div class="kcb_tecer">'+v.teacher+'</div>'+
  	    				  '<div class="kcb_wd fr">'+v.title+'</div></div>'+
  	    				  '<div class="kcb_kc_fr fl"> | 时间：<span class="col_y">正在直播中</span>'+
  	    				  '</div></div></li>';
    	    			}
    				}else{
    					if(v.is_mark){
    						li  = '<li><div class="clearfix">'+
  	    				  '<div class="kcb_kc_fl fl clearfix">'+
  	    				  '<div class="kcb_tecer col_y">'+v.teacher+'</div>'+
  	    				  '<div class="kcb_wd fr col_y">'+v.title+'</div></div>'+
  	    				  '<div class="kcb_kc_fr fl"> | 时间：<span class="col_y">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
  	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix">'+
    	    				  '<div class="kcb_kc_fl fl clearfix">'+
    	    				  '<div class="kcb_tecer">'+v.teacher+'</div>'+
    	    				  '<div class="kcb_wd fr">'+v.title+'</div></div>'+
    	    				  '<div class="kcb_kc_fr fl"> | 时间：<span class="col_y">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
    	    				  '</div></div></li>';
    	    			}
    				}
                             $("#mCourse").append(li);
	    		}
	    		//今日不显示的课程
	    	
	    	});
	    },
	    error: function(a,b,c){
	    }
	});
	aniLeftDiv('menu_lt_box');
}
/*
function showJiGuMobile(){
	$("#jinguchi_ul").html("");
	$("#jinguchi_div").html("");
	$("#risk_content").html("");
	var li ='';
	var li1 ='';
	$.ajax({
		url : "/stockPool.htm",
		success : function(data) {
			//有股票推荐时
			if(data.type == "pool"){
				if(data.isHy){
					$("#jgcKf").hide();
				}
				$.each(data.data,function(k,v){
					if(k==0){
						li = '<li class="jinguchi_nav_show" id="jinguchiqh_'+ k+ '" onclick="changeOver('+ k+ ')">'
						+ v.stock_code+ '</li>';
						li1 = '<div class="jinguchi_li" id="jinguchili_'+ k+ '">'+ ' <ul class="clearfix">'
						+ '<li style="width:46%"><p>股票名称(代码)</p>'+ v.stock_name+'('+v.stock_code+')</li>'
						+ ' <li style="width:27%"><p>预期收益</p><span class="colred">'+ v.prospective_earnings+ '</span></li>'
						+ '<li style="width:27%"><p>推荐时间</p>'+ v.recommon_date.substring(5,16)+ '</li>'
						+ '</ul>'
						+ '<div class="jinguchi_ly">'
						+ ' 推荐理由：'+ v.recommon_reason
						+ '</div>'
						+ '</div>  ';
					}else{
						li = '<li class="" id="jinguchiqh_'+ k+ '" onclick="changeOver('+ k+ ')">'
						+ v.stock_code+ '</li>';
						li1 = '<div class="jinguchi_li hidden" id="jinguchili_'+ k+ '">'+ ' <ul class="clearfix">'
						+ '<li style="width:46%"><p>股票名称(代码)</p>'+ v.stock_name+'('+v.stock_code+')</li>'
						+ ' <li style="width:27%"><p>预期收益</p><span class="colred">'+ v.prospective_earnings+ '</span></li>'
						+ '<li style="width:27%"><p>推荐时间</p>'+ v.recommon_date.substring(5,16)+ '</li>'
						+ '</ul>'
						+ '<div class="jinguchi_ly">'
						+ ' 推荐理由：'+ v.recommon_reason
						+ '</div>'
						+ '</div>  ';
					}
					$("#jinguchi_ul").append(li);
					$("#jinguchi_div").append(li1);
				});
				aniLeftDiv('jingu_div');
			}else if(data.type == "risk"){
				if(data.data!=""){
					var content ="";
					if(data.isHy){
						$("#riskKf").hide();
					}
					$.each(data.data,function(k,v){
						content =v.risk_content;
					});
					$("#risk_content").html(content);
					aniLeftDiv('jinguchi_risk');
				}else{
					aniLeftDiv('nojingu_div');
				}
			}
		},
		error: function(a,b,c){
			aniLeftDiv('nojingu_div');
	    }
    });
} */
function cloose(div){
      $("#"+div).animate({left:'100%'},400);
      setTimeout("hide('"+div+"')",400);
      
}
function cloose1(div) {
	$("#" + div).animate({
		top : '100%'
	}, 400);
	setTimeout("hide('" + div + "')", 400);
}
function hide(div){
      $("#"+div).hide();
}

function isOver(maxlen){
    var len = $("#contentMsg").val().length;
    if(maxlen>=len){
        $("#tips").html("还可以输入"+(maxlen-len)+"字");
    }
}


//金股池切换
function changeOver(index) {
	$("#jinguchi_ul li").eq(index).addClass('jinguchi_nav_show').siblings().removeClass("jinguchi_nav_show");  //.siblings()返回被选元素的所有同胞元素
	$(".jinguchi_li").eq(index).show().siblings().hide();
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

//登陆控制
function operationControl(loginStatus,controlType,controlLong){
	var status =getCookie("loginStatus");
	if(status ==1){
		loginStatus =1;
		show("zhuce_tanchuang");
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
			   hide("zhuce_tanchuang");
                           $("#liveDiv").remove();
		   }else{
	          setTimeout(function(){
	        	  location.reload();
	        },0-syLong);
		   }
		}
	}
}

//Tab切换   s:起始位置    i选中位置  a 最大位置
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

/**
 * 左边侧滑
 */
function aniLeftDiv(divName){
	 $("#"+divName).show();
     $("#"+divName).animate({left:'0'},400);
}

/**
 * 底部滑出
 */
function aniButtonDiv(divName){
	$("#"+divName).show();
	if(source == 'app'){
		$("#"+divName).animate({top : 0}, 400);
	}else{
		$("#"+divName).animate({top : hei}, 400);
	}
}

function initKefu(divName,qqNum){
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// 随机获得组数下标
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		if(divName == "zhuli_qq"){
			 $("#"+divName).append('<li><a href="javascript:void(0);" onclick="chatQQ('+salesmanQq[qqIndex]+')"><span>'+ salesmanQq[qqIndex]+'</span><img src="'+mobile_side2_qq_img+'"  width="77" height="22"></a></li>');
				if(i==qqNum){
					break;
				}
		}else{
			 $("#"+divName).append('<li><a href="javascript:void(0);" onclick="chatQQ('+salesmanQq[qqIndex]+')"><img src="'+mobile_side2_qq_img+'"  width="77" height="22"></a></li>');
				if(i==qqNum){
					break;
				}
		}
        
	}
}

function chatQQ(qqNum){
	var ua = navigator.userAgent;
	if(source == 'app'){
		location.href="jingu://mqq?qq="+qqNum;
		return ;
	}
	if(ua.match(/MicroMessenger/i)){
		location.href="http://wpa.qq.com/msgrd?v=3&uin="+ qqNum+"&site=qq&menu=yes";
	}else  if(isMobile.apple.phone){
		window.open("mqq://im/chat?chat_type=wpa&uin="+qqNum+"&version=1&src_type=web");
	}else if(isMobile.android.phone){
		window.open("mqqwpa://im/chat?chat_type=wpa&uin="+qqNum+"&version=1&src_type=web");
	}
}

function isWeiXin(){ 
	var ua = window.navigator.userAgent.toLowerCase(); 
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
		return true; 
	}else{ 
		return false; 
	} 
}