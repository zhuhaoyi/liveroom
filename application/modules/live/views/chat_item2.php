<?php
if (!empty($chatlist)) {
foreach($chatlist as $k => $v) {?>
		

		 <div class="chat_box_li clearfix" id="audit_<?php echo $v['chatid']?>">
		  <div class="fl">
		    <div class="chat_time fl box_Fillet3"><?php echo date("[H:i]", $v['ctime'])?><!-- ʱ�� --></div>

            <!-- ͷ�� -->
            <?php if($v['level']==0){?>
		    <img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/15hy.png"  title="��ͨ��Ա">
		    <?php }elseif($v['level']==1){?>
		    <img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/14byVIP.png"  title="����VIP">
		    <?php }elseif($v['level']==2){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/13hjVIP.png" title="�ƽ�VIP">
			<?php }elseif($v['level']==3){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/12bjVIP.png" title="�����Ա">
			<?php }elseif($v['level']==4){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="��ʯ��Ա">
			<?php }elseif($v['level']==5){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/10zzVIP.png" title="�����Ա">
			<?php }elseif($v['level']==6){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/9cz.png" title="������Ա">
			<?php }elseif($v['level']==7){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/8th.png" title="������Ա">
            <style type="text/css">
#audit_<?php echo $v['chatid']?> div div{color: #FB0000;}
</style>
			<?php }elseif($v['level']==-3){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/6lszl.png" title="��ʦ����">
			<?php }elseif($v['level']==-4){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/static/images/7khjl.png" title="�ͷ�����">
			<?php }elseif($v['level']==-6){?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url');?>/themes/v2/images/visitorlist_icon_member2.png" title="��ʦ">

			<?php }else{?>
			<img class="chat_photo fl" width="22" height="22" src="<?php echo $this->config->item('base_url')