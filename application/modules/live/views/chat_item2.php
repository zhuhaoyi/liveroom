<?php
if (!empty($chatlist)) {
foreach($chatlist as $k => $v) {?>
		

		 <div class="chat_box_li clearfix" id="audit_<?php echo $v['chatid']?>">
		  <div class="fl">
		    <div class="chat_time fl box_Fillet3"><?php echo date("[H:i]", $v['ctime'])?><!-- 时间 --></div>

            <!-- 头像 -->
            <?php if($v['level']==0){?>
		    <img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/15hy.png"  title="普通会员">
		    <?php }elseif($v['level']==1){?>
		    <img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/14byVIP.png"  title="白银VIP">
		    <?php }elseif($v['level']==2){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/13hjVIP.png" title="黄金VIP">
			<?php }elseif($v['level']==3){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/12bjVIP.png" title="铂金会员">
			<?php }elseif($v['level']==4){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="钻石会员">
			<?php }elseif($v['level']==5){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/10zzVIP.png" title="至尊会员">
			<?php }elseif($v['level']==6){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/9cz.png" title="财主会员">
			<?php }elseif($v['level']==7){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/8th.png" title="土豪会员">
            <style type="text/css">
#audit_<?php echo $v['chatid']?> div div{color: #FB0000;}
</style>
			<?php }elseif($v['level']==-3){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/6lszl.png" title="老师助理">
			<?php }elseif($v['level']==-4){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/7khjl.png" title="客服经理">
			<?php }elseif($v['level']==-6){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="讲师">

			<?php }else{?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url')