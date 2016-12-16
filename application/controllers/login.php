<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * ============================================================================
 * 版权所有 2013-2018 余姚市一洋网络科技有限公司，并保留所有权利。
 * QQ: 76314154
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
*/
/**
 * 静态页面
 */
class Login extends MY_Controller {	

	public function __construct()
    {
        parent::__construct();
        $this->load->model('login_model');
		$this->load->helper('url_helper');
		$this->load->helper('cookie');
    }

	//登录并把用户名和用户等级写入cookie
	public function index()
	{	
		//获取表单信息
		$username=$this->input->post('id');
		$password=$this->input->post('password');
		$result=$this->login_model->getUserinfo($username,md5($password));	
		$data['message']=$result;
		$this->load->view($this->_d['cfg']['tpl'] . "user/login", $data);
	}	
	
	//退出登录 清空cookie
	public function out()
	{	
		
		setcookie('userid','',time()-1000,'/'); 
		setcookie('level','',time()-1000,'/');
		setcookie('username','',time()-1000,'/');  
		$data['message']='已成功退出登录';
		$this->load->view($this->_d['cfg']['tpl'] . "user/logout", $data);
	}
}