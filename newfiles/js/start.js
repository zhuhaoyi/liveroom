var StartHtml = function(){
	// 聊天列表
	this.chatcontainer = null;
	// 历史消息
	this.hisMessage = null;
	// 本人消息
	this.memberInfo = null;
	// 服务器初始化数据(0：未初始化完毕，1：初始化完毕)
	this.dataStatus = 0;
	// 页面加载状态（0未完成，1完成）
	this.pageStatus = 0;
	// 服务控制
	this.customHander = null;

	// 聊天控件
	this.initChatcontainer = function(c){
		this.chatcontainer = c;
		this.loadMsglist();
	}
	// 历史消息
	this.initHisMessage = function(c){
		this.hisMessage = c;
		this.loadMsglist();
	}
	
	// 加载聊天列表
	this.loadMsglist = function(){
		if(this.chatcontainer != null && this.hisMessage!=null){
			for (var i = 0; i < this.hisMessage.length ; i++) {
				showHisMsg(this.hisMessage[i]);
			}
		}
	}
	
	// 从服务器加载数据完毕
	this.initDataStatus = function(dataStatus){
		this.dataStatus = dataStatus;
		this.loadLiveOperation();
		this.LoginControlOperator();
		this.loadTopHtml();
		this.showTBDiv();//陈顺
	}
	
	// 初始化用户信息
	this.initMemberInfo = function(data){
		this.memberInfo = data;
	}
	
	// 页面加载状态
	this.initPageStatus = function(a){
		this.pageStatus = a;
		this.customOperation();
		this.loadLiveOperation();
		this.LoginControlOperator();
		this.loadTopHtml();
	}
	
	this.initCustomHander = function(a){
		this.customHander = a;
		this.customOperation();
	}
	
	// 客服消息操作
	this.customOperation = function(){
		if(this.customHander !=null && this.pageStatus !=0 && this.dataStatus != 0){
			customOperation(this.customHander);
		}
	}
	
	//加载直播
	this.loadLiveOperation = function(){
        if(this.pageStatus !=0 && this.dataStatus != 0){
        	loadLive();
		}
	}
	
	//登陆控制
	this.LoginControlOperator = function(){
		 if(this.pageStatus !=0 && this.dataStatus != 0){
			 LoginControlReal();
		 }
	}

	this.loadTopHtml = function(){
		if(this.dataStatus !=0 && this.pageStatus !=0){
			if(loginStatus == '1'){
				$("#logoutDiv").show();
				$("#loginDiv").hide();
			}else{
				$("#logoutDiv").hide();
				$("#loginDiv").show();
			}
		}
		$("#lockNotice").html(lockNotic);
		if(loginStatus == 1){
			$("#spt2").show();
			$("#spt1").hide();
			$("#suoping_login").hide();
		}else{
			$("#spt2").hide();
			$("#spt1").show();
			$("#suoping_login").show();
		}
	}
	
	
	    this.showTBDiv=function(){
		if(this.dataStatus !=0 && this.pageStatus !=0 && live_lock==2 ){
			 if(isWeiXin()){
					strstop='weixin_tanchuang';
				}else{
					strstop='browser_tanchuang';
				}
			aniButtonDiv(strstop);
		}	
	}
	
}