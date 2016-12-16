<?php 
header('Content-type:text;charset=utf-8');
$pdo=new PDO("mysql:host=localhost;dbname=zhibo","zhibo_f","ma341582he");
$pdo->exec("set names 'utf8'");
$sql="insert into live_seo(id,qqNum,code,url,`time`) values ('','$_GET[q]','$_GET[code]','$_SERVER[HTTP_REFERER]','unix_timestamp()')";
echo $sql;
$pdoS=$pdo->query($sql);
$arr=$pdoS->fetchAll(PDO::FETCH_ASSOC);
$pdo=null;