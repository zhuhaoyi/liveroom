<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');class Chat extends MY_Controller {	public function __construct() {        parent::__construct();    		$this->load->model('Userinfo_model', 'u');		$this->load->model('Category_model', 'cate');		$this->load->model('Livechat_model', 'chat');		$this->load->model('Livemaster_model', 'm');		$this->load->model('Userstatus_model', 'us');    }	public function index()	{/*			$patterns = explode("\n", $this->_data['cfg']['word_filter']);			print_r($patterns);			exit;			foreach ($patterns as $k => $v) if (!empty($v)) $patterns[$k] = '/' . $v . '/i';			$replaces = array_fill(0, count($patterns), '*****');			print_r($patterns);			print_r($replaces);*/	}	public function setContent()	{		header("Access-Control-Allow-Origin:*");				if ($this->form_validation->run() == FALSE)		{			if (validation_errors() != '')			{				$retmsg['code'] = '0';				$retmsg['msg'] = validation_errors();								exit(json_encode($retmsg));			}		}		else		{			$postdata = $this->input->post();			$postdata['chatcontent'] = trim(html2text($postdata['chatcontent']));			if (($postdata['chatcontent'] == '') && ($postdata['imgthumb'] == ''))			{				$retmsg['code'] = '0';				$retmsg['msg'] = '内容不能为空';				exit(json_encode($retmsg));			}			$wordcount = strlen($postdata['chatcontent']);			if ($wordcount > 500)			{				$retmsg['code'] = '0';				$retmsg['msg'] = '最大只能输入200个字';								exit(json_encode($retmsg));			}						$patterns = explode("\n", $this->_d['cfg']['word_filter']);									foreach ($patterns as $k => $v) if (!empty($v)) $patterns[$k] = '/' . $v . '/i';  			$replaces = array_fill(0, count($patterns), '*****');			$postdata['chatcontent'] = preg_replace($patterns, $replaces, $postdata['chatcontent']);			$postdata['ctime'] = time();			/* 禁言相关处理  */            $search['chatname'] = $postdata['chatname'];						$chatdata = $this->chat->O($search,'status',0);            			$postdata['status'] = $chatdata['status'];						if($postdata['status'] == 2){				$this->chat->D($postdata);			}			/*			if($chatdata['status'] == 2){								$retmsg['code'] = '0';							$retmsg['msg'] = '您已经被禁言，请文明发言';												exit(json_encode($retmsg));			}*/			/*****************/			$this->load->model('admin/Config_model', 'conf');			$retdata = $this->conf->O(array('confkey'=>'isaudit'),'confval',0);			if ($retdata['confval'] == '1')			{				if (!empty($this->_d['userinfo']['ismaster']) && ($postdata['roomid'] == $this->_d['userinfo']['ismaster']))				{					$postdata['status'] = '1';				}				else				{					$postdata['status'] = '0';				}			}			if ($this->chat->A($postdata) > 0 )			{				$retmsg['code'] = '1';				if ($this->_d['cfg']['isaudit'] == '1')				{					if ($this->_d['userinfo']['ismaster'] != $postdata['roomid'])					{						$retmsg['msg'] = '内容已经成功发布，需要管理员审核才会显示信息！'; //$this->lang->line('reg_content_success');					}					else					{						$retmsg['msg'] = '内容已经成功发布.';					}				}				else				{					$retmsg['msg'] = '内容已经成功发布.';				}				// 开启消息即时返回				$post = $this->input->post();//edgeto 2016-08-13				$iswap = $post['iswap'];				$retmsg['content'] = $this->load->module('live/chat/getitem', array($postdata['masterid'],$postdata['lastchatid'],$iswap,), true);				//手机站返回 2016/08/10 15:00				$retmsg['data'] = array(					'audit'=>$postdata['lastchatid'],					'chatname'=>$postdata['chatname'],					'chatcontent'=>$postdata['chatcontent'],					'time'=>date('H:i'),				);				exit(json_encode($retmsg));			}			else			{				$retmsg['code'] = '0';				$retmsg['lasttime'] = time();								$retmsg['msg'] = $this->lang->line('reg_content_fail');				exit(json_encode($retmsg));			}		}	}}/* End of file welcome.php *//* Location: ./application/controllers/welcome.php */