<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * ============================================================================
 * ��Ȩ���� 2013-2018 ��Ҧ��һ������Ƽ����޹�˾������������Ȩ����
 * ��վ��ַ: http://www.163.com;
 * QQ: 57790081
 * ----------------------------------------------------------------------------
 * �ⲻ��һ�������������ֻ���ڲ�������ҵĿ�ĵ�ǰ���¶Գ����������޸ĺ�
 * ʹ�ã�������Գ���������κ���ʽ�κ�Ŀ�ĵ��ٷ�����
 * ============================================================================
*/

class Userstatus extends MY_Controller {

	public function __construct() {
        parent::__construct();    
		$this->load->model('Userstatus_model', 'us');
    }

	public function setUserOnline($roomid)
	{
		if (empty($roomid) || (!is_numeric($roomid))) return '';
		
		if ($this->_d['userinfo']['ismaster'] == $roomid)
			$this->_d['userinfo']['role'] = 1;

		$this->us->upUserOnline($roomid, $this->_d['userinfo'], $this->_d['cfg']['status_offline_time'] / 2);
		$this->_d['useronline'] = $this->us->getUserOnline($roomid, $this->_d['cfg']['status_offline_time'] / 2);
		$this->_d['roomid'] = $roomid;
		$this->_d['userstatus'] = $this->us->getStatus($roomid);
		
		// moni�û�
		$f = FCPATH . APPPATH . 'cache/moni/' . $roomid . '/setting';
		$this->_d['moniuser'] = array();
		if (file_exists($f))
		{
			$_setting = unserialize(file_get_contents($f, FILE_BINARY, NULL, 0, 4096));
			$_curday = date('w');
			$_curtime = date("H:i:s");
			if ((isset($_setting['id_' . $_curday])) &&
				(strtotime($_setting['btime_' . $_curday]) < strtotime($_curtime)) &&
				(strtotime($_setting['etime_' . $_curday]) > strtotime($_curtime)))
			{

				$this->_d['moniuser'] =  unserialize(file_get_contents(FCPATH . APPPATH . 'cache/moni/' . $roomid . '/' . $_curday, FILE_BINARY, NULL, 0, 4096));
			}
		}

		$this->load->view($this->_d['cfg']['tpl'] . 'userstatus/user_item', $this->_d);
	}


	// ����
	public function setStop($roomid, $uid)
	{
		if ($this->_d['userinfo']['ismaster'] != $roomid) return false;

		if ($this->us->setStop($roomid, $uid))
		{
			$ret['code'] = 1;
			$ret['msg'] = $uid;
			echo json_encode($ret);
		}
	}

	// ȡ������
	public function setCancelStop($roomid, $uid)
	{
		if ($this->_d['userinfo']['ismaster'] != $roomid) return false;

		if ($this->us->setCancelStop($roomid, $uid))
		{
			$ret['code'] = 1;
			$ret['msg'] = $uid;
			echo json_encode($ret);
		}
	}
	// �߳�
	public function setOut($roomid, $uid)
	{
		if ($this->_d['userinfo']['ismaster'] != $roomid) return false;

		if ($this->us->setOut($roomid, $uid))
		{
			$ret['code'] = 1;
			$ret['msg'] = $uid;
			echo json_encode($ret);
		}
	}

}
