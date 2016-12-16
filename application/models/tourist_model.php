<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Tourist_model extends MY_Model{
	
	public function __construct() {
		parent::__construct();
		$this->tbl = 'live_chatcontent';
		$this->tbl_key = 'chatid';
		$this->tbl_ext = '';
	}
	/*游客列表页*/
	public function getchat(){
		$sql = "select chatid,chatname,del_flg from " .$this->tbl. " where del_flg = '0' or del_flg='1' group by chatname order by chatid desc";
		
		$query = $this->db->query($sql);

		return $query->result_array();
	}
	
	/*以游客的chaid查询出一条数据*/
	public function chatid($chatid){
		$sql = "select * from " .$this->tbl. " where chatid='$chatid'";
		$query = $this->db->query($sql);
		return $query->result_array();
	}
	
	/*2016-9-6 操作live_chatcontent表来禁言，以用户为条件   $data:修改的字段1代表放行0代表禁言; $cdata:where字句的条件;操作者：徐涛*/
	function H($data, $cdata)
    {   
		$sql = "update  " .$this->tbl. " set del_flg='$data' where chatname='$cdata'";
		$query = $this->db->query($sql);
		
	
    }
	
	/*搜索游客*/
	public function serachchatname($serachname){
		//var_dump($chatname);exit;
		$sql = "select chatid,chatname,del_flg from " .$this->tbl. " where chatname like'%".$serachname."%' group by chatname order by chatid desc";
		
		$query = $this->db->query($sql);

		return $query->result_array();
	}
	
	/*分页*/
	/*
    @page 当前第几页数据
    @page_count每页显示的数据
    @all_num总共的数量
    @data 查询出来的数组*/

   /* public function page_array($page,$page_count,$all_num,$data){
		if(!$page){
            $page = 1 ;
        }
		//echo $page.'---'.$page_count.'---'.$all_num.'---'.$data;exit;
        $page_num = ceil($all_num/$page_count); //总共几页
        if($page>=$page_num){
            $page = $page_num ;
        }
        $start = ($page-1)*$page_count; //从哪里开始
        return array_slice($data,$start,$page_count) ;
	}*
/*
    @page 当前第几页数据
    @page_count每页显示的数据
    @all_num总共的数量
*/
	/*public function page_string($page,$page_count,$all_num){
		$next_page = $page +1 ;
		$cur_page = $page - 1 ;
		if($cur_page<=0){
			$cur_page = 1 ;
		}
		if($next_page >ceil($all_num/$page_count)){
			$next_page = ceil($all_num/$page_count);
		}
		return "<a href=?page={$cur_page}>上一页</a>|<a href=?page={$next_page}>下一页</a>" ; 
	}
	*/
	
	
	/**
	 * 数组分页函数 核心函数 array_slice
	 * 用此函数之前要先将数据库里面的所有数据按一定的顺序查询出来存入数组中
	 * $count  每页多少条数据
	 * $page  当前第几页
	 * $array  查询出来的所有数组
	 * order 0 - 不变   1- 反序
	 */
	public function page($count,$page,$array){
		//global $countpage; #定全局变量
		$page=(empty($page))?'1':$page; #判断当前页面是否为空 如果为空就表示为第一页面 
		$start=($page-1)*$count; #计算每次分页的开始位置
		 
		$totals=count($array); 
		$countpage=ceil($totals/$count); #计算总页面数
		return array_slice($array,$start,$count);
		//var_dump($pagedata);
	}
	
	/**
	 * 分页及显示函数（列表页用的分页）
	 * $countpage 全局变量，照写
	 * $url 当前url
	 */
	public function show_array($page,$count,$array){
		$totals=count($array); 
		$count=ceil($totals/$count); #计算总页面数
	    $pages=empty($_GET['page'])?1:$_GET['page'];
		
		if($pages > 1){
			$uppage=$pages-1;
		}else{
			$uppage=1;
		}
		if($pages < $count){
			$nextpage=$pages+1;
		}else{
			$nextpage=$count;
		}
		
		$str="<span>共 {$count} 页 / 第 {$pages} 页</span>";
		$str.="<span><a href='?page=1'>  首页 </a></span>";
		$str.="<span><a href='?page={$uppage}'> 上一页 </a></span>";
		$str.="<span><a href='?page={$nextpage}'>下一页 </a></span>";
		$str.="<span><a href='?page={$count}'>尾页 </a></span>";
		return $str;
	}
	
	/**
	 * 分页及显示函数(搜索用的分页)
	 * $countpage 全局变量，照写
	 * $url 当前url
	 */
	public function serach_array($page,$count,$array){
		$totals=count($array); 
		$count=ceil($totals/$count); #计算总页面数
	    $pages=empty($_GET['page'])?1:$_GET['page'];
		if($pages > 1){
			$uppag=$pages-1;
		}else{
			$uppag=1;
		}
		if($pages < $count){
			$nextpag=$pages+1;
		}else{
			$nextpag=$count;
		}
		
		$st="<span>共 {$count} 页 / 第 {$pages} 页</span>";
		
		$st.="<span><a href='?paging=1'>  首页 </a></span>";
		
		$st.="<span><a href='?paging={$uppag}'> 上一页 </a></span>";
		
		$st.="<span><a href='?paging={$nextpag}'>下一页 </a></span>";
	
		$st.="<span><a href='?paging={$count}'>尾页 </a></span>";
		
		return $st;
	}
	
}
?>