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
 */
class Download extends MY_Controller {

	public function __construct() {
        parent::__construct();
		$this->load->model('Pages_model','pg');
		$this->load->model('Category_model','c');
		$this->_d['menu'] = '79';
    }

	// 下载中心
	public function page($cateid='')
	{
		$download_cate = $this->c->L(array('parentid'=>'106','status'=>'1'),'cateid,catename',0,0,'sort');
		$this->_d['download_cate'] = $download_cate;

		if ($cateid == '') $cateid = $download_cate[0]['cateid'];
		$this->_d['cateid'] = $cateid;
		$download_cate_t = cate2array($download_cate,'cateid');
		$this->_d['catename'] = $download_cate_t[$cateid]['catename'];
		
		$this->_p['pagenumb'] = 30;
		$sdata['cateid'] = $cateid;
		$sdata['status'] = 1;
		$download = $this->pg->L($sdata,'pageid,title,desc,content,ctime',$this->_p['pagenumb'], ($this->_p['pagecur'] == 0) ? 0 : ($this->_p['pagecur']-1) * $this->_p['pagenumb'],'ctime','desc');
		
		$this->_p['pagecount'] = $this->input->post('pagecount');
		if (empty($this->_p['pagecount'])) 
		{
			$this->_p['pagecount'] = $this->pg->C($sdata);
		}
		$this->_d['page'] = eyPage($this->_p,$sdata);
		$this->_d['pagecount'] = $this->_p['pagecount'];
		
		$this->_d['download'] = $download;
		$this->_d['cateid'] = $cateid;
		$this->load->view("themes/feibei/download", $this->_d);
	}

	public function detail($cateid='',$pgid='')
	{
		$download_cate = $this->c->L(array('parentid'=>'106','status'=>'1'),'cateid,catename',0,0,'sort');
		$this->_d['download_cate'] = $download_cate;
		$download_cate_t = cate2array($download_cate,'cateid');
		$this->_d['catename'] = $download_cate_t[$cateid]['catename'];

		$row = $this->pg->O(array('pageid'=>$pgid));
		$this->_d['cateid'] = $cateid;
		$this->_d['row'] = $row;
		$this->load->view("themes/feibei/download_detail", $this->_d);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */