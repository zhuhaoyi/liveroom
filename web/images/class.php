<?php 
header('Content-type:text;charset=utf-8');
$pdo=new PDO("mysql:host=localhost;dbname=zhibo","zhibo_f","ma341582he");
$pdo->exec("set names 'utf8'");
$sql="select * from live_seo";
$pdoS=$pdo->query($sql);
$arr=$pdoS->fetchAll(PDO::FETCH_ASSOC);
$pdo=null;
  echo "<table width='80%' border='1' cellspacing='0' cellpadding='0' align='center'>";
  echo "<tr>";
	   echo "<th>编号</th>";
	   echo "<th>手机号码</th>";
	   echo "<th>股票代码/姓名</th>";
	   echo "<th>来源网站</th>";
           echo "<th>访问时间</th>";
  echo "</tr>"; 
   foreach($arr as $k=>$v){
	   echo "<tr>";
	   echo "<td>{$v['id']}</td>";
	   echo "<td>{$v['qqNum']}</td>";
	   echo "<td>{$v['code']}</td>";
	   echo "<td>{$v['url']}</td>";
           echo "<td>{$v['timem']}</td>";
	   echo "</tr>";   
   }
   echo "</table>";
?>