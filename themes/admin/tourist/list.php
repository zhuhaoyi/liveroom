<?php $this->load->view($this->_d['cfg']['tpl_admin'] . 'public/header')?>
<script>
function DrawImage(ImgD,iwidth,iheight){
    //参数(图片,允许的宽度,允许的高度)
    var image=new Image();
    image.src=ImgD.src;
    if(image.width>0 && image.height>0){
    if(image.width/image.height>= iwidth/iheight){
        if(image.width>iwidth){  
        ImgD.width=iwidth;
        ImgD.height=(image.height*iwidth)/image.width;
        }else{
        ImgD.width=image.width;  
        ImgD.height=image.height;
        }
        ImgD.alt=image.width+"×"+image.height;
        }
    else{
        if(image.height>iheight){  
        ImgD.height=iheight;
        ImgD.width=(image.width*iheight)/image.height;        
        }else{
        ImgD.width=image.width;  
        ImgD.height=image.height;
        }
        ImgD.alt=image.width+"×"+image.height;
        }
    }
}
</script>
<div class="so_main">
  <div class="page_tit">游客管理</div>

  <div id="searchContent_div" style="display:none;">
  	<div class="page_tit">搜索游客 [ <a href="javascript:void(0);" onclick="searchContent();">隐藏</a> ]</div>
	
	<div class="form2">
	 <form id="form3" name="form3" action="<?php echo site_url("admin/tourist/serach");?>" method="post">
    <dl class="lineD">
      <dt>游客搜索：</dt>
      <dd>
        <input name="content" id="content" type="text" value="<?php echo $content?>">
      </dd>
    </dl>
    
    <div class="page_btm">
      <input type="submit" class="btn_b"  value="确定" />
    </div>
	</form>
  </div>
  </div>
  <!-------- 个人会员列表 -------->
  <div class="Toolbar_inbox">
  	<div class="page right"></div>
	<!-- <a  class="btn_a"  onclick="delmore()"><span>删除游客</span></a> -->
	<a href="javascript:void(0);" class="btn_a" onclick="searchContent();">
		<span class="searchContent_action">搜索游客</span>
	</a>
  </div>
  <div class="list">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <th style="width:50px;">
		<input type="checkbox" id="checkbox_handle" onclick="checkAll(this)" value="0">
    	<label for="checkbox"></label>
	</th>
    <th class="line_l" width="35%">ID</th>
	<th class="line_l" width="35%">发布帐号</th>
    <th class="line_l" width="35%">操作</th>
  </tr>
	  <form id="form1" name="form1" action="" method="post">
		<?php if(!empty($list)) {?>
		<?php foreach ($list as $k=>$v) {?>
		<tr overstyle='on' id="user_1">
			<td><input type="checkbox" name="chatid[]" id="checkbox2" onclick="checkon(this)" value="<?php echo $v['chatid']; ?>"></td>
			<td><?php echo $v['chatid']; ?></td>
			<td><?php echo $v['chatname']; ?></td>
			<td><a href="javascript:delContent(<?php echo $v['chatid']; ?>);" class="sgbtn">
				<?php if($v['del_flg'] == '0'){echo '禁言';}else{echo '放行';}?>
			</a></td>
		</tr>
		<?php } }?>
		<td colspan="9"><div class="page"><?php echo $fenye;?></div></td>
		</form>
	</table>
  </div>


  <div class="Toolbar_inbox">
  	<div class="page right"></div>
	<!-- <a  class="btn_a"  onclick="delmore()"><span>删除游客</span></a> -->
	<a href="javascript:void(0);" class="btn_a" onclick="searchContent();">
		<span class="searchContent_action">搜索游客</span>
	</a>
  </div>

<script type="text/javascript">
//鼠标移动表格效果
	$(document).ready(function(){
		$("tr[overstyle='on']").hover(
		  function () {
		    $(this).addClass("bg_hover");
		  },
		  function () {
		    $(this).removeClass("bg_hover");
		  }
		);
	});
	
	function checkon(o){
		if( o.checked == true ){
			$(o).parents('tr').addClass('bg_on') ;
		}else{
			$(o).parents('tr').removeClass('bg_on') ;
		}
	}
	
	function checkAll(o){
		if( o.checked == true ){
			$('input[name="chatid[]"]').attr('checked','true');
			$('tr[overstyle="on"]').addClass("bg_on");
		}else{
			$('input[name="chatid[]"]').removeAttr('checked');
			$('tr[overstyle="on"]').removeClass("bg_on");
		}
	}

	//获取已选择内容的ID数组
	function getChecked() {
		var uids = new Array();
		$.each($('table input:checked'), function(i, n){
			uids.push( $(n).val() );
		});
		return uids;
	}

	//搜索内容
	var isSearchHidden = 1;
	function searchContent() {
		if(isSearchHidden == 1) {
			$("#searchContent_div").slideDown("fast");
			$(".searchContent_action").html("搜索完毕");
			isSearchHidden = 0;
		}else {
			$("#searchContent_div").slideUp("fast");
			$(".searchContent_action").html("搜索游客");
			isSearchHidden = 1;
		}
	}
	
	function folder(type, _this) {
		$('#search_'+type).slideToggle('fast');
		if ($(_this).html() == '展开') {
			$(_this).html('收起');
		}else {
			$(_this).html('展开');
		}
		
	}

function delContent(chatid)
{   
	var submit = function (v, h, f) {
		
		if (v == 'ok')
			$.get("<?php echo site_url('admin/tourist/del');?>"+"/"+chatid, 
			function(d){
				var data = eval('('+d+')');
				wshow(data);

			});
			
		else if (v == 'cancel')
//			jBox.tip(v, 'info');
		return true; //close
	};

	$.jBox.confirm("确定删除该游客吗？", "提示", submit);

}

</script>
<?php $this->load->view( $this->_d['cfg']['tpl_admin'] . 'public/footer')?>
