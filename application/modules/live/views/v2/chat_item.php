<?php if(!empty($chatlist)){
	echo '<script type="text/javascript">';
    echo "$('.content_talk').scrollTop($('.content_talk')[0].scrollHeight)";
	echo '</script>';
} ?>


<?php

if (!empty($chatlist)) {

	if($iswap == 0){
   
		foreach($chatlist as $k => $v) {?>

			<li id="audit_<?php echo $v['chatid']?>" class="talk_message">		

				<?php if($v['level']==0){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_1.png" title="普通会员">

				<?php }elseif($v['level']==1){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_2.png" title="白银VIP">

				<?php }elseif($v['level']==2){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_3.png" title="黄金VIP">

				<?php }elseif($v['level']==3){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_4.png" title="铂金会员">

				<?php }elseif($v['level']==4){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_5.png" title="钻石会员">

				<?php }elseif($v['level']==5){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_6.png" title="至尊会员">

				<?php }elseif($v['level']==6){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_7.png" title="财主会员">

				<?php }elseif($v['level']==7){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/8th.png" title="直播客服">

					<style type="text/css">

					#audit_<?php echo $v['chatid']?> .text_chat p{color: #FB0000;}

					</style>
				<?php }elseif($v['level']==-2){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/1gly.png" title="房间管理员">

				<?php }elseif($v['level']==-3){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_11.png" title="老师助理">

				<?php }elseif($v['level']==-4){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/7khjl.png" title="客服经理">

				<?php }elseif($v['level']==-6){?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="讲师">

				<?php }else{?>

					<img class="level_img" src="<?php echo $this->config->item('base_url');?>/images/dengji_0.png" title="游客">

				<?php } ?>
				
				

				<div class="talk_item">

				 <a class="people" rid="224" uid="4405">
					<span class="people_name"><?php echo $v['chatname']?></span>
					<span class="time"><?php echo date("[H:i]", $v['ctime'])?></span>
					<div class="clearfix"></div>
				 </a>
				 </div>
				 <div class="text_chat">
                 <p><?php if($v['del_flg'] == 0 ){
							$content=$v['chatcontent'];							
					          echo @$content;
							 } ?>														
				</p>						 
  </div>
  <div class="clearfix"></div>
			 </li>
			 

<?php    
		}

	}


?>

<script type="text/javascript">

	$("#lastchatid").val('<?php echo empty($v["chatid"]) ? 0 : $v["chatid"]?>');

</script>

<?php } elseif($nextid > 0){  

  echo '<script type="text/javascript">';

  echo '$("#lastchatid").val('.$nextid.')';

  echo '</script>';

 } ?>

