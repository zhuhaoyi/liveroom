<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * ============================================================================
 * 版权所有 2013-2018 余姚市一洋网络科技有限公司，并保留所有权利。
 * 网站地址: http://www.163.com;
 * QQ: 57790081
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
*/

/**
* 广告管理功能
*/

class Advertising extends MY_Controller{

	var $_data = array();

	public function __construct() {
		parent::__construct();
		$this->load->model('Advertising_model','p');		
		$this->load->model('Category_model','cate');		
		$this->load->library('form_validation');
	}
	
	public function index()
	{
		$this->tlist();
	}

	public function tlist($func = 'advertising')
	{
		$data = $this->cate->getCateData($func,'all');
		$this->_data['list'] = cate2list(0, $data);
		$this->_data['func'] = $func;
		$this->load->view('admin/advertising/list', $this->_data);
	}

	public function edit($cateid = '')
	{
		if (empty($cateid))
		{
			$retmsg['code'] = '0';
			$retmsg['msg'] = $this->lang->line('admin_page_lostcateid');
			exit(json_encode($retmsg));		
		}

		$this->_data['row'] = $this->p->O(array('cateid'=>$cateid));
		if ($this->form_validation->run('news/add') == false)
		{
			if (validation_errors() != '')
			{
				$retmsg['code'] = '0';
				$retmsg['msg'] = validation_errors();
				exit(json_encode($retmsg));
			}
			
			if (empty($this->_data['row']))
			{
				$this->_data['row'] = $this->p->INIT();
				$this->_data['row']['cateid'] = $cateid;
			}

			$this->_data['act'] = 'edit';		
			$this->_data['adtype'] = array2option($this->config->item('adtype'), $this->_data['row']['adtype']);
			$this->load->view('admin/advertising/detail', $this->_data);
		}
		else
		{
			$postdata = $this->input->post();
			if (empty($this->_data['row']))
			{
				$postdata['ctime'] = time();
				$postdata['cateid'] = $cateid;
				if ($this->p->A($postdata) > 0)
				{
					$retmsg['code'] = '1';
					$retmsg['msg'] =  $this->lang->line('comm_sucess_tip');
					exit(json_encode($retmsg));
				}
				else
				{
					$retmsg['code'] = '0';
					$retmsg['msg'] = $this->lang->line('comm_fail_tip');
					exit(json_encode($retmsg));
				}				
			}
			else
			{
				$postdata['mtime'] = time();
				if ($this->p->M($postdata, array('cateid'=>$cateid)) === true)
				{
					$retmsg['code'] = '1';
					$retmsg['msg'] = $this->lang->line('comm_sucess_tip');
					exit(json_encode($retmsg));
				}
				else
				{
					$retmsg['code'] = '0';
					$retmsg['msg'] = $this->lang->line('comm_fail_tip');
					exit(json_encode($retmsg));
				}			
			}
		}
	}	
}

?>
