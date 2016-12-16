<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录</title>
<script type="text/javascript">
 function SetCookie(name, value, expires, path, domain, secure) {
            document.cookie = name + "=" + encodeURI(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        }

        function DeleteCookie(name) {
            var date = new Date();
            date.setTime(date.getTime() - 10000); //删除一个cookie，就是将其过期时间设定为一个过去的时间
            document.cookie = name + "=删除" + "; expires=" + date.toUTCString();
            //document.cookie = " " + name + "=删除" + "; expires=" + date.toGMTString();
        }
	DeleteCookie('userid');
	DeleteCookie('level');
	
　　setTimeout("window.location.href='/'",1300);

</script>
<style type="text/css">
body{
	background-color:#000539;
	color:#FFF;
	text-align:center;
}
div{
	position:absolute;
	top:50%;
	text-align:center;
	width:100%;
	font-size:3em;
}
</style>
</head>

<body>
<div>
<?php echo $message; ?>
</div>
</body>
</html>

























