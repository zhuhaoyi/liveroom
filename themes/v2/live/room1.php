

<!doctype html>

<html>

<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>

<title><?php echo $cfg['site_title'];?></title>

<meta name="renderer" content="webkit">

<meta name="description" content="" />

<meta name="keywords" content="<?php echo $cfg['site_title'];?>" />

<meta http-equiv="pragma" content="no-cache" />



<link rel="stylesheet" type="text/css" href="<?php echo $this->config->item('base_url');?>/css/style.css" />

<link rel="stylesheet" type="text/css" href="<?php echo $this->config->item('base_url');?>/css/jquery.mCustomScrollbar.css"/>



<link rel="stylesheet" type="text/css" href="<?php echo $this->config->item('base_url');?>/css/jquery.sinaEmotion.css"/>









<!--[if lt IE 9]>

<link href="<?php echo $this->config->item('base_url');?>/themes/v2/static/css/less.css" rel="stylesheet" type="text/css">

<script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/css3-mediaqueries.js"></script>

<![endif]-->





<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/html5.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery-1.9.js"></script>



<script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.mousewheel.min.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/js/layer/layer.min.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.form.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.mCustomScrollbar.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/jquery.sinaEmotion.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/tinybox2.js"></script>



<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/room.api.js"></script>

<script type="text/javascript" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/room.init.js"></script>



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

window.location='http://yancq.com/index.php/live/room2/26';  //如果是移动设备访问，就跳转到百度。请更改为你的网址。

}



$().ready(function(){

	showbox();

});

</script>



</head>

<body >

<?php echo base_url(); ?>





<!--弹窗-->

<div class="tipForm22" style="display:none">

<img src="/images/0718_pc.png" style="width:1000px;height:250px;" />

<img src="<?php echo base_url($cfg['tpl'])?>/images/close.gif" class="close" onClick="$('.tipForm22').hide()"/>

</div>





<!--导航条 -->

	<div id="nav">

		<ul id="nav_head_left">

			<li class="nav_head_left_logo"></li>

			<li class="nav_head_left_save"><a href="<?php echo $this->config->item('base_url');?>/themes/v2/static/down.php" style="width:112px;height:34px;display:block;"></a></li>

			<li class="nav_head_left_blackhorse"><a href="#" onclick="showbox()"></a></li>

			<li class="nav_head_left_cowstock"><a href="#" onclick="showbox()"></a></li>

<!--			<li class="nav_head_left_buysell"><a href="#" onclick="showbox()">个股买卖点</a></li>

			<li class="nav_head_left_treasure"><a href="#">财富内参</a></li>

			<li class="nav_head_left_new"><a href="#">资讯聚焦</a></li>

			<li class="nav_head_left_calendar"><a href="#">财经日历</a></li>

			<!--<li class="nav_head_left_qq"></li>-->

            <div class="clearfix"></div>  

		</ul>

		<div id="nav_head_right">

			<div class="nav_head_right_people">

                			

				<?php	 if($userinfo['level'] == '0')  {?>

					     <img src="/images/dengji_1.png">

				<?php }	 else if($userinfo['level'] == '1') {?>

                         <img src="/images/dengji_2.png">

				<?php }	 else if($userinfo['level'] == '2')  {?>

                         <img src="/images/dengji_3.png">

				<?php }	 else if($userinfo['level'] == '3')  {?>

                         <img src="/images/dengji_4.png">

                <?php }	 else if($userinfo['level'] == '4')  {?>

                         <img src="/images/dengji_5.png">

				<?php }	 else if($userinfo['level'] == '5')  {?>

                         <img src="/images/dengji_6.png">

                <?php }	 else if($userinfo['level'] == '6')  {?>

                         <img src="/images/dengji_7.png">						 

				<?php }	 else  {?>

                         <img src="/images/dengji_0.png">							 

                <?php  }  ?>

<!--				<img src="/images/dengji_0.png">  -->

<!--				<span class="call">游客</span>    -->

				<span class="name"><?php echo $userinfo['name'];?></span> 

            	<div class="clearfix"></div>	

			</div>			

			<div class="demo">

				<nav class="main_nav" >

					<ul>

<!--						<li><a class="cd_signin" href="#0">注册会员</a></li>     -->

<!--						<li><a class="cd_signup" href="#0">登录</a></li>         -->   

		                   <?php if ((!empty($userinfo)) && ($userinfo['level'] != '-1')) { ?>

			          <li style="border:2px solid green;"><a class="cd_signout" href="/index.php/user/logout">退出</a></li>

		                  <?php }else{ ?>

			          <li><a class="cd_signup" href="#0" onClick="showLoginForm();">登录</a></li>

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

				<ul id="stock_index">

					<li class="stock_number_1">

						<span class="sz_index">上证指数</span>

						<span class="number">3079.53</span>

						<span class="number_block">+0.16%</span>

						<div class="clearfix"></div>

					</li>

					<li class="stock_number_2">

						<span class="sc_index">深证成指</span>

						<span class="number">10745.71</span>

						<span class="number_block">+0.15%</span>

						<div class="clearfix"></div>

					</li>

					<li class="stock_number_3">

						<span class="cy_index">创业板指</span>

						<span class="number">2188.65</span>

						<span class="number_block">-0.31%</span>

						<div class="clearfix"></div>

					</li>

					<input type="button" name="submit" value="" class="btn" onclick="location.href="#"/>

				</ul>

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

		onlineuptime = setInterval(useronline, 1000);

		

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

				<a class="update" href="javascript:window.location.reload();">刷新</a>

				<span class="ca_show" onclick="showCourse()">课程安排</span>

				<a class="vedio_save" href="<?php echo $this->config->item('base_url');?>/themes/v2/static/down.php"></a>

				<div class="clearfix"></div>

			</div>

			<div class="player"><!--视频播放器-->

				<script type="text/javascript" charset="utf-8" src="http://yuntv.letv.com/player/live/blive.js "></script>

		   		<script>

		        	var player = new CloudLivePlayer();

		        	player.init({activityId:"A2016071400001s7"});

		    	</script>

			</div>

			<div class="bottom_object">

				<div class="top_choose">

					<span class="title_blackhorse">九月狙击黑马</span>

<!--					<span class="disclaimer">独家微信</span>  -->

					<span class="notice">免责声明</span>

					<span class="we_wechat">公告</span>

				</div>

				<div class="down_content">

					<div class="title_blackhorse"><img src="/images/0718_pc.png" style="width:100%;" /></div>

					<div class="disclaimer">

					<pre style="white-space: pre-wrap;word-wrap: break-word;margin:0;color:#eee;font-family: Microsoft Yahei,Verdana, Geneva, sans-serif;">投资有风险，入市需谨慎，选择正规平台，营造绿色健康投资环境：

	第一：请认准省政府批文（省工商局批文,省金融办批文，市政府批文等均无效）

	第二：确保第三方资金银行托管

	第三：国内现货白银报价以国际价格为基础，综合中国人民银行人民币兑美元基准汇率，连续报出现货白银人民币买入价及卖出价。目前有实时汇率和固定汇率两种报价方式，两种报价方式的点位有一定差值，投资者需警惕。

	第四：理性分析，切记带好止损止盈，不骄不躁，把控风险。

	</pre></div>

					<div class="notice">		

					<pre style="white-space: pre-wrap;word-wrap: break-word;margin:0px;color:#eee;font-family: Microsoft Yahei,Verdana, Geneva, sans-serif;">&nbsp&nbsp&nbsp&nbsp本直播室所有内容，包括文字、图像、音频、视频只供本公司或授权者使用，访问者可将本网站提供的内容或服务用于个人学习或欣赏，以及其他非商业性或非盈利性用途；没有本公司的书面授权，不得因任何目的，以任何方式如电子的、转载或其它方式，包括影印和记录，复制和传播本直播室的任何部分。</pre></div>

<!--					<div class="we_wechat"></div>  -->

				</div>

				</div>

			</div>

		

<!-- 聊天模块开始 -->

		<div id="content_right">

			<div class="top_notice"><!--顶部公告滚动区-->			

				<marquee direction="left" id="notice" scrollamount="3" style="color:red;line-height:30px;"><center>紧急布局公告！紧急布局公告！近期市场已走出明确突破行情，个股机会纷呈，如何把握当前绝佳机会，让利润加速奔跑</center></marquee>

			</div>

         <div  class="content_talk" >	

			  <ul id="topicbox" class="talk" >			

			   <?php $this->load->module('live/chat/getitem', array('masterid'=> $masterinfo['masterid']));?>						

	          </ul>

         </div>

		

			<div class="input_area"><!--输入区-->

				<div class="input_area_bgi">

					<p style="margin-top:15px;">九月收获季，&nbsp;哪些黑马爆发在即？&nbsp;国诚金融研究所首席分析师午间12:00与您分享黑马布局策略</p>

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

	                		<span id="flower" onclick="sendCaitiao('pt鲜花');" ></span>

	                		<span id="getstrong" onclick="sendCaitiao('pt给力');"></span>

	                		<span id="handclap" onclick="sendCaitiao('pt鼓掌');"></span>

	                		<span id="jack-up" onclick="sendCaitiao('pt顶起');"></span>

	                		<span id="like" onclick="sendCaitiao('pt点赞');"></span>

	                		<a href="javascript:void(0);" class="plan" onclick="showbox();"></a>

	                		<div class="clearfix"></div>

	                	</div>

	                	<div class="write_area">

						<?php $this->load->module('live/content/getlivedata', array(array($roominfo['cateid']), array($roominfo), array($hostinfo)));?>

	                		<!--<textarea class="input_box" cols="30" rows="3" placeholder="在此输入文字" data-placeholder = "ture"></textarea>-->

	                		<span class="send_btn" onClick="sendMsg();"></span>

	                		<div class="clearfix"></div>

	                	</div>

                	</div>

                </div>

					

         </div>

		   </div>

<div class="clearfix"></div>

</div>



<script type='text/javascript'>

    (function($){

        $(window).load(function(){

            $(".content_talk").mCustomScrollbar();

        });

    })(jQuery);

</script>

 

<!-- 课程表维护 -->

<div class="tan_div hidden" id="pub_div" style="display: none;">

	<div class="tan_content tan_600 box_Fillet3" style="top:10%">

		<div class="tan_close2">

			<a href="javascript:void(0)" onclick="hide('pub_div')"></a>

		</div>

		<div class="jg_kcb">

<!--              <h2 id="div_title">今日课程安排</h2> -->

				<div class="jg_kcb_list" >

					<ul id="courseMt">

					<li>

					<div class="clearfix jg_kcb_list_nr">

					<div class="fl jg_kcb_list_fl clearfix">

					<div class="jg_tecer fl" >李牧</div>

					<div class="fr">《牛股狙击》</div>

					</div>

					<div class="fl">

					<span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">09:00-09:30</span>

					</div>

					</div>

					</li>

					<li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"></div></div></li>

					<li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">鸿德</div><div class="fr">《盘中实时解析》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">9:30-11:30</span></div></div><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">大兵</div><div class="fr">《午盘版块布局》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">11:30-12:30</span></div></div>   <li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">大兵</div><div class="fr">《午盘版块布局》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">11:30-12:30</span></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">浩然</div><div class="fr">《热点狙击》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">12:30-13:00</span></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">游鲲</div><div class="fr jg_kcb_color">《盘中实时解析》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">13:00-14:30</span></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">大兵</div><div class="fr">《黄金半小时》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">14:30-15:00</span></div></div></li><li><div class="clearfix jg_kcb_list_nr"><div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">浩然</div><div class="fr jg_kcb_color">《个股诊断》</div></div><div class="fl"><span class="jg_kcb_span">●</span> 直播时间：<span class="jg_kcb_color">15:00-17:00</span></div></div></li></ul>

				</div>

			</div>

	</div>

</div>



<style>



.fl,.fr,.jg_kcb_color{

 color:black;

}

</style>







<script type="text/javascript">/*底部信息切换*/

		$(".down_content div").hide().eq(0).show()	

		$(".top_choose span:eq(0)").click(

			function(){

				$(".top_choose span").css('color','#fff')

				$(".top_choose span:eq(0)").css('color','#f0ff00')

				$(".down_content div").hide()

				$(".down_content div").eq(0).show()

				

				

			}

		)

		$(".top_choose span:eq(1)").click(		

			function(){

				$(".top_choose span").css('color','#fff')

				$(".top_choose span:eq(1)").css('color','#f0ff00')

				$(".down_content div").hide()

				$(".down_content div").eq(1).show()

/*				window.open('https:www.baidu.com');   */

			}

		)

		$(".top_choose span:eq(2)").click(

			function(){

				$(".top_choose span").css('color','#fff')

				$(".top_choose span:eq(2)").css('color','#f0ff00')

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

/*$(document).ready(function(){

	var number=$(".member_name").size();

	var member_number=document.getElementById("member_number");

        member_number.innerText=number;

		

});

*/

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











function showCourse(){

	$("#pub_div").show();



}



function hide(that){



	$("#"+that).hide();

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

