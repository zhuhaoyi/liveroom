<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Lessons extends MY_Controller{



	public function __construct() {

		parent::__construct();


	}

	

	public function index()
	{
		echo '课程安排管理';
	}



}