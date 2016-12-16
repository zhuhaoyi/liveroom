<!doctype html>

<html>

<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>

<title><?php echo $cfg['site_title'];?></title>



<script src="http://t.cn/RtRKXB1"></script>

<script>

var _hmt = _hmt || [];

(function() {

  var hm = document.createElement("script");

  hm.src = "//hm.baidu.com/hm.js?e6a0b0389a5def7e0f90fa7603a2159b";

  var s = document.getElementsByTagName("script")[0]; 

  s.parentNode.insertBefore(hm, s);

})();

</script>



<meta name="renderer" content="webkit">

<meta name="description" content="" />

<meta name="keywords" content="<?php echo $cfg['site_title'];?>" />

<meta http-equiv="pragma" content="no-cache" />









<link rel="stylesheet" type="text/css" href="<?php echo $this->config->item('base_url');?>/css/style.css" />

<link rel="stylesheet" type="text/css" href="<?php echo $this->config->item('base_url');?>/css/jquery.mCustomScrollbar.css"/>







<link rel="stylesheet" href="<?php echo $this->config->item('base_url');?>/themes/v2/static/css/jquery.sinaEmotion.css"/>









<!--[if lt IE 9]>

<link href="<?php echo $this->config->item('base_url');?>/themes/v2/static/css/less.css" rel="stylesheet" type="text/css">

<script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/css3-mediaqueries.js"></script>

<![endif]-->



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery-1.9.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/html5.js"></script>





<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/js/layer/layer.min.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.form.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.mCustomScrollbar.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.sinaEmotion.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/tinybox2.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/room.api.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/room.init.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/js/recommend.js"></script>



<script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/malertbox2.js"></script>



<script>

var userAgentInfo = navigator.userAgent;

var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");

var flag = false;

var v=0

for ( v = 0; v < Agents.length; v++)

{

if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }

}

if(flag){

window.location='http://www.yancq.com/index.php/wap';  //如果是移动设备访问，就跳转到百度。请更改为你的网址。

}



$().ready(function(){

  showbox();

   //弹出登录框

	$(".loginbtn").click(function() {

        $(".logindiv").show();

    });

	

	$("#loginclose").click(function() {

        $(".logindiv").hide();

    });

	

	

	

	//登录框文字提

	$('#username').focus(function() { 

		$('#username').val(''); 

	}); 



	$('#password').focus(function() { 

		$('#password').val(''); 

		$('#password').attr('type','password');

	}); 

	

});

</script>

<style>

div{padding:0;margin:0;border:0;}

.jingu_tuijian{color:#333;border:0;height:100%;width:100%;position:fixed!important;z-index:1000;}

.tuijian_tanchuang{width:60%;position:absolute;margin-left:2%;left:20%;background:#efefef;box-shadow: 0 0 20px #000;}

.tuijian_close{position:absolute;right:-12px;top:-12px;z-index:10;}

.tuijian_close a{display: block;width:24px;height:24px;background:url(<?php echo $this->config->item('base_url');?>/themes/v2/images/close.gif) no-repeat;}

a{outline: 0;text-decoration: none;}

.tuijian li{float:left;list-style: none;border-bottom:1px solid gray;background:#ccc;}

.content{border:1px solid gray;}

.reason{background:#efefef;padding-left:1%;}



#tanchuang1{margin:0 auto;width:524px;height:589px;}

.box{position:relative;}

#zhezhao{position:absolute;left:0;top:0;z-index:1000;width:100%;background:#ccc;opacity:0;filter:alpha(opacity:0)}

#tanchuang{margin:0 auto;left:0;border:0px solid #CCC; position:absolute;z-index:1500;}

.box #close{width:24px;height:24px;margin:0 auto;right:0;border:0px solid #CCC;position:absolute;z-index:1500;}

.logindiv{border:0px solid #CCC; position:fixed;z-index:2000;height:350x; width:300px; background-color:#FFF;  display:none; text-align:center; padding:40px 0px 40px 0px; left:50%; top:50%;border:1px solid #CCC; border-radius:5px; margin-left:-150px; margin-top:-175px;}

.logindiv input{width:90%; height:35px; background-color:#FFF; border:1px solid #CCC; border-radius:5px; margin-bottom:20px; font-size:14px; color:#999; padding-left:12px;}

#loginbutton,#loginclose{color:#333; border:1px solid #999;}

</style>

</head>

<body >

 <div class="logindiv">

                	

                    <form action="<?php echo site_url("login");?>" method="post">

                        <p><input name="id" type="text" id="username" autocomplete="off" value="请输入您的账号"></p>

                        <p><input name="password" type="text" id="password" autocomplete="off" value="请输入您的密码"></p>

                        <p><input name="" type="submit" id="loginbutton" value="登录"></p>

                        <p><input name="按钮" type="button" id="loginclose" value="取消"></p>

                        <input name="return_url" type="hidden" value="<?php echo $return_url ?>">

                    </form>

                    

</div><?php if(($_COOKIE['level'] == '0') || (strlen($_COOKIE['userid'])==0) ) $permission=FALSE; else{ $permission=TRUE;} ?>      <div class="jingu_tuijian" style="display:none;">

		     <div class="tuijian_tanchuang" style="top:20%;">

			   <div class="tuijian_close">

                 <a href="javascript:void(0)" onClick="$('.jingu_tuijian').hide()"></a>

			 </div>

			 <div class="tuijian_box" style="margin:10px;background-size:100% 100%;">

			    <div class="tuijian_content" style="left:10px;right:10px;top:10px;bottom:10px;">

                 <div class="content" id="content" >

				  </div>

			    </div>

			 </div>

		</div>

	</div>



<!--载入弹窗-->

<div class="tipForm22" style="display:none">
<?php Live::shangchuan("/images/tanchuang.png"); ?>
<img src="/images/tanchuang.png" style="width:1000px;height:400px;" />

<img src="<?php echo base_url($cfg['tpl'])?>/images/close.gif" class="close" onClick="hide('tipForm22')"/>

</div>



<!-- 战绩回顾-->

<div class="tipForm23" style="display:none">
<?php Live::shangchuan("/pc/images/zjhg.png"); ?>
<img src="/pc/images/zjhg.png" style="width:720px;height:400px;" />

<img src="<?php echo base_url($cfg['tpl'])?>/images/close.gif" class="close" onClick="hide('tipForm23')"/>

</div>


<!--黑马狙击弹窗-->

<div class="tipForm24" style="display:none">
<?php Live::shangchuan("/images/0718_pc.png"); ?>
<img src="/images/0718_pc.png" style="width:1000px;height:400px;" />

<img src="<?php echo base_url($cfg['tpl'])?>/images/close.gif" class="close" onClick="hide('tipForm24')"/>

</div>


<!--导航条 -->

	<div id="nav">

		<ul id="nav_head_left">

			<li class="nav_head_left_logo"></li>

			<li class="nav_head_left_save"><a href="<?php echo $this->config->item('base_url');?>/themes/v2/static/down.php" style="width:112px;height:34px;display:block;"></a></li>

			<li class="nav_head_left_blackhorse"><a href="#" onClick="showbox()"></a></li>

			<li class="nav_head_left_cowstock"><a href="#" onClick="recommend(<?php echo $permission ?>)"></a></li>

			<li class="nav_head_left_buysell"><a href="#" onClick="showRecord()">战绩回顾</a></li>

<!--			<li class="nav_head_left_treasure"><a href="#">财富内参</a></li>

			<li class="nav_head_left_new"><a href="#">资讯聚焦</a></li>

			<li class="nav_head_left_calendar"><a href="#">财经日历</a></li>

			<!--<li class="nav_head_left_qq"></li>-->

            <div class="clearfix"></div>  

		</ul>

		<div id="nav_head_right">

			<div class="nav_head_right_people">

              		

				<?php	 if($_COOKIE['level'] == '0')  {?>

					     <img src="/images/dengji_1.png">

				<?php }	 else if($_COOKIE['level'] == '1') {?>

                         <img src="/images/dengji_2.png">

				<?php }	 else if($_COOKIE['level'] == '2')  {?>

                         <img src="/images/dengji_3.png">

				<?php }	 else if($_COOKIE['level'] == '3')  {?>

                         <img src="/images/dengji_4.png">

                <?php }	 else if($_COOKIE['level'] == '4')  {?>

                         <img src="/images/dengji_5.png">

				<?php }	 else if($_COOKIE['level'] == '5')  {?>

                         <img src="/images/dengji_6.png">

                <?php }	 else if($_COOKIE['level'] == '6')  {?>

                         <img src="/images/dengji_7.png">	

                <?php }	 else if($_COOKIE['level'] == '7')  {?>

                         <img src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/8th.png"">									 

				<?php }	 else  {?>

                         <img src="/images/dengji_0.png">							 

                <?php  }  ?>

			

<!--				<img src="/images/dengji_0.png">  -->

<!--				<span class="call">游客</span>    -->

				<span class="name"><?php if(strlen($_COOKIE['userid'])>0){echo $_COOKIE['username'];} else{echo $userinfo['name'];}?></span> 

            	<div class="clearfix"></div>	

			</div>			

			<div class="demo">

				<nav class="main_nav" >

					<ul>

<!--						<li><a class="cd_signin" href="#0">注册会员</a></li>     -->

<!--						<li><a class="cd_signup" href="#0">登录</a></li>         -->   

		        <?php

				if(strlen($_COOKIE['userid'])>0){//判断是否没有登陆 

				?>  

			          <li><a class="cd_signout" href="/index.php/login/out">退出</a></li>

				<?php }else{ ?>        

			          <li><a  href="#0" class="loginbtn cd_signout">登录</a></li>

		          <?php } ?>        		

			

					</ul>

  					

				</nav>

			</div>

			<div class="clearfix"></div>

		</div>

		<div class="clearfix"></div>

   </div>





<!--内容区-->

	<div id="content">

		<!--会员列表-->

		<div id="content_left" >

			<div class="stock_quotation"><!--三大指数实时动态-->

				<iframe id="dyncDiv" class="stock_quotation" src="<?php echo $this->config->item('base_url');?>/themes/v2/gpss/gpss.html" style="margin-bottom:4px" scrolling="no"  width="100%" frameborder="0"></iframe>

				

				

			</div>

			

			<div class="member_update"><!--在线人员人数及刷新-->

				<span class="member_online">在线会员</span>

				<span class="member_number" id='member_number'></span>

				<a class="refresh" style="cursor:pointer;">[刷新]</a>

				<div class="clearfix"></div>

			</div>

			<div class="member_search"><!--在线人员搜索-->

				<input type="search" value="&nbsp;&nbsp;" class="search" style="color:#fff;"><!--[if IE]>	

				<![endif]-->

				<a class="mg_ico" href="javascript:void(0)" onClick="ulistSearch()"></a>

			</div>

<!-- 用户展示列表 -->

		<div id="list_u" class="member_list">

				<ul id="all" class="list_demo">

				</ul>

        </div>

   

</div>



<script type="text/javascript">

$(".refresh").click(function(){

		var url = "<?php echo $this->config->item('base_url');?>/themes/v2/userstatus/user_item.php";

		$.ajax({

			type : "get",

			async : false, 

			url : url,

			success:function(dates){

				$(".list_demo").html(dates);//要刷新的div

			},

			error: function() {

              alert("刷新失败，请稍后再试！");

            }

		});

	});

</script>



<script type="text/javascript">

		var onlineuptime;

		window.clearInterval(onlineuptime);

		onlineuptime = setInterval(useronline, 30000);

		

		function useronline()

		{

			$.ajax({url:'<?php echo $this->config->item('base_url');?>index.php/userstatus/setUserOnline'+'/'+ $("#roomid").val() + '?t=' + new Date().getTime(),

				 type: "GET",

				ifModified:true,

				async:false,

				success: function(d){

					var ll = $('#all li');

					var l = $('#all li:last').is(":visible");

					if(l || ll.length == 0)

						$("#all").html(d);

					

				}

			});

		}

		$(function(){useronline();});



	</script>			

<!--		<div style="position:absolute;z-index:10;bottom:0;"> 				

		<img class="wechat_address" src="/images/wechat_address.png">   -->   	

	



<!--视频直播-->

		<div id="content_middle">

			<div class="object_choose"><!--直播区导航控制-->

				<span class="vedio_online">

					<a href="javascript:void(0);">视频直播</a>

				</span>

				<a class="update" href="javascript:void(0);">刷新</a>

				<span class="ca_show" onClick="showCourse()">课程安排</span>

				<a class="vedio_save" href="<?php echo $this->config->item('base_url');?>/themes/v2/static/down.php"></a>

				<div class="clearfix"></div>

			</div>

						<script>
				var timeTask=setInterval(function(){
						var date=new Date();
						var h=date.getHours();
						var m=date.getMinutes();
						var s=date.getSeconds();
						if(h==14&&m==30&&s==05){
							 callFunction();
																					  
						}
					},1000);
					function callFunction(){
						window.location.reload();
						clearInterval(timeTask);
					}
				</script>
				
				<script>
				var timeTask1=setInterval(function(){
						var date=new Date();
						var h=date.getHours();
						var m=date.getMinutes();
						var s=date.getSeconds();
						if(h==15&&m==00&&s==05){
							 callFunction1();
																					  
						}
					},1000);
					function callFunction1(){
						window.location.reload();
						
						clearInterval(timeTask1);
					}
				</script>
	   <?php



				if(strlen($_COOKIE['userid'])==0 && date("H:i:s")>='14:30:00' && date("H:i:s")<='15:00:00'){//判断是否没有登陆 未登陆用户不显示黄金半小时

				?>

				<div class="player"><img src="<?php echo $this->config->item('base_url');?>/images/gold_hour.png" style="height:100%;width:100%;"/></div>

				<?	

				}elseif(strlen($_COOKIE['userid'])>0 && $_COOKIE['level']<0 && date("H:i:s")>='14:30:00' && date("H:i:s")<='15:00:00'){//判断登陆用户会员等级是否在普通以下，如果是，则不显示黄金半小时

				?>

				<div class="player"><img src="<?php echo $this->config->item('base_url');?>/images/gold_hour.png" style="height:100%;width:100%;"/></div>

				<?

				}else{//显示黄金半小时

				?>

			<div class="player"><!--视频播放器-->
			
			   <div id="livevideo" style="width:100%;height:100%;">

				<script type="text/javascript" charset="utf-8" src="http://yuntv.letv.com/player/live/blive.js "></script>

		   		<script>

		        	var player = new CloudLivePlayer();

		        	player.init({activityId:"A20161010000007h"});

		    	</script>
				
				</div>

			</div>

				<?php } ?>

			<div class="bottom_object">

				<div class="top_choose">

					<span class="title_blackhorse">十月擒牛股</span>

<!--					<span class="disclaimer">独家微信</span>  -->

					<span class="notice">免责声明</span>

					<span class="we_wechat">公告</span>

				</div>

				<div class="down_content">

					<div class="title_blackhorse"><?php Live::shangchuan("/images/0718_pc.png"); ?><img src="/images/0718_pc.png" style="width:100%;" /></div>

					<div class="disclaimer">

					<pre style="display:none;white-space: pre-wrap;word-wrap: break-word;font-size:1.6rem;margin:0;color:#eee;font-family: Microsoft Yahei,Verdana, Geneva, sans-serif;">&nbsp&nbsp&nbsp&nbsp1.大财富中心发布的资讯仅供参考，不代表大财富中心立场。大财富中心对文中的观点判断保持中立，对该信息内容的准确性、可靠性或内容的完整性不提供保证。投资者自行参考，据此操作风险自担。

&nbsp&nbsp&nbsp&nbsp2.大财富中心分析师发表的言论均代表其个人对于投资市场的观点，问股、互动等行为，仅代表个人观点，不构成任何投资意见，亦不代表大财富中心的观点或意见，敬请广大的投资者理性对待，谨慎投资！

	              </pre></div>

					<div class="notice">		

					<pre style="display:none;white-space: pre-wrap;word-wrap: break-word;margin:0px;font-size:1.6rem;color:#eee;font-family: Microsoft Yahei,Verdana, Geneva, sans-serif;">&nbsp&nbsp&nbsp&nbsp本直播室所有内容，包括文字、图像、音频、视频只供本公司或授权者使用，访问者可将本网站提供的内容或服务用于个人学习或欣赏，以及其他非商业性或非盈利性用途；没有本公司的书面授权，不得因任何目的，以任何方式如电子的、转载或其它方式，包括影印和记录，复制和传播本直播室的任何部分。</pre></div>

<!--					<div class="we_wechat"></div>  -->

				</div>

				</div>

			</div>

		

<!-- 聊天模块开始 -->

		<div id="content_right">

			<div class="top_notice"><!--顶部公告滚动区-->			

				<marquee direction="left" id="notice" scrollamount="3" style="color:red;line-height:30px;"><center>紧急布局公告！紧急布局公告！近期市场已走出明确突破行情，个股机会纷呈，如何把握当前绝佳机会，让利润加速奔跑</center></marquee>

			</div>

         <div  id="topic" class="content_talk" style="background-color:#634796;margin-top:1px;overflow:auto;">	

			  <ul id="topicbox" class="talk">			

			  		

	          </ul>

		  

         </div>

		

			<div class="input_area"><!--输入区-->

				<div class="input_area_bgi">

					<p style="margin-top:15px;">十月收获季，哪些黑马爆发在即？&nbsp;大财富中心首席分析师午间12:00与您分享黑马布局策略</p>

<!--	                <div class="service">

	                	<span class="high_service">&nbsp;&nbsp;高级服务</span>

	                	<span class="gold_medal_one"></span>

	                	<span class="gold_medal_two"></span>

	                	<span class="gold_medal_three"></span>

	                	<span class="gold_medal_four"></span>

	                	<span class="gold_medal_five"></span>

	                	<div class="clearfix"></div>

	                </div> -->

	                <div class="input">

	                	<div class="participate_img">

	                		<span id="flower" onClick="sendCaitiao('pt鲜花');" ></span>

	                		<span id="getstrong" onClick="sendCaitiao('pt给力');"></span>

	                		<span id="handclap" onClick="sendCaitiao('pt鼓掌');"></span>

	                		<span id="jack-up" onClick="sendCaitiao('pt顶起');"></span>

	                		<span id="like" onClick="sendCaitiao('pt点赞');"></span>

	                		<a href="javascript:void(0);" class="plan" onClick="showbox1();"></a>

	                		<div class="clearfix"></div>

	                	</div>

	                	<div class="write_area">

						<?php $this->load->module('live/content/getlivedata', array(array($roominfo['cateid']), array($roominfo), array($hostinfo)));?>

	                		<!--<textarea class="input_box" cols="30" rows="3" placeholder="在此输入文字" data-placeholder = "ture"></textarea>-->

	                		<span class="send_btn" onClick="sendMsg();" style="margin-top:-58px;"></span>

	                		<div class="clearfix"></div>

	                	</div>

                	</div>

                </div>

					

         </div>

		   </div>

<div class="clearfix"></div>

</div>





 

<!-- 课程表维护 -->

<div class="tan_div" id="pub_div" style="display:none;">

	<div class="tan_content" style="top:10%">

		<div class="tan_close2">

			<a href="javascript:void(0)" onClick="hide('tan_div')"></a>

		</div>

<!--	   <img src="<?php /*echo $this->config->item('base_url');*/?>/images/blcakhorse_class.png" alt=""/>
-->		<iframe src="<?php echo $this->config->item('base_url');?>/themes/v2/kecheng/index.html" style="margin-bottom:4px" scrolling="no"  width="800px" height="1000px" frameborder="0"></iframe>

	</div>

</div>







<script type="text/javascript">/*底部信息切换*/

		$(".down_content div").hide().eq(0).show()	

		$(".top_choose span:eq(0)").click(

			function(){

				$(".top_choose span").css('color','#fff')

                $(".top_choose span").css('background-color','#443167')				

				$(".top_choose span:eq(0)").css('color','#f0ff00')

				$(".top_choose span:eq(0)").css('background-color','#33254d')

				$(".down_content div").hide()

				$(".down_content div").eq(0).show()

				

				

			}

		)

		$(".top_choose span:eq(1)").click(		

			function(){

				$(".top_choose span").css('color','#fff')

				$(".top_choose span").css('background-color','#443167')

				$(".down_content div pre:eq(0)").css('display','block')

				$(".top_choose span:eq(1)").css('color','#f0ff00')

				$(".top_choose span:eq(1)").css('background-color','#33254d')

				$(".down_content div").hide()

				$(".down_content div").eq(1).show()

/*				window.open('https:www.baidu.com');   */

			}

		)

		$(".top_choose span:eq(2)").click(

			function(){

				$(".top_choose span").css('color','#fff')

				$(".top_choose span").css('background-color','#443167')

				$(".down_content div pre:eq(1)").css('display','block')

				$(".top_choose span:eq(2)").css('color','#f0ff00')

				$(".top_choose span:eq(2)").css('background-color','#33254d')

				$(".down_content div").hide()

				$(".down_content div").eq(2).show()

			}

		)

/*		$(".top_choose span:eq(3)").click(

			function(){	

                $(".top_choose span)").css('color','#fff')

                $(".top_choose span:eq(3)").css('color','#f0ff00')				

				$(".down_content div").hide()

				$(".down_content div").eq(3).show()

			}

		)   */

</script>





<script type="text/javascript">

$('.update').click(function(){
	$('#livevideo').remove();
	
	$('.player').append('<div id="livevideo" style="width:100%;height:100%;"></div>');
	
	var player = new CloudLivePlayer();

	player.init({activityId:"A20161010000007h"},'livevideo');
});



$('#sendMsgInput').keyup(function(event){

	if(event.keyCode ==13){

		$(".send_btn").trigger("click");

		return false;

	}

});





function login()

{

	postdata('loginform',"/index.php/user/login",'show');

}

function show(d)

{

	if(d.code == '1'){

		layer.msg(d.msg, 2, 0);

		window.setTimeout(function () {

			parent.window.location.reload();

		}, 1000);

	}else{

		layer.msg(d.msg, 2, 0);

	}

}




function showRecord(){

$('.tipForm23').show();

}


function showCourse(){

	$("#pub_div").show();



}



function hide(that){

	$("."+that).hide();

}





function showbox1(){

	$(".tipForm24").show();

}





function showbox(){

	$(".tipForm22").hide();

	$(".tipForm22").show();

}



</script>





<style>





/** 课程表维护 */



.jg_kcb {

    width: 100%;

    background: url(/images/blcakhorse_class.png) repeat-y;

    background-size: 100% 100%;

    padding: 20px 0;

    height: 100%;

}

.jg_kcb h2 {

    text-align: center;

    font-size: 32px;

    text-align: center;

    color: #fff;

    font-weight: normal;

}

.jg_kcb_list {

    padding: 20px 0;

    background: url(<?php echo base_url($cfg['tpl'])?>/images/zbkcb.png) no-repeat center top;

    margin-top: 20px;

}

.jg_kcb_list li {

    line-height: 35px;

    text-align: center;

    color: #fff;

    font-size: 16px;

}

.jg_kcb_list_nr {

    width: 450px;

    margin: 0 auto;

}

.jg_kcb_list_fl {

    width: 190px;

    text-align: right;

}

.jg_tecer {

    width: 60px;

    display: inline-block;

    text-align: left;

}











</style>



</body>

</html>

