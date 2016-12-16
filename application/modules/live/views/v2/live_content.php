

<script type="text/javascript">

$(document).ready(function (){

	var chattime;

	chattime = setInterval(chatflash, 3000);

})


function chatflash()

{

   /* iswap */
var userAgentInfo = navigator.userAgent;
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
var flag = false;
var v=0;
var iswap = 0;
for ( v = 0; v < Agents.length; v++)
{
if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
}
if(flag){
iswap = 1;
}

	$.ajax({url:'<?php echo site_url("module/live/chat/getitem") ?>'+'/'+ $("#masterid").val() +'/' + $("#lastchatid").val() + '?t=' + new Date().getTime()+'&iswap='+iswap,

		 type: "GET",

		ifModified:true,

		success: function(d){

			var _s = AnalyticEmotion(d);

			if (_s != ''){

				chatcontainer.push(_s);

				//手机滚动条到最底 edgeto 2016-08-13
				

				if(document.getElementById("Chat_ListInfo"))

				{

					document.getElementById("Chat_ListInfo").scrollTop=document.getElementById("Chat_ListInfo").scrollHeight;

				}

			}

		}

	});

}

/*

var _timeobj;

var _titleflashtime = 3000;

var _title = document.title;



function SetRemainTime(titletip){

	if (_titleflashtime > 0) { 

		_titleflashtime = _titleflashtime - 500; 

		var second = Math.floor(_titleflashtime);             // 计算秒     

		if (second % 200 == 0) { 

			document.title = '【'+titletip+'】' + _title;

		} 

		else { 

			document.title = _title ;

		}; 

	} else {

		window.clearInterval(_timeobj); 

		document.title = _title;

		_titleflashtime = 3000;

	}

}



function setTitleTip(s)

{

	window.clearInterval(_timeobj); 	

	SetRemainTime();

	_timeobj = window.setInterval(_tempTip(s), 1000);	

}



function _tempTip(_s){

   return function(){

		 SetRemainTime(_s);

	}

}


function DrawImage(ImgD,iwidth,iheight){

    //参数(图片,允许的宽度,允许的高度)

    var image=new Image();

    image.src=ImgD.src;

    if(image.width>0 && image.height>0){

    if(image.width/image.height>= iwidth/iheight){

        if(image.width>iwidth){  

        ImgD.width=iwidth;

        ImgD.height=(image.height*iwidth)/image.width;

        }else{

        ImgD.width=image.width;  

        ImgD.height=image.height;

        }

        ImgD.alt=image.width+"×"+image.height;

        }

    else{

        if(image.height>iheight){  

        ImgD.height=iheight;

        ImgD.width=(image.width*iheight)/image.height;        

        }else{

        ImgD.width=image.width;  

        ImgD.height=image.height;

        }

        ImgD.alt=image.width+"×"+image.height;

        }

    }

}



function preview_image(url)

{

	var image = url;

	$("#previewimage").html('<img src="'+image+'" />');

	$.layer({

		type : 1,

		title : false,

		fix : false,

		shadeClose: true,

		area : ['auto','auto'],

		page : {dom : '#previewimage'}

	});

}



function modic(contentid)

{

	$.jBox("iframe:<?php echo site_url('module/live/content/editContent')?>"+"/"+contentid+"/1/1", {title: "修改直播内容",iframeScrolling: 'no',height: 400,width: 650,buttons: { '关闭': true }});

}



function chataudit(chatid,status)

{

	$.get("<?php echo site_url('module/live/chat/chataudit')?>" + "/"+chatid+"/"+status,function(data){

		var d = eval('('+data+')');

		if (d.code == '1')

		{

			layer.msg(d.msg,2,1);

			$("#audit_"+d.chatid).remove();

			

		}

		else

		{

			layer.msg(d.msg, 1, 5);

		}

	});

}

*/

function retchat(d)

{

	if(d.code == '1'){
		

		$("#nextchat").val(parseInt(Date.parse(new Date()).toString().substring(0,10)));		

		$("#sendMsgInput").val('');

		if(d.data.audit != $("#lastchatid").val()){

			chatcontainer.push(AnalyticEmotion(d.content));

		}

	}else{

		alert(d.msg);
		$("#sendMsgInput").val('');

	}

}



function removeHTMLTag(str) 

{

	str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag

	str = str.replace(/(^\s*)|(\s*$)/g, ""); 

	str = str.replace(/(^\s*)/g, "");

	str = str.replace(/(\s*$)/g, ""); 

	str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;

	return str;

}


function sendMsg(){
	
	var _s = removeHTMLTag($("#sendMsgInput").val());

	if ((_s.length == 0))

	{

		$("#sendMsgInput").val('');

		alert('内容不能为空');

		return false;

	}
	

       var nextchattime = parseInt($('#nextchat').val());
        var time = parseInt(Date.parse(new Date()).toString().substring(0,10));
		var nchat = time - nextchattime;

		
	
		if(nchat < 10){            		
		var	t = setInterval(function(){
		var m = 10-(parseInt(Date.parse(new Date()).toString().substring(0,10))-nextchattime);
		if(m == 0){
			 clearInterval(t);
			 $('.tmask').css('display','none');
			 $('.tbox').css('display','none');
		 } 
		var chatTime = document.getElementById('chatTimeSpan');
		chatTime.innerText = m;
			},1000);
                     
       var boxhtml = '<div class="alert_title" style="width:100%;height:60px;display:block;text-align:center"><h3><b>提示信息</b></h3></div><center><p id="alertmsg">您的发言时间间隔为10秒,还有<span id="chatTimeSpan" style="color:red;">10</span>秒！</p></center>';
           
			TINY.box.show({html:boxhtml,width:240,height:150,openjs:function(){

				$('.tbox').css('position','absolute');

			}});

          return false;

	}	
		

	$("#sendMsgInput").val(_s);

	postdata('chatform', "/index.php/chat/setContent", "retchat");

	return false;

}

function sendCaitiao(e){
	$("#sendMsgInput").val('['+e+']');
	sendMsg();
}






	window.onload = function()

	{

		$("#topicbox").find(".text_chat").find("p").each(function(){

			var _s = $(this).html();

			if (_s.indexOf('[') != -1)

			{

				var _t = AnalyticEmotion(_s);

				$(this).html(_t); 

			}

		});

		chatcontainer.scrollToLast();

	}

	<?php if ((!empty($userinfo)) && ($userinfo['level'] != '-1')){ ?>

	var login_type = 0;

	<?php }else{ ?>

		var login_type = 1;

		<?php } ?>



	</script>

		<form name="chatform" id="chatform" action="javascript:;" onsubmit="return false;" style="width:80%;overflow:hiddern;">

		<INPUT TYPE="hidden" NAME="roomid" id="roomid" value="<?php echo $masterinfo['roomid']?>">

		<INPUT TYPE="hidden" NAME="masterid" id="masterid" value="<?php echo $masterinfo['masterid']?>">

		<INPUT TYPE="hidden" NAME="lastchatid" id="lastchatid" value="<?php echo (empty($lastchatid))? 0 : $lastchatid;?>">

		<INPUT TYPE="hidden" NAME="chatname" id="chatname" value="
		<?php
		//echo $u['name'];
		//如果已经登录，则将表单中用户名隐藏域设置为已登录的用户名
		if (strlen($_COOKIE['username'])>0){
			echo $_COOKIE['username'];
		}else{
			echo $u['name'];
        }
		?>
        ">

		<INPUT TYPE="hidden" id="nextchat" value="0">

		<INPUT TYPE="hidden" NAME="chatuserid" id="chatuserid" value="<?php echo $u['userid']?>">

		<INPUT TYPE="hidden" NAME="level" id="level" value="<?php if(strlen($_COOKIE['userid'])==0) echo -1; else echo $_COOKIE['level']; ?>">

		<INPUT TYPE="hidden" NAME="imgthumb" id="imgthumb" value="">

		<INPUT TYPE="hidden" NAME="sourceimg" id="sourceimg" value="">

		<input type="hidden" name="wordcount" class="word_count" id="wordcount" />

		<textarea type="text" id="sendMsgInput" name="chatcontent" cols="30" rows="3" placeholder="在此输入文字" data-placeholder = "ture" style="width:98%;margin-left:3px;outline:none;overflow:auto;"> </textarea>

		<input type="hidden" id="iswap" name="iswap" value="<?php echo $iswap ?>">

		</form>
