function resize() {
    var a = $(window).width();
    //zb_hdzq_txt发送框、zd_nav导航
    //固定视频高度
    $("#liveDiv").height(a * 0.56);
    //聊天高度 = 窗体高度 - 视频高度-导航高度-发送框高度
    $("#Chat_ListInfo").height($(window).height() -$("#liveDiv").height() - $(".zd_nav").height());
    $("#Chat_ListInfo").css('overflow-y','auto');
    //发送框高度
    if(source == 'app'){
    	$("#menu_lt_box").css("top", 0);
    }else{
    	$("#menu_lt_box").css("top", $("#liveDiv").height());
    }
  //课程表高度 = 发送框 - 请输入内容高度-输入内容高度-确定取消高度
    $("#courseTable").height($("#menu_lt_box").height() -$("#chatTitle").height() - $("#chatInput").height()-$("#chatEmjoy").height()-120);
    $("#courseTable").css('overflow-y','auto');
    $("#menu_jj_box").css("top", $("#liveDiv").height());
    $("#menu_ls_box").css("top", $("#liveDiv").height());
    //金股池个股推荐滚动
    $("#jinguchi_scroll").height($(window).height()-$("#liveDiv").height()-$("#jinguchi_title").height());
    $("#jinguchi_scroll").css('overflow-y','auto');
    //风险提示滚动
    $("#risk_scroll").height($(window).height()-$("#liveDiv").height()-$("#risk_title").height());
    $("#risk_scroll").css('overflow-y','auto');
    //优先网络高度-滚动
    $("#youxianwangluo_div").height($(window).height()-$("#liveDiv").height());    
    //牛股布局高度
    $("#niugubuju_scroll").height($(window).height()-$("#liveDiv").height()-$("#niugubuju_title").height());
 	//第三个侧滑高度
    $("#ls_scroll").height($(window).height()-$("#liveDiv").height()-$("#ls_title").height());
    //登录高度
    $("#ce_login_div").height($(window).height()-$("#liveDiv").height());
    //金股池无推荐高度    
    $("#nojingu_div").height($(window).height()-$("#liveDiv").height());  
    //提问高度
    $("#ce_message_div").height($(window).height()-$("#liveDiv").height());  
    //老师助理高度
    $("#lszl_scroll").height($(window).height()-$("#liveDiv").height()-$("#lszl_title").height());
    $("#lszl_scroll").css('overflow-y','auto');   
    hei= $(window).width()*0.56/$(window).height()*100+'%'
    sb.init('Chat_ListInfo');
}
function loadLive() {
    // 来源是app的不显示视频
    if ("app" == source) {
    	return;
    }
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
    	} else {
    		isPlay = true;
    	}
    } 
    
    var liveHtml = "";
    // 显示视频
    if (!isPlay) {
 	   if (live_img != '') {
 		   if(live_lock ==1){
 			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_tanchuang\')"/>';
 		   }
 		   else if(live_lock ==2){
 			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_zs\')"/>';
 		   }
 	   }
 	   $("#liveDiv").children().remove();
 	   $("#liveDiv").html(liveHtml);
 	}else{
 		play("liveDiv","100%",$("#liveDiv").height(),uri);
 	}
}

function play(liveName,width,height,uri){
	InitPlayer(liveName,width,height,uri);
}
initUser();
function initUser(){
	$.ajax({
		url : '/getIndexInfo.htm',
		success : function(result){
			if(result.success == "1"){
				loginStatus = result.loginStatus;
				visiterName = result.userName;
				userName = result.userName;
				grade = result.grade;
				chatName = result.chatName;
				crossName = result.crossName;
				temstemp = result.temstemp;
				sign = result.sign;
				freeToke = result.freeToke;
				live_lock = result.lock.status;
				live_img = result.lock.imgpath;
				lockNotic = result.lock.notice;
				var isGuest = result.isGuest;
				startHtml.initDataStatus(1);
				webSocket.emit('login', {"room":chatName,"userName":crossName,"timestamp":temstemp,"sign":sign,"guest":isGuest});
			}
		}
	});
}

function LoginControlReal(){
	if (source == 'pc') {
		 if(loginStatus == '0' && controlType == '2' && controlLong=='0'){
				show("loginControl");
				hide("zhuce_tanchuang");
			}else{
				hide("loginControl");
				if (live_lock == 2) 
				hide("zhuce_tanchuang");	
			}
		operationControl(loginStatus,controlType,controlLong);	
	 }
}

!function(a) {
    a(window).load(function() {
        afterLoad();
        //活动倒计时
        show_time('timer');
    });
}(jQuery), $(function() {
    resize();
    startHtml.initPageStatus(1);
    startHtml.initChatcontainer(1);
});

function afterLoad(){
    //老师诊股
	initKefu('ls_qq',11);
    //布局计划QQ
    initKefu('buju_qq',10);
    //老师QQ
    initKefu('laoshi_qq',10);
    //老师助理QQ
    initKefu('zhuli_qq',9);
	// 金股池老师助理QQ
	initKefu('ls_qq_jinguchi',5);
	initKefu('ls_qq_jinguchi1',5);
	initKefu('ls_qq_jinguchi2',5);
	initKefu('ls_qq_risk1',5);
	initKefu('ls_qq_risk',5);
	initKefu('ls_qq_niugubuju',5);
	initKefu('controlQQ',5);
	//锁屏QQ
	initKefu('lockQQ1',5);
	initKefu('lockQQ2',5);
        //网络异常QQ
	initKefu('networkQQ',5);
}