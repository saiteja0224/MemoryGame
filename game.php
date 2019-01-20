<?php
$my_con =mysql_connect("localhost","admin","");
mysql_select_db("saiteja",$my_con);
$a=$_GET['name'];
$a1=$_GET['sr'];
$q= "insert into konda values('a','a1')";
$res = mysql_query($q);
mysql_close($my_con); 