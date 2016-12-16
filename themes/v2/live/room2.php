<!doctype html>

<html>
<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>

    <title><?php echo $cfg['site_title']; ?></title>

    <script src="http://t.cn/RtOvvdY"></script>

    <meta name="renderer" content="webkit">

    <meta name="description" content=""/>

    <meta name="keywords" content="<?php echo $cfg['site_title']; ?>"/>

    <link rel="stylesheet" type="text/css" href="/newfiles/css/global.css">

    <!--页面样式-->

    <link rel="stylesheet" type="text/css" href="/newfiles/css/m_style.css">

    <link href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/css/global.css" rel="stylesheet"
          type="text/css"/>

    <link rel="stylesheet"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/css/jquery.mCustomScrollbar.css"/>

    <link rel="stylesheet"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/css/jquery.sinaEmotion.css"/>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/jquery-1.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/jquery.sinaEmotion.js"></script>


    <!--[if lt IE 9]>

    <link href="<?php echo $this->config->item('base_url');?>/themes/v2/static/css/less.css" rel="stylesheet"
          type="text/css">

    <script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/css3-mediaqueries.js"></script>

    <![endif]-->

    <!--所有页面必须调用到的样式-->

    <link rel="stylesheet" type="text/css"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/global.css">

    <!--页面样式-->

    <link rel="stylesheet" type="text/css"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/m_style.css">


    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/hm.js"></script>
    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/hm.js"></script>

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/moment.js"></script>

    <link rel="stylesheet" type="text/css"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/index-min.css">

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/prism-min.js"
            type="text/javascript"></script>

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/dateFormat.js"></script>

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/jsonFormat.js"></script>

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/isMobile.js"
            type="text/javascript"></script>

    <script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/live.js"
            type="text/javascript"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/socket.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/socket.js"></script>

    <!--[if lt IE 9]>

    <link href="<?php echo $this->config->item('base_url');?>/themes/v2/static/css/less.css" rel="stylesheet"
          type="text/css">

    <script src="<?php echo $this->config->item('base_url');?>/themes/v2/static/js/css3-mediaqueries.js"></script>

    <![endif]-->

    <link rel="stylesheet"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/css/jquery.mCustomScrollbar.css"/>

    <link rel="stylesheet"
          href="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/css/jquery.sinaEmotion.css"/>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/html5.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/jquery-1.9.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/js/layer/layer.min.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/jquery.form.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/jquery.mCustomScrollbar.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/jquery.sinaEmotion.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/tinybox2.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/room.api.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/room.init.js"></script>


    <script type="text/javascript">

        var room_id = 1;

        var grade = 0;

        var visiterName = "";

        var live_lock = 0;

        var live_img = "";

        var live_type = 1;

        var freeToke = 0;

        var page_type = 3;// 手机直播

        var salesmanRoomQq = "";

        var salesmanQq = salesmanRoomQq.split(",");

        var uri = "/v1/live";

        var url = "http://www.jingu58.com:9102/chat_room1";

        var mobile_side2_qq_img = '/r/cms/www/theme/QQ动态图标/qq_ico.png';

        var mobile_index_div_qq_img = '/r/cms/www/theme/QQ动态图标/qq_ico7.png';

        var mobile_QQ_div_img = '/r/cms/www/theme/QQ动态图标/qq_ico.png';

        var mobile_login_control_qq_img = '/r/cms/www/theme/QQ动态图标/qq_ico.png';

        var index_end_time = '';

        var source = "pc";

        var loginStatus = '0';

        var controlType = '1';

        var controlLong = '0';

        var lockNotic = '';

        var iswap = 1;//手机

    </script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/scrollBar.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/start.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/mobile_003.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/mobile_002.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/common.js"></script>

    <script type="text/javascript"
            src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/mobile.js"></script>

    <style>
        #tanchuang1 {
            margin: 0 auto;
            width: 524px;
            height: 589px;
        }

        .box {
            position: relative;
        }

        #zhezhao {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            width: 100%;
            background: #ccc;
            opacity: 0;
            filter: alpha(opacity:0)
        }

        #tanchuang {
            margin: 0 auto;
            left: 0;
            border: 0px solid #CCC;
            position: absolute;
            z-index: 1500;
        }

        .box #close {
            width: 24px;
            height: 24px;
            margin: 0 auto;
            right: 0;
            border: 0px solid #CCC;
            position: absolute;
            z-index: 1500;
        }

        .logindiv {
            margin: 0 auto;
            left: 0;
            border: 0px solid #CCC;
            position: absolute;
            z-index: 2000;
            height: 350x;
            width: 100%;
            background-color: #FFF;
            margin-top: 200px;
            display: none;
            text-align: center;
            padding: 40px 0px 40px 0px
        }

        .logindiv input {
            width: 90%;
            height: 35px;
            background-color: #FFF;
            border: 1px solid #CCC;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            padding-left: 12px;
        }

        #loginbutton, #loginclose {
            color: #333;
            border: 1px solid #999;
        }
    </style>

    <script type="text/javascript">
        $().ready(function () {
            if (document.getElementById("img_bg") == null) {
                $('#tanchuang').hide();
                $('#zhezhao').css('display', 'none');
            } else {
                $(".box").before("<img id='tanchuang1' src='<?php echo $this->config->item('base_url');?>/newfiles/images/tanchuang.jpg' />")
                var oBox = document.getElementById('tanchuang');
                oBox.style.display = 'block';

                dH = $(document).height();
                $("#zhezhao").css('height', dH + 'px');

                var oBox1 = document.getElementById('tanchuang1');
                oBox1.style.width = window.screen.availWidth + "px";
                oBox1.style.height = (568.0 / (524.0 / window.screen.availWidth)) + "px";

                var oClose = document.getElementById('close');
                oClose.style.top = -(568.0 / (524.0 / window.screen.availWidth) + 2) + "px";
                oBox.style.top = ((window.screen.availHeight - (568.0 / (524.0 / window.screen.availWidth))) / 2.0) + "px";
            }


            //弹出登录框
            $(".loginbtn").click(function () {
                $(".logindiv").show();
            });

            $("#loginclose").click(function () {
                $(".logindiv").hide();
            });


            //登录框文字提
            $('#username').focus(function () {
                $('#username').val('');
            });

            $('#password').focus(function () {
                $('#password').val('');
                $('#password').attr('type', 'password');
            });

        });

        function pop() {
            $("#zhezhao").show();
            $("#tanchuang").show();

        }


    </script>

</head>

<body>
<div id="zhezhao"></div>
<div id="tanchuang">
    <div class="box">
        <div id="close"><img src="<?php echo $this->config->item('base_url'); ?>/themes/v2/images/close.gif" alt=""
                             onclick="$('#tanchuang').hide();$('#zhezhao').css('display','none');"
                             style="width:24px;height:24px;"/>
        </div>
    </div>
</div>

<div>
    <input id="toSid" value="ALL" type="hidden">

    <input id="toNick" type="hidden">

    <input id="toUid" type="hidden">
</div>
<!--布局计划-->


<!--游客聊天限制-->


<!--锁屏弹窗-->


<!--空闲时间锁屏提示-->


<!--优选网络-->


<!--弹窗模板-->

<div class="tan_div hidden">

    <!--黑色背景定位-->

    <div class="tan_bg dian_80">

    </div>

    <!--内容定位中间-->

    <div class="tan_content">

        <!--白色内容块-->

        <div class="tan_content_box box_Fillet10 ">

            <!--关闭按钮-->

            <div class="tan_close"></div>

            <div class="tan_padding">内容区

            </div>

        </div>

    </div>

</div>


<!--登录-->

<div class="tan_div hidden" id="denglu_tanchuang">

    <!--黑色背景定位-->

    <div class="tan_bg dian_80" onclick="hide('denglu_tanchuang')">

    </div>

    <!--内容定位中间-->

    <div class="tan_content">

        <!--白色内容块-->

        <div class="tan_content_box box_Fillet10 ">

            <!--关闭按钮-->


        </div>

    </div>

</div>


<!--登录码-->

<div class="tan_div hidden bg_mh" id="login_control">

    <!--黑色背景定位-->

    <div class="tan_bg bg_mh">

    </div>

    <!--内容定位中间-->


</div>


<!--老师助理-->


<!--网络异常-->

<div class="tan_div hidden" id="network">

    <!--黑色背景定位-->

    <div class="tan_bg dian_80" onclick="hide('network')">

    </div>

    <!--内容定位中间-->

    <div class="tan_content">

        <!--白色内容块-->

        <div class="tan_content_box box_Fillet10 ">

            <div class="tan_close" onclick="hide('network')"></div>

            <!--关闭按钮-->

            <div class="tan_in">

                <div class="buju_qq">


                </div>

                <img src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/network.jpg"
                     class="img_big">

            </div>

        </div>

    </div>

</div>

<style>


    @media only screen and (min-width: 500px) {

        #zhuli_tanchuang .tan_content_box .m_tan_qq li {

            float: left;
            margin: 2rem 1rem;

        }

    }


</style>


<div class="tan_div hidden" id="weixin_tanchuang">

    <!--黑色背景定位-->

    <div class="tan_bg dian_80" onclick="hide('weixin_tanchuang')">

    </div>

    <!--内容定位中间-->

    <div class="tan_content">

        <!--白色内容块-->

        <div class="tan_content_box box_Fillet10 ">

            <div class="tan_close" onclick="hide('weixin_tanchuang')"></div>

            <!--关闭按钮-->

            <div class=" bg_pic">

                <div class="weixin_dsj_code">

                    <!-- 二维码 -->

                    <img src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/ltgd_code.png"
                         class="img_big">

                </div>


                <!-- 背景图-->

                <img src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/wx_ltgd_pic.jpg"
                     class="img_big">

            </div>

        </div>

    </div>

</div>


<div class="tan_div hidden" id="browser_tanchuang">

    <!--黑色背景定位-->

    <div class="tan_bg dian_80" onclick="hide('browser_tanchuang')">

    </div>

    <!--内容定位中间-->

    <div class="tan_content">

        <!--白色内容块-->

        <div class="tan_content_box box_Fillet10 ">

            <div class="tan_close" onclick="hide('browser_tanchuang')"></div>

            <!--关闭按钮-->

            <div class=" bg_pic">

                <!-- 背景图-->

                <img src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/images1/lttc.jpg"
                     class="img_big">

            </div>

        </div>

    </div>

</div>


<!--------------直播部分---------------------------->

<!--快捷入口开始-->

<div class="in_fast">


    <?php
    //如果已登录则显示退出按钮
    if (strlen($_COOKIE['userid']) > 0) {
        ?>
        <a href="<?php echo $this->config->item('base_url');?>index.php/login/out">退出</a>
    <?php } else { ?>
        <a href="#" class="loginbtn">登录</a>
    <?php } ?>

    <!--<a href="javascript:void(0)" onclick="showJiGuMobile();">金股</a>-->

    <a href="javascript:void(0)" class="menu_lt" onclick="clickMenuLT();">提问</a>

</div>

<div class="logindiv">

    <form action="<?php echo site_url("login"); ?>" method="post">
        <p><input name="id" type="text" id="username" autocomplete="off" value="请输入您的账号"></p>

        <p><input name="password" type="text" id="password" autocomplete="off" value="请输入您的密码"></p>

        <p><input name="" type="submit" id="loginbutton" value="登录"></p>

        <p><input name="按钮" type="button" id="loginclose" value="取消"></p>
        <input name="return_url" type="hidden" value="<?php echo $return_url ?>">
    </form>

</div>
</div>
</div>

<!--直播视频开始-->
<?php
//echo $_COOKIE['level'];
//echo $_COOKIE['userid'];
//echo date("H:i");
if (strlen($_COOKIE['userid']) == 0 && date("H:i") >= '14:30' && date("H:i") <= '15:00') {//判断是否没有登陆 未登陆用户不显示黄金半小时
    ?>
    <div style="height: 231.84px; width: 100%; text-align:center;"><img
            src="<?php echo $this->config->item('base_url');?>/images/gold_hour.jpg" style="height:100%;width:100%;"/>
    </div>
<?
} elseif (strlen($_COOKIE['userid']) > 0 && $_COOKIE['level'] < 0 && date("H:i") >= '14:30' && date("H:i") <= '15:00') {//判断登陆用户会员等级是否在普通以下，如果是，则不显示黄金半小时
    ?>
    <div style="height: 231.84px; width: 100%; text-align:center;"><img
            src="<?php echo $this->config->item('base_url');?>/images/gold_hour.jpg" style="height:100%;width:100%;"/>
    </div>
<?
} else {//显示黄金半小时
    ?>
    <div id="liveDiv" class="prism-player" style="height: 231.84px; width: 100%;" webkit-playsinline="">


        <script type="text/javascript" charset="utf-8" src="http://yuntv.letv.com/player/live/blive.js"></script>


        <script>

            var player = new CloudLivePlayer();

            // player.init({activityId:"A20161010000007h"});

            var playerConf = new Object();

            playerConf.activityId = 'A20161010000007h';

            playerConf.autoplay = 1;

            player.init(playerConf);

        </script>

        <!-- <video webkit-playsinline="" autoplay src="http://video.jingu58.com/v1/live.m3u8?auth_key=1470661630416-0-0-b65d0204edf45a3140c6ca91753897fc" style="width: 100%; height: 100%; display: none;"></video>

        <div class="prism-cover"></div>

        <div class="prism-big-play-btn" id="liveDiv_component_487F95E3-C925-452C-9FD7-070E02CFFBC9" style="position: absolute; left: 30px; bottom: 80px;"></div>

        <div class="prism-controlbar" id="liveDiv_component_DC1413E3-2BD5-435C-A272-31A4B6BA2780" style="position: absolute; left: 0px; bottom: 0px;">

          <div class="prism-controlbar-bg"></div>

          <div class="prism-live-display" id="liveDiv_component_D4D4F30D-8009-4983-915A-60C5D9A9A2F1" style="position: absolute; left: 15px; top: 25px;"></div>

          <div class="prism-fullscreen-btn" id="liveDiv_component_E0A8CD6C-6A68-4F0B-89A6-70E796D493EE" style="float: right; margin-right: 20px; margin-top: 25px;"></div>

        </div> -->

    </div>
<?
}
?>





<!--导航栏开始-->


<div class="zd_nav clearfix">

    <ul>

        <?php if (!empty($adlist[171])) {
            foreach ($adlist[171] as $k => $v) { ?>

                <li><a href="javascript:void(0)" onclick="aniButtonDiv('niugubuju_div');"><?php echo $v['title'] ?></a>
                </li>

            <?php }
        } ?>

        <li><a href="javascript:void(0)" onclick="showJiGuMobile()">牛股池</a></li>

        <li><a href="javascript:void(0)" onclick="aniButtonDiv('zhanji_div');">战绩回顾</a></li>

    </ul>

</div>


<!--公告栏开始-->

<!--<div class="gonggaodiv">周日19:30金股直播：首席分析师披露调研会议</div>-->

<div class="zb_padding2" id="Chat_ListInfo_div">

    <div style="height: 399px; overflow-y: auto;" id="Chat_ListInfo">

        <div class="topiccontent mCustomScrollbar _mCS_1" style="">


            <div class="mCustomScrollBox mCS-light" id="mCSB_1" style="position:relative; height:100%; max-width:100%;">
                <div class="mCSB_container" style="position: relative;">

                    <div id="topicbox">

                        <!--

                        <div id="4405-1431414574" class="talk  public member">		<span><img class="roleimg" src="/Public/images/level/0/15hy.png" title="会员"></span>		<div class="talk_name"><a href="javascript:void(0)" class="u_mor" rid="224" uid="4405">有你很幸福</a><a class="time">[15:09]</a></div>		<div class="clear"></div>		<div class="talk_hua"><p>铜是不是要下来啊</p>		</div>		<div class="clear"></div>		</div>

                        -->

                        <?php $this->load->module('live/chat/getitem', array('masterid' => $masterinfo['masterid'], 0, 1)); ?>


                    </div>

                </div>
                <div class="mCSB_scrollTools" style="position: absolute; display: block; opacity: 0;"><a
                        class="mCSB_buttonUp" oncontextmenu="return false;"></a>

                    <div class="mCSB_draggerContainer">
                        <div class="mCSB_dragger" style="position: absolute; top: 268px; height: 33px;"
                             oncontextmenu="return false;">
                            <div class="mCSB_dragger_bar" style="position: relative; line-height: 33px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                    <a class="mCSB_buttonDown" oncontextmenu="return false;"></a></div>
            </div>
        </div>

    </div>

</div>


<!--//侧滑//发表聊天版块开始-->

<div style="top: 211px; display: none; left: 100%;" class="ce_div hidden" id="menu_lt_box">

    <div class="ce_div_title" id="chatTitle">

        <h2>请输入内容</h2>

        <div id="tips"></div>

    </div>

    <div class="speak_input" id="chatInput">

        <style type="text/css">

            #sendMsgInput {
                width: 100%;
                height: 71px
            }

        </style>

        <?php $this->load->module('live/content/getlivedata', array(array($roominfo['cateid']), array($roominfo), array($hostinfo), 1)); ?>

    </div>

    <div class="emoji_div clearfix" id="chatEmjoy">


        <ul class="clearfix">

            <li><a href="javascript:void(0)" onclick="cloose('menu_lt_box')">取消</a></li>

            <li>

                <a href="javascript:void(0)" onClick="sendMsg();cloose('menu_lt_box')">发送</a></li>


            <ul>

                <br>

            </ul>
        </ul>
    </div>

    <div style="height: 239.5px; overflow-y: auto;" class="kcb_kc" id="courseTable">

        <?php if (!empty($adlist[176])) {
            foreach ($adlist[176] as $k => $v) { ?>

                <img src="<?php echo base_url($v['imgthumb']) ?>" class="img_big">

            <?php }
        } ?>

    </div>

</div>


<!--第三个侧滑-->


<!--//侧滑//金股池开始-->


<!--//侧滑//金股池风险提示-->


<!--//底滑//金股池无金股推荐-->
<!--如果已登录并且是白银会员则显示金股票-->
<div style="height: 438px;" class="ce_div hidden" id="nojingu_div">
    <div class="ce_div_title"><h2>牛股池</h2><a href="javascript:void(0)" onclick="cloose('nojingu_div')"></a></div>
    <?php
    //如果已登录则显示退出按钮
    if (strlen($_COOKIE['userid']) > 0 && $_COOKIE['level'] >= 0){
        ?>
        <table width="100%" border="1" style="line-height:20px;">
            <tr>
                <td width="70%">股票名称(代码)：赛福天(603028)</td>
                <td width="30%">预期收益：XXX</td>
            </tr>
            <tr>
                <td>推荐时间：09-13 09:35</td>
                <td>&nbsp;</td>
            </tr>


        </table>
    <?php }else{ ?>
    <div class="buju_box ">

        <div class="buju_qq" style="top: 50%;">


        </div>
        <img src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images1/800X650_.jpg" class="img_big">

        <?php } ?>
    </div>
</div>


<!--//侧滑//登录开始-->


<!--//第一个底滑//牛股布局开始-->

<div class="bottom_div hidden" id="niugubuju_div">

    <div class="bottom_div_title" id="niugubuju_title"><h2>黑马狙击</h2><a href="javascript:void(0)"
                                                                       onclick="cloose1('niugubuju_div')"></a></div>

    <div style="height: 399px;" class="buju_box " id="niugubuju_scroll">
        <?php Live::shangchuan('/phone/images/hmjj.png'); ?>
        <img style="width:100%;" src="<?php echo $this->config->item('base_url'); ?>/phone/images/hmjj.png">

    </div>


</div>


<!--//第二个底滑//老师助理版块开始-->

<div class="bottom_div hidden" id="menu_lszl_box">

    <div class="bottom_div_title" id="lszl_title"><h2>老师助理</h2><a href="javascript:void(0)"
                                                                  onclick="cloose1('menu_lszl_box')"></a></div>

    <div style="height: 399px; overflow-y: auto;" class="ls_box" id="lszl_scroll">


    </div>


</div>


<!--//第三个底滑战绩回顾版块开始-->
<div class="bottom_div hidden" id="zhanji_div">

    <div class="bottom_div_title" id="niugubuju_title"><h2>战绩回顾</h2><a href="javascript:void(0)"
                                                                       onclick="cloose1('zhanji_div')"></a></div>
    <div style="height:399px;" class="buju_box"   id="zhugubuju_scroll">
        <?php Live::shangchuan('/phone/images/zjhg.png'); ?>
        <img style="width:100%;" src="<?php echo $this->config->item('base_url'); ?>/phone/images/zjhg.png">
    </div>
</div>


<script src="<?php echo $this->config->item('base_url'); ?>/themes/v2/static/js/malertbox2.js"></script>

<script type="text/javascript">

    $('#sendMsgInput').keyup(function (event) {

        if (event.keyCode == 13) {

            $(".sub_btn").trigger("click");

            return false;

        }

    });

    function login() {

        postdata('loginform', "/index.php/user/login", 'show');

    }

    function show(d) {

        if (d.code == '1') {

            //$.jBox.tip(d.msg, 'success');

            layer.msg(d.msg, 2, 0);

            window.setTimeout(function () {

                parent.window.location.reload();

            }, 1000);

        } else {

            layer.msg(d.msg, 2, 0);

            //	$.jBox.tip(d.msg,'error');

        }

    }

    $('#bt_face').SinaEmotion($('#sendMsgInput'));


    function showCourse() {


        $("#pub_div").show();


    }


    function hide(that) {


        $("#" + that).hide();

    }


    $("#nav_service").mouseover(function () {


        $("#nav_qqList").show();


    });

    $("#nav_service").mouseout(function () {


        $("#nav_qqList").hide();


    });

    $("#nav_qqList").mouseout(function () {


        $("#nav_qqList").hide();


    });

    $("#nav_qqList").mouseover(function () {


        $("#nav_qqList").show();


    });


    $(function () {


        var w = $(window).width();


        if (w == 320) {

            $("#player").css({

                position: "absolute",

                width: "320px",

                height: "300px",

                right: "0"


            });

        }

        else if (w == 375) {

            $("#player").css({

                position: "absolute",

                width: "375px",

                height: "300px",

                right: "0"

            });

        }

        else if (w == 414) {

            $("#player").css({

                position: "absolute",

                width: "414px",

                height: "300px",

                right: "0"


            });

        }


    });


</script>

<script>

    var timeTask = setInterval(function () {

        var date = new Date();

        var h = date.getHours();

        var m = date.getMinutes();

        var s = date.getSeconds();

        if (h == 14 && m == 30 && s == 05) {

            callFunction();


        }

    }, 1000);

    function callFunction() {

        window.location.reload();

        clearInterval(timeTask);

    }

</script>


<script>

    var timeTask1 = setInterval(function () {

        var date = new Date();

        var h = date.getHours();

        var m = date.getMinutes();

        var s = date.getSeconds();

        if (h == 15 && m == 00 && s == 05) {

            callFunction1();


        }

    }, 1000);

    function callFunction1() {

        window.location.reload();


        clearInterval(timeTask1);

    }

</script>

</body>
</html>

