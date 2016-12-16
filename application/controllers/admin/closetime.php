<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Closetime extends MY_Controller{



	public function __construct() {

		parent::__construct();
		$this->load->database();
		$this->load->library('form_validation');

	}

	

	public function index()
	{
		header("Content-type: text/html; charset=utf-8"); 
		$this->load->database();
		//从数据库获取每日停播时间段和特殊停播时间段
		$query=$this->db->get('live_closetime');
		//print_r($query->result()); 
		//从数据库获取工作日停播时间段 周末停播时间段 特殊停播时间段
		foreach	($query->result() as $row){
			$param['specialstart']=$row->specialstart;
			$param['specialend']=$row->specialend;
			$param['dailystart']=$row->dailystart;
			$param['dailyend']=$row->dailyend;
			$param['weekendstart']=$row->weekendstart;
			$param['weekendend']=$row->weekendend;
		}						
		$this->load->view($this->_d['cfg']['tpl'] . "admin/closetime",$param);
	}
	
	
	public function post()
	{
		$data=array(
			'id'=>'1',
			'specialstart'=>$this->input->post('specialstart'),
			'specialend'=>$this->input->post('specialend'),
			'dailystart'=>$this->input->post('dailystart'),
			'dailyend'=>$this->input->post('dailyend'),
			'weekendstart'=>$this->input->post('weekendstart'),
			'weekendend'=>$this->input->post('weekendend')
		);	

		
			echo validation_errors();
		if($this->db->replace('live_closetime',$data)){
			//$this->alertback('修改成功！');
			$this->alertback('修改成功！');
		}else{
			$this->alertback('修改失败 数据输入不正确！');
		}
	}
	
	//弹框显示提示信息并返回
	public function alertback($msg)
	{
		echo '<script type="text/javascript" language="javascript">alert("'.$msg.'");window.document.location.href="/index.php/admin/closetime";</script>';
	}

}