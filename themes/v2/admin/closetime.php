<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="css/zbs.css" rel="stylesheet" type="text/css" />
<style type="text/css">
td,tr,table{
	border:0px;
}
body{
	font-size:12px;
}
td{
	height:30px;
}
</style>

</head>

<body>
<form action="/index.php/admin/closetime/post" method="post">
<table border="0" style="margin-left:15px; margin-top:10px;">
  <tr>
    <td colspan="4"><b>工作日停播时间段</b></td>
    </tr>
    <tr>
    <td width="55">开始时间</td>
    <td width="200"><input type="text" name="dailystart" value="<?php echo $dailystart; ?>" /></td>
    <td width="80">次日结束时间</td>
    <td width="200"><input type="text" name="dailyend" value="<?php echo $dailyend; ?>" /></td>
  </tr>
  <tr>
    <td colspan="4"><b>周末停播时间段</b></td>
  </tr>
  <tr>
    <td>开始时间</td>
    <td><input type="text" name="weekendstart" value="<?php echo $weekendstart; ?>" /></td>
    <td>次日结束时间</td>
    <td><input type="text" name="weekendend" value="<?php echo $weekendend; ?>" /></td>
  </tr>
  <tr>
    <td colspan="4"><b>特殊停播时间段</b></td>
  </tr>
  <tr>
    <td>开始时间</td>
    <td><input type="text" name="specialstart" value="<?php echo $specialstart; ?>" /></td>
    <td>结束时间</td>
    <td><input type="text" name="specialend" value="<?php echo $specialend; ?>" /></td>
  </tr>
</table>
<input type="submit" value="提交"  style="margin-left:15px; margin-top:10px;"/>
</form>

</body>
</html>