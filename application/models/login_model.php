<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login_model extends MY_Model{
	public function __constract()
	{
		$this->load->database();
	}
	
	//验证用户名和密码
	public function getUserinfo($id,$password){
		$sql = "select * from live_userinfo_base where username='".$id."'";
		$query = $this->db->query($sql);
		$result=$query->result_array();
		if(!$result){
			//var_dump($query->result_array());
			return '用户名不存在，请重新输入';
		}else
			if($result[0]['passwd']==$password){
				//若登录成功 则把用户名和用户等级写入cookie
				setcookie('username',$result[0]['name'],time()+86400,'/');
				setcookie('userid',$id,time()+86400,'/'); 
				setcookie('level',$result[0]['level'],time()+86400,'/'); 
				return '登录成功';			
			}else{
				return '密码错误，请检查后重新输入';
			}

	}
	
}
?>