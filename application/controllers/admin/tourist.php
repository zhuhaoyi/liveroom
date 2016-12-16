<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tourist extends 	MY_Controller{
	public function __construct() {
		parent::__construct();
		$this->load->model('tourist_model', 'tourist');
		$this->load->library('form_validation');
		if ($this->isAdmin() == false) redirect("admin/login");
	}
	
	public function index(){
		$this->tourist();
	}
	/**游客列表页*/
	public function tourist(){
		$list = $this->tourist->getchat();
	
		$page = intval($_GET['page']) ;
		//$d = $this->tourist->page_array($page,20,count($list),$list);
		
		//$fenye = $this->tourist->page_string($page,20,count($list));
		
		$d = $this->tourist->page(15,$page,$list);
		
		$fenye = $this->tourist->show_array($page,15,$list);
		$this->_d['fenye'] = $fenye;
		$this->_d['list'] = $d;
		$this->load->view($this->_d['cfg']['tpl_admin'] . 'tourist/list',$this->_d);
	}
	
	
	/*游客禁言*/
	public function del($chatid)
	{
		
		$data = $this->tourist->chatid($chatid);
		if($data['0']['del_flg'] == '0'){
			$chatname = $data['0']['chatname'];
			$del_flg = '1';
		}else{
			$chatname = $data['0']['chatname'];
			$del_flg = '0';
		}
		
		$this->tourist->H($del_flg,$chatname);
		
		
		/*$this->chat->D($sdata);
		$admininfo = $this->isAdmin();
		
		$this->action_log('1',$admininfo['user_id'],"删除游客",$content['chatcontent']);
		$retmsg['code'] = '1';
		$retmsg['msg'] = $this->lang->line('comm_sucess_tip');*/
		
	}
	
	/*搜索游客*/
	public function serach(){
		$chatname = $this->input->post();
		$page = intval($_GET['page']) ;
		$serachname = $chatname['content'];
		$str = $this->tourist->serachchatname($serachname);
		
	
		$res = $this->tourist->page(5,$page,$str);
		
		$fenye = $this->tourist->serach_array($page,5,$str);
		$this->_d['fenye'] = $fenye;
		$this->_d['list'] = $res;
		$this->load->view($this->_d['cfg']['tpl_admin'] . 'tourist/list',$this->_d);
	}
		
}
?>