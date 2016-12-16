<?php
if (!empty($useronline)) { 

foreach($useronline as $k => $v) {?>
		<?php if (!empty($userstatus[$v['userid']]['vtime'])
					&& ($userstatus[$v['userid']]['vtime'] > time())
					&& ($userstatus[$v['userid']]['status'] == '1')
				) { continue; } ?>


<li id="u_<?php echo $v['userid'] ?>" uid="" rid="" name="<?php echo $v['name']?>" ip="undefined" class="member_message"
      <?php if($v['role'] == '1') echo 'style="display: none;" class="manager"'; ?> >
	  <span class="member_name"> <?php echo $v['name']?> </span>
		<?php if ($v['role'] == '1') { if($v['level']=='0'){?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/1gly.png" title="房间管理员">
			<?php } else if($v['level']=='1'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_11.png" title="老师助理">
			<?php } else if($v['level']=='2'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/7khjl.png" title="客服经理">
			<?php } else if($v['level']=='4'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="讲师">
			<?php } else {?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="客服">
			<?php } ?>
		<?php } else if ($v['role'] == '-1') { if($v['level']=='0'){?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_1.png" title="普通会员">
			<?php } else if($v['level']=='1'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_2.png" title="白银VIP">
			<?php } else if($v['level']=='2'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_3.png" title="黄金VIP">
			<?php } else if($v['level']=='3'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_4.png" title="铂金会员">
			<?php } else if($v['level']=='4'){ ?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_5.png" title="钻石会员">
			<?php }elseif($v['level']==5){?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_6.png" title="至尊会员">
			<?php }elseif($v['level']==6){?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_7.png" title="财主会员">
			<?php }elseif($v['level']==7){?>
			<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/8th.png" title="直播客服">
		    <?php  } else if ($v['level'] == '-1') {?>
		    <img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_0.png" title="游客">
		    <?php }
		     } ?>
		<div class="clearfix"></div>
</li>
<?php } ?>
<?php } ?>


<?php if (!empty($moniuser)) { 
		foreach ($moniuser as $k => $v) { ?>
		 <li id="" uid="" rid="" name="游客<?php echo $v ?>" ip="undefined" class="member_message">		
		    <span class="member_name">游客<?php echo $v ?></span>
		 	<img class="roleimg" src="<?php echo $this->config->item('base_url');?>/images/dengji_0.png" title="游客">	
		 <div class="clearfix"></div>
		 </li>		
<?php }
} ?>


<script>
$("#usertotal").html(<?php echo count($useronline) + count($moniuser) ?>);

var member_number=document.getElementById("member_number");
member_number.innerText=<?php echo count($useronline) + count($moniuser) ?>;
</script>