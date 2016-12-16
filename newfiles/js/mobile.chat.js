//var ws = null;
var editor = null;
var editorPrv = "";// 私聊控件
var editorSayTo = ""; // 对他说 富文本框
var dialogShowed = false;// 是否打开聊天框
var chatisok = true; // 游客发言控制
var chatTimeSpan = 15; // 游客发言间隔
var memberInfo = null;
var endCur = new Date().getTime();
var pageNo = 1;
var chatTimeInterval = null;
var initMsg = 0;
var webSocket = null;
var errorConnect = 0;
var hei = "100%";
//检测网络状态（防止客户发送消息发送不到服务器） 1：可发送  0 不可发送
var networkStatus = 1 ;
//消息发送状态  0：无消息发送 1：消息发送中   用于检测服务器是否收到消息
var messageSendStatus = 0 ;
//检测消息状态定时
var networkTimeOut = null;
var startHtml = new StartHtml();
moment.lang("zh_CN");
// 链接websocket
var connectHandler = function() {
	if (initMsg == 0) {
		webSocket.emit('pullMessage', {
			'params' : [ endCur - 1000 * 60 * 60 * 5, endCur, pageNo, 10 ]
		});
		initMsg = 1;
	}
}
// 断开链接
var disconnectHandler = function() {
}
var reconnectHandler = function() {
	errorConnect = 0;
}

var reconnectingHandler = function() {
	errorConnect++;
}
var memberInfoHandler = function(member) {
	memberInfo = member;
	startHtml.initMemberInfo(memberInfo);
}

/**
 * 收到消息的处理
 */
var messageHandler = function(data) {
	var toSid = data.toSid;
	// 群发消息
	if (toSid == 'ALL') {
		// 如果消息存在则说明是自己发送的消息
		if (visiterName == data.fromMember.userNick) {
			return;
		}
		if (startHtml.chatcontainer != null && startHtml.hisMessage != null) {
			showMsg(data);
		}
	} else {
	}
}

/**
 * 处理接收到的事件
 */
var eventHandler = function(data) {
	if (data.eventType == 'singEvent') {

	} else if (data.eventType == 'roomEvent') {

	} else if (data.eventType == 'publicEvent') {

	}
}

var backHandler = function(data) {
	$("#" + data.msgid).remove();
}

var customHandler = function(data) {
	var m = $.parseJSON(data.message);
	startHtml.initCustomHander(m);
}

function customOperation(m){
	if (m.type == 'unLock') {
		$('#suoping_tanchuang').hide();
		play("liveDiv","100%",$("#liveDiv").height(),uri);
	} else if (m.type == 'lock') {
		if (m.status == 1) {
			// 弹出会员登录或升级提示框
			if (loginStatus ==0 ||grade == 0) {
				show('suoping_tanchuang');
				var liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'
						+ m.imgpath
						+ '" onclick="show(\'suoping_tanchuang\')"/>';
				$("#liveDiv").children().remove();
				$("#liveDiv").html(liveHtml);
			}
		} else {
			var liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'
				+ m.imgpath
				+ '" onclick="show(\'suoping_zs\')"/>';
				$("#lockNotice").html(m.notice);
		        $("#liveDiv").children().remove();
		        $("#liveDiv").html(liveHtml);
		        //陈顺
		        if(isWeiXin()){
					strstop='weixin_tanchuang';
				}else{
					strstop='browser_tanchuang';
				}
				aniButtonDiv(strstop);
		}
	} else if (m.type == 'minusNum') {
		$("#minus_people").html(m.curNum);
	} else if (m.type == 'flushPage') {
		setTimeout(function() {
			location.reload();
		}, 500);
	}
}

var historyMessageHandler = function(data) {
	startHtml.initHisMessage(data);
}
//服务连接
webSocket = io.connect(url,{
	reconnection : true,
	reconnectionDelay : 500,
	reconnectionAttempts : 2,
	reconnectionDelayMax : 5000,
	timeout : 15000
});
webSocket.on('connect', connectHandler);
webSocket.on('disconnect', disconnectHandler);
webSocket.on('memberInfo', memberInfoHandler);
webSocket.on('historyMessage', historyMessageHandler);
webSocket.on('message', messageHandler);
webSocket.on('event', eventHandler);
webSocket.on('back', backHandler);
webSocket.on('customMsg', customHandler);
//检测断网重连
webSocket.on('reconnecting',reconnectingHandler);
//检测断网重连
webSocket.on('reconnect',reconnectHandler);

function sendMessage() {
	if(startHtml.memberInfo == null){
		alert("数据正在加载...");
		return;
	}
	var message = $('#contentMsg').val();
	if(networkStatus == 0){
		show('network');
		return ;
	}
	if (grade >= 10) {
		var arrString = message.split('[^^!]');
		if (arrString.length == 3) {
			message = '<font style="font-size:1.4rem;color:red"><p>'
					+ arrString[0] + "</p></font>" + '[^^!]' + arrString[1]
					+ '[^^!]' + arrString[2];
		} else {
			message = '<font style="font-size:14px;color:red"><p>' + message
					+ "</p></font>"
		}
	} else {
		// 非内部帐号限制字数
		if (message.length > 200) {
			alert("超出最大字数限制！");
			return false;
		}
	}
	if ((message == null || message.replace(/(^\s*)|(\s*$)/g, "") == "")
			&& iconUrl == undefined) {
		alert('发言不能为空', 'error');
		return;
	}
	var sendTime = getCookie("sendDate");
	if (freeToke == 0) {
		if (sendButtonFreeze(sendTime) == 1) {
			return

		}
	}
	var toSid = $('#toSid').val();
	if ("ALL" != toSid) {
		var toNick = $('#toNick').val();
		var toUid = $('#toUid').val();
	}
	var jsonObject = {
		message : message,
		messageType : 'MESSAGE',
		toSid : toSid,
		toNick : toNick,
		toUid : toUid
	};
	messageSendStatus=1;
	webSocket.emit('message', jsonObject, function(data) {
		clearTimeout(networkTimeOut);
		//接收到服务器反馈数据  将发送状态改成无消息发送
		messageSendStatus=0;
    });
	var msgid = new Date().getTime();
	jsonObject.msgid = msgid;
	var fromMember = {};
	fromMember.userNick = visiterName;
	fromMember.userLevel = grade;
	jsonObject.fromMember = fromMember;
	jsonObject.message = message;
	jsonObject.msgid = msgid;
	$('#toSid').val("ALL");
	$('#toNick').val("");
	$('#toUid').val("");
	$('#Chat_Send_Msg').val("");
	$('#tips').html("");
	$('#contentMsg').val("");
	setCookie("sendDate", new Date().getTime());
	showMsg(jsonObject);
	clearTimeout(networkTimeOut);
	networkTimeOut = setTimeout(function(){
		if(messageSendStatus==1){
			networkStatus = 0;
		}
	}, 5000);
}

function setTo(data) {
	var member = JsonCodec.decodeJson(data);
	// $('#toSid').val(member.sessionID);
	// $('#toNick').val(member.userNick);
	// $('#toUid').val(member.userId);
}

// 显示消息到聊天室
function showMsg(data) {
	var msg = new MsgClass();
	msg.create(data);
	if (msg.isICanSee()) {
		sb.addItem(msg.toMsgItem());
	}
}

function showHisMsg(data) {
	var msg = new MsgClass();
	msg.create(data);
	if (msg.isICanSee()) {
		sb.firstLoad(msg.toMsgItem());
	}
}

/* 游客发言时间间隔控制 */
function sendButtonFreeze(tokeDate) {
	if (chatTimeInterval != null) {
		clearInterval(chatTimeInterval);
	}
	if (typeof (tokeDate) != "underfined" && tokeDate != null) {
		var nowDate = new Date().getTime();
		if (new Number(tokeDate) + 15 * 1000 > nowDate) {
			chatTimeSpan = (((new Number(tokeDate) + 15 * 1000) - nowDate) / 1000)
					.toFixed(0);
			$("#chatTimeSpan").html(chatTimeSpan);
			$("#control_div").show();
			chatTimeInterval = setInterval(function() {
				chatTimeSpan--;
				$("#chatTimeSpan").html(chatTimeSpan);
				if (chatTimeSpan <= 0) {
					clearInterval(chatTimeInterval);
					$("#control_div").hide();
				}
			}, 1000);
			return 1;
		} else {
			chatTimeSpan = 15;
			return 0;
		}
	}
	return 0;
}
