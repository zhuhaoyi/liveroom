// 判断浏览器是否为微信内置浏览器
function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
// 初始化播放器
function InitPlayer(divId,width,height,uri) {
	$("#"+divId).html("");
	var vurl = "http://video.jingu58.com";
	var auth = "";
	$.ajax({
		url : '/ali/authPlay.htm',
		async : false,
		success : function(data){
			if(data.success == '1'){
				auth = data.auth;
			}
		}
	});
	var vsource = vurl + uri + ".flv?auth_key="+auth;
	var vautoplay = false;
	// 当客户端为iphone并且用微信浏览器或者 客户端为pc 时自动开始播放
	if ((isMobile.apple.phone && is_weixin)
			|| !(isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch)) {
		vautoplay = true;
	}
	// see https://github.com/kaimallea/isMobile
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		vsource = vurl + uri + ".m3u8?auth_key="+auth;
	}
	player = new prismplayer({
		id : divId, // 容器id
		source : vsource, // 视频url 支持互联网可直接访问的视频地址
		autoplay : vautoplay, // 自动播放
		width: width,        // 播放器宽度
		height: height,      // 播放器高度
		playsinline : "true",
		isLive:true
	});
}