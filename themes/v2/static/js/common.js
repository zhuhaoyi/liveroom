//-------------	����߶� -------------	
var windowHeight = $(window).height();
/**
 * ͨ��JS�ļ�
 */
Cms = {};
/**
 * �������
 */
Cms.viewCount = function(base, contentId, viewId, commentId, downloadId, upId,
		downId) {
	viewId = viewId || "views";
	commentId = commentId || "comments";
	downloadId = downloadId || "downloads";
	upId = upId || "ups";
	downId = downId || "downs";
	$.getJSON(base + "/content_view.jspx", {
		contentId : contentId
	}, function(data) {
		if (data.length > 0) {
			$("#" + viewId).text(data[0]+500);
			$("#" + commentId).text(data[1]);
			$("#" + downloadId).text(data[2]);
			$("#" + upId).text(data[3]);
			$("#" + downId).text(data[4]);
		}
	});
}

/**
 * SEOͳ�ƴ���
 * 
 * @param o
 * @param n
 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?5d0d873d6088a65ba7c9902fe26c4a57";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


// �����л�
/*function jeeNav(o,n){
	 o.className="selected";
	 var t;
	 var id;
	 var s;
	 for(var i=1;i<=n;i++){
	   id ="nav"+i;
	   t = document.getElementById(id);
	   s = document.getElementById("sub"+i);
	   if(id != o.id){
	   	 t.className="hide";
	   	 s.style.display = "none";
	   }
	   else{
			s.style.display = "block";
	   }
	 }
}

function strReplace(str,len,o) {
	if (str.length > len) {
		str = str.substr(0,len) + o;
	}
	return str;
}*/


// ƴװ��Ʊ����
var stock_codes = "";
function getStockCode(codes){
	var returnCodes = "";
	var strs = codes.split(";");
	// ����ÿ����Ϣ���
	for(i=0; i<strs.length-1; i++){
		// ����ÿ����Ϣ�Ķ����ظ���
		var isMore = strs[i].split(",");
		if(isMore.length>0){
			var vi = "";
			for(var k = 0 ; k < isMore.length; k++){
				var code = isMore[k]+"";
				if(code.length>0){
					if(code.substring(0,2)=='60')// ��
				    {
						code = "sh"+code;
				    }else{
				    	code = "sz"+code;
				    }
					returnCodes+=code+",";
				}
			}
		}
	}
	stock_codes = returnCodes.replace(/(^\s*)|(\s*$)/g,'');
}

var lastDate = "";	// ��Ϣ������ڿ��Ʊ���

// ˢ����Ϣ���-��Ϣ����б�ҳר��
function reflushInfoIndex1() {
	var lastId = $('.Message_box_r_box').eq(0).attr('id');
	lastId = lastId ==null ? "0" : lastId;
	// lastId :���ID days:Ĭ��ȡ�����ڵ�����
	var params = {"lastId":lastId,"days":"3"};
	var code_array = "";	// ��Ϣ�ɼ�����
	var eachId_array = ""; 	// ������λÿ����Ϣ����ع�Ʊ�������ظ���عɣ�
	var j = 0;	// ��Ϣ����
	$.ajax({
	    url:"/liveWord/refreshInfoAjax.htm",
	    data:params,
	    success: function(data) {
	    	
	    	var li = '';
	    	// ƴװ���µĹɼ���Ϣ(ѭ��ÿ������)
	    	$.each(data,function(k,v){
	    		// ��װ��Ʊ���� sh sz
	    		code_array = code_array + v.stock_codes +";";
	    		eachId_array = eachId_array + v.stock_codes +","+v.id+";";
		    	// �������߶���ǵ���ƴװ
	    		var now = v.pub_time.substring(0,10);
	    		var stock_div_id = "";
		    	// �������߶���ǵ���ƴװ && ֻ�е�һ�βż���������Ϣ
	    		if(lastDate != now && lastId == 0){
	    			li = li + '<div class="Message_box_time dian_40">'+now+'</div><div id="addDiv">';
	    			lastDate = now;
	    		}
	    		if(v.stock_codes!=null){
	    			stock_div_id = v.stock_codes.replace(new RegExp(/(,)/g),"-")+v.id;
	    		}
    			li = li + '<div class="Message_box_li">'+
		    			 	'<div class="Message_box_r">'+
			    			 	'<div class="Message_box_r_box" id="'+v.id+'">'+
			    			 		// '<h5><a
									// href="/liveWord/liveDetail-'+v.id+'-s.htm">'+v.summary+'</a></h5>'+
			    			 		'<p><a href="/liveWord/liveDetailList-'+v.id+'-s.htm"><span class="Message_box_time">'+v.pub_time.substring(10,16)+'</span>'+strReplace(v.summary,145,"...")+'</a></p>'+
			    			 		'<div id="'+stock_div_id+'" class="clearfix"></div>' +
			    			 	'</div>'+
			    			 '</div>'+
			    		 '</div></div>';
	    	});
	    	if(lastId==0){
	    		// $("#message").prepend(li);
                        // ����IE8����
	    		document.getElementById("message").innerHTML=li;
			}else{
				$('#addDiv').prepend(li);
			}
	    	getStockCode(code_array);
	    	$.ajax({
	    		cache : true,  
	    		url: 'http://hq.sinajs.cn/list='+stock_codes,  
	    		type : "GET",  
	    		dataType : "script",  
	    		success : function(msg){
	    			var codes = eachId_array.split(";");
	    			var id = "";
	    			for (i=0;i<codes.length-1 ;i++ )   
	    		    {   
	    				// �ж�ÿ����Ϣ����ǵ������Ƕ����ظ��� 002609,300155,ID
	    				var isMore = codes[i].split(",");
	    				var vi = "";
	    				var setCode = "";
	    				for(var k = 0 ; k < isMore.length -1; k++){
		    				var code = "";
		    				if(!isMore[k]==""){
			    				// ѭ��
			    				if(isMore[k].substring(0,2)=='60')// ��
			    			    {
			    					code = "sh"+isMore[k];
			    			    }else{
			    			    	code = "sz"+isMore[k];
			    			    }
			    				// 0����������·������Ʊ���֣�
			    				// 1����27.55�壬���տ��̼ۣ�
			    				// 2����27.25�壬�������̼ۣ�
			    				// 3����26.91�壬��ǰ�۸�
			    				// 4����27.55�壬������߼ۣ�
			    				// 5����26.20�壬������ͼۣ�
			    				// 6����26.91�壬����ۣ�������һ�����ۣ�
			    				// 7����26.92�壬�����ۣ�������һ�����ۣ�
			    				// 8����22114263�壬�ɽ��Ĺ�Ʊ�������ڹ�Ʊ������һ�ٹ�Ϊ������λ��������ʹ��ʱ��ͨ���Ѹ�ֵ����һ�٣�
			    				// 9����589824680�壬�ɽ�����λΪ��Ԫ����Ϊ��һĿ��Ȼ��ͨ���ԡ���Ԫ��Ϊ�ɽ����ĵ�λ������ͨ���Ѹ�ֵ����һ��
			    				// 10����4695�壬����һ������4695�ɣ���47�֣�
			    				// 11����26.91�壬����һ�����ۣ�
			    				// 12����57590�壬�������
			    				// 13����26.90�壬�������
			    				// 14����14700�壬��������
			    				// 15����26.89�壬��������
			    				// 16����14300�壬�����ġ�
			    				// 17����26.88�壬�����ġ�
			    				// 18����15100�壬�����塱
			    				// 19����26.87�壬�����塱
			    				// 20����3100�壬����һ���걨3100�ɣ���31�֣�
			    				// 21����26.92�壬����һ������
			    				// ��ȡ��������
			    				if(!eval("hq_str_"+code) == ""){
			    					var item = eval("hq_str_"+code).split(",")
				    				var price= item[3];
			    					// �ǵ��� = (�ּ�-�������̼� )/�������̼� * 100
				    				var updown= (((price - item[2])/item[2])*100).toFixed(2);
				    				var name= item[0];
				    				var code = codes[i].substring(2);
				    				
				    				// ��װ�۸��ı�
				    				var priceText = updown>=0 ? "+"+updown+"%" : updown+"%";
				    				// ��ɫ��ʽ�ж�
				    				var addClass=updown>=0?"red_gp_sy gp_sy":"green_gp_sy gp_sy";
				    				// ��װ����
				    				if(price==0){
				    					priceText = "----";// ͣ����ʾ4�����ַ�
				    					addClass="gray_gp_sy gp_sy clearfix";
				    				}
				    				vi = vi + '<div class="'+addClass+'"><em>'+name+'</em><span>'+priceText+'</span></div>';
			    				};
			    				
			    				// ѭ�����ṹ��ѭ��002609,300155,ID��ID����ѭ��ǰ��λ
			    				if(k==isMore.length-2){
			    					// ��IDȡ������ΪΨһ��ʶ�����������ͬ�Ƽ�������
			    					setCode = setCode+isMore[k] + isMore[k+1];
			    				}else{
			    					setCode = setCode+isMore[k]+"-"
			    				}
		    				}
	    				}
	    				// ��װ����
	    				if(vi.length>0){
	    					$("#"+setCode).html(vi);
	    					// $("#"+setCode).addClass(addClass);
	    				}
	    		    }
	    		}
	    	})
	    	if(lastId == 0){
	    		// ��д�������ټ��ع�����
	    		$("#message").mCustomScrollbar();
	    	}else{
	    		// ÿ�μ�������Ϣ������ö�
	    		$("#message").mCustomScrollbar("scrollTo","top");
	    	}
	    	
	    },
	    error: function(a,b,c){
	    }
	})
}

/* ��¼ */
/*function loginSubmit(usernameTag,passwordTag) {
	var mobile = $("#"+usernameTag).val();
	var password = $("#"+passwordTag).val();
	var params = {"mobile":mobile,"password":password};
	var re=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
	if (!re.test(mobile)){
		alert("��������ȷ���ֻ���!");
		return false;
	}
				
	$.ajax({
	    url:"/login/loginSubmit.htm",
	    data:params,
	    success: function(data) {
	    	if(data.success){
	    		window.location.reload();
	    	}else{
	    		alert("��������ȷ���˺�����!");
	    	}
	    },
	    error: function(a,b,c){
	    	window.location.reload();
	    }
	});
}
*/
/**
 * ѡ�ɲ�����ϸ/��Ϣ�����ϸҳ ��ȡ�ɼ���Ϣ codes: ��Ʊ���� �����,�ָ�
 * 
 * @author sunzuqiang 2015-12-9
 */
var stock_codes1 = ""; // ƴװ��Ʊ����
function getSplitStockCode(codes){
	var returnCodes = "";
	if(codes){
		var split_codes = codes.split(",");
		for (i=0;i<split_codes.length ;i++ )   
	    { 
			var code = split_codes[i];
			if(code.substr(0,2)=='60')// ��
		    {
				code = "sh"+code;
		    }else{
		    	code = "sz"+code;
		    }
			returnCodes+=code+",";
	    };	
	}
	// ȥ�����еĿո�,(�����̨��¼��ո�)
	stock_codes1 = returnCodes.replace(/(^\s*)|(\s*$)/g,'');
}

/**
 * �������˹�Ʊ�ӿ�ƴװ��� tableClass: ������ʽ
 * 
 * @author sunzuqiang 2015-12-9
 */
function getStockPrice(tableClass) {
	if(stock_codes1){
		var url='http://hq.sinajs.cn/list='+stock_codes1;
		$.ajax({
			cache : true,  
			url: url ,  
			type : "GET",  
			dataType : "script",  
			success : function(msg){
				var codes = stock_codes1.split(",");
				for (i=0;i<codes.length-1 ;i++ )   
			    {   
					var item = eval("hq_str_"+codes[i]).split(",")
					var price= item[3];
					// alert(item+"---"+price+"---"+updown+"--"+name+"--"+code)
					// �ǵ��� = (�ּ�-�������̼� )/�������̼� * 100
    				var updown= (((price - item[2])/item[2])*100).toFixed(2);
    				var name= item[0];
    				var code = codes[i].substring(2);
    				
    				// ��װ�۸��ı�
    				var priceText = updown>=0 ? "+"+updown+"%" : updown+"%";
    				// ��ɫ��ʽ�ж�
    				var addClass=updown>=0?"colred":"colgreen";
    				// ��װ����
    				if(price==0){
    					priceText = "----";// ͣ����ʾ4�����ַ�
    					price = "----";
    					addClass = "";
    				}
    				
					var li = '<tr>'+
				   			 	'<td class="td_t">����</td>'+
				   			 	'<td>'+name+'��'+code+'��</td>'+
					    		'<td class="td_t">���¼�</td>'+
					    		'<td>'+price+'</td>'+
					    		'<td class="td_t">�ǵ���</td>'+
					    		'<td class="'+addClass+'">'+priceText+'</td>'+
					    	 '</tr>';
			   		$("."+tableClass).prepend(li);
			    }
				
				
			}
		});
	}
}
// ��ȡ�γ̱�
/*function showCourse(){
	var now = new Date().getHours()*60+new Date().getMinutes();
	$.ajax({
	    url:"/live/getCourse.htm",
	    success: function(data) {
	    	$("#courseMt").html("");
	    	var li ='';
	    	$.each(data,function(k,v){
	    		var startTime =v.start_time.split(':');
	    		var start = parseInt(startTime[0])*60+parseInt(startTime[1]);
	    		var endTime =v.end_time.split(':');
	    		var end = parseInt(endTime[0])*60+parseInt(endTime[1]);
                        // ��ʾ����
	    		if(k== 1){
	    			var month = v.start_day.substring(5,7);
	    			var day = v.start_day.substring(8,10);
	    			$("#div_title").html(month+"��"+day+"��"+"�γ̰���");
	    		}
	    		// ������ʾ�Ŀγ�
	    		if(v.is_display){
	    			if(start<=now && end >now){
    					if(v.is_mark){
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				  '<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">'+v.teacher+'</div>'+
    	    				  '<div class="fr jg_kcb_color">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">��</span> ֱ��ʱ�䣺<span class="jg_kcb_color">����ֱ����</span>'+
    	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">'+v.teacher+'</div>'+
    	    				'<div class="fr">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">��</span> ֱ��ʱ�䣺<span class="jg_kcb_color">����ֱ����</span>'+
    	    				  '</div></div></li>';
    	    			}
    				}else{
    					if(v.is_mark){
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl jg_kcb_color">'+v.teacher+'</div>'+
    	    				'<div class="fr jg_kcb_color">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">��</span> ֱ��ʱ�䣺<span class="jg_kcb_color">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
    	    				  '</div></div></li>';
    	    			}else{
    	    				li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    	    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl">'+v.teacher+'</div>'+
    	    				'<div class="fr">'+v.title+'</div></div>'+
    	    				  '<div class="fl">'+
    	    				  '<span class="jg_kcb_span">��</span> ֱ��ʱ�䣺<span class="jg_kcb_color">'+v.start_time.substring(0,5)+'-'+v.end_time.substring(0,5)+'</span>'+
    	    				  '</div></div></li>';
    	    			}
    				}
	    		}
	    		// ���ղ���ʾ�Ŀγ�
	    		else{
	    			li  = '<li><div class="clearfix jg_kcb_list_nr">'+
    				'<div class="fl jg_kcb_list_fl clearfix"><div class="jg_tecer fl"></div>'+
    				'<div class="fr">'+v.title+'</div></div>'+
    				  '<div class="fl">'+
    				  '<span class="jg_kcb_span">��</span> ֱ��ʱ�䣺<span class="jg_kcb_color">��ʱ�����ֱ��</span>'+
    				  '</div></div></li>';
	    		}
	    		$("#courseMt").append(li);
	    	});
	    },
	    error: function(a,b,c){
	    }
	});
	$("#pub_div").show();
}*/


/**
 * ��ֵת��
 * 
 * @param value
 * @returns {String}
 */
function isNullConvert(value)
{
	if(typeof(value) == "undefined" || value == null)
	{
		return "";
	}
	else
	{
		return value;
	}
}

// ���ظ��ı�༭��
/*function initEdit() {
	var array = ['emoticons','xianhua','guzhang','ding','zan','bjjh'];
	editor = KindEditor.create('textarea[name="content"]', {
		resizeType : 0,
		items : array,
			afterCreate : function() {
				var self = this;
				self.html(tsy);
				KindEditor.ctrl(document, 13, function() {
					self.sync();
					sendMessage();
				});
				KindEditor.ctrl(self.edit.doc, 13, function() {
					self.sync();
					sendMessage();
				});
			},
			afterFocus : function(){
				var self = this;
				var v = self.text();
				if (v == 'ѡ����רҵ����������ר��') {
					self.html("");
				}
			},
			afterBlur : function(){
				var self = this;
				var v = self.text();
				if (v == '') {
					self.html(tsy);
				}
			}
	});
}*/

// ������Ƶֱ�����
/*function loadLive() {
	var liveHtml = "";
	var isPlay = true;
	// ͣ��ʱ������
    if (live_lock == 2) {
    	// ȫ������
    	isPlay = false;
    }
    // ��Աʱ������
    else if (live_lock == 1) {
    	// �ǻ�Ա����
    	if (grade == 0) {
    		isPlay = false;
    	}
    } 
    // ��ʾ��Ƶ������ͼ
    var liveHtml = "";
    if (!isPlay) {
	   if (live_img != '') {
		   if(live_lock ==1){
			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_tanchuang\')"/>';
		   }
		   else if(live_lock ==2){
			   liveHtml = '<img width="100%" height="100%" style="cursor:pointer" src="'+live_img+'" onclick="show(\'suoping_ts\')"/>';
		   }
	   }
	   $("#liveRoom").children().remove();
	   $("#liveRoom").html(liveHtml);
	}else{
		play("liveRoom","100%",liveHeight,uri);
	}
}

function play(liveName,width,height,uri){
	InitPlayer(liveName,width,height,uri);
}*/

function refresh_fuc() {
	$
			.ajax({
				cache : true,
				url : "http://hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006,s_sz399300,int_hangseng,int_dji",
				type : "GET",
				dataType : "script",
				success : function() {
					// ��ָ֤��
					var szzs = hq_str_s_sh000001.split(",");
					var szzs1 = parseFloat(szzs[1]).toFixed(2);
					var szzs2 = parseFloat(szzs[2]).toFixed(2);
					var szzs3 = parseFloat(szzs[3]).toFixed(2);
					$("#szzs div:eq(0)").html(szzs1);
					$("#szzs div").removeClass();
					if (szzs2 < 0) {
						$("#szzs div:eq(1) span").html(
								"" + szzs2 + "&nbsp;&nbsp;" + szzs3 + '%');
						$("#szzs div").addClass('colgreen');
					} else if (szzs2 > 0) {
						$("#szzs div:eq(1) span")
								.html(
										"+" + szzs2 + "&nbsp;&nbsp;+"
												+ szzs3 + '%');
						$("#szzs div").addClass('colred');
					} else {
						$("#szzs div:eq(1) span").html(
								"" + szzs2 + "&nbsp;&nbsp;" + szzs3 + '%');
						// $("#szzs div").addClass('colgreen');
					}
					// ���ָ
					var szcz = hq_str_s_sz399001.split(",");
					var szcz1 = parseFloat(szcz[1]).toFixed(2);
					var szcz2 = parseFloat(szcz[2]).toFixed(2);
					var szcz3 = parseFloat(szcz[3]).toFixed(2);
					$("#szcz div:eq(0)").html(szcz1);
					$("#szcz div").removeClass();
					if (szcz2 < 0) {
						$("#szcz div:eq(1) span").html(
								"" + szcz2 + "&nbsp;&nbsp;" + szcz3 + '%');
						$("#szcz div").addClass('colgreen');
					} else if (szcz2 > 0) {
						$("#szcz div:eq(1) span")
								.html(
										"+" + szcz2 + "&nbsp;&nbsp;+"
												+ szcz3 + '%');
						$("#szcz div").addClass('colred');
					} else {
						$("#szcz div:eq(1) span").html(
								"" + szcz2 + "&nbsp;&nbsp;" + szcz3 + '%');
					}
					// ��ҵ��
					var cyb = hq_str_s_sz399006.split(",");
					var cyb1 = parseFloat(cyb[1]).toFixed(2);
					var cyb2 = parseFloat(cyb[2]).toFixed(2);
					var cyb3 = parseFloat(cyb[3]).toFixed(2);
					$("#cybzs div:eq(0)").html(cyb1);
					$("#cybzs div").removeClass();
					if (cyb2 < 0) {
						$("#cybzs div:eq(1) span").html(
								"" + cyb2 + "&nbsp;&nbsp;" + cyb3 + '%');
						$("#cybzs div").addClass('colgreen');
					} else if (cyb2 > 0) {
						$("#cybzs div:eq(1) span").html(
								"+" + cyb2 + "&nbsp;&nbsp;+" + cyb3 + '%');
						$("#cybzs div").addClass('colred');
					} else {
						$("#cybzs div:eq(1) span").html(
								"" + cyb2 + "&nbsp;&nbsp;" + cyb3 + '%');
					}
					// ����300
					// ��ҵ��
					var hs300 = hq_str_s_sz399300.split(",");
					var hs3001 = parseFloat(hs300[1]).toFixed(2);
					var hs3002 = parseFloat(hs300[2]).toFixed(2);
					var hs3003 = parseFloat(hs300[3]).toFixed(2);
					$("#hs300 div:eq(0)").html(hs3001);
					$("#hs300 div").removeClass();
					if (hs3002 < 0) {
						$("#hs300 div:eq(1) span")
								.html(
										"" + hs3002 + "&nbsp;&nbsp;"
												+ hs3003 + '%');
						$("#hs300 div").addClass('colgreen');
					} else if (hs3002 > 0) {
						$("#hs300 div:eq(1) span").html(
								"+" + hs3002 + "&nbsp;&nbsp;+" + hs3003
										+ '%');
						$("#hs300 div").addClass('colred');
					} else {
						$("#hs300 div:eq(1) span")
								.html(
										"" + hs3002 + "&nbsp;&nbsp;"
												+ hs3003 + '%');
					}
					// ����ָ��
					var hszs = hq_str_int_hangseng.split(",");
					var hszs1 = parseFloat(hszs[1]).toFixed(2);
					var hszs2 = parseFloat(hszs[2]).toFixed(2);
					var hszs3 = parseFloat(hszs[3]).toFixed(2);
					$("#hszs div:eq(0)").html(hszs1);
					$("#hszs div").removeClass();
					if (hszs2 < 0) {
						$("#hszs div:eq(1) span").html(
								"" + hszs2 + "&nbsp;&nbsp;" + hszs3 + '%');
						$("#hszs div").addClass('colgreen');
					} else if (hszs2 > 0) {
						$("#hszs div:eq(1) span")
								.html(
										"+" + hszs2 + "&nbsp;&nbsp;+"
												+ hszs3 + '%');
						$("#hszs div").addClass('colred');
					} else {
						$("#hszs div:eq(1) span").html(
								"" + hszs2 + "&nbsp;&nbsp;" + hszs3 + '%');
					}
					// ����˹ָ��
					var dqs = hq_str_int_dji.split(",");
					var dqs1 = parseFloat(dqs[1]).toFixed(2);
					var dqs2 = parseFloat(dqs[2]).toFixed(2);
					var dqs3 = parseFloat(dqs[3]).toFixed(2);
					$("#dqs div:eq(0)").html(dqs1);
					$("#dqs div").removeClass();
					if (dqs2 < 0) {
						$("#dqs div:eq(1) span").html(
								"" + dqs2 + "&nbsp;&nbsp;" + dqs3 + '%');
						$("#dqs div").addClass('colgreen');
					} else if (dqs2 > 0) {
						$("#dqs div:eq(1) span").html(
								"+" + dqs2 + "&nbsp;&nbsp;+" + dqs3 + '%');
						$("#dqs div").addClass('colred');
					} else {
						$("#dqs div:eq(1) span").html(
								"" + dqs2 + "&nbsp;&nbsp;" + dqs3 + '%');
					}
				}
			});
	setTimeout(function() {
		refresh_fuc();
	}, 1000);
}

// ��ʼ���ͷ�
/*function initKefu() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#nav_qqList").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_top_qq_img_in+'" ></a></li>');
		// �����ʾ6��
		if(i==5){
			break;
		}
	}
	
}*/
// ��ʼ���ͷ�2
/*function initKefu1() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#indexQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_index_div_qq_img+'" ></a></li>');
		if(i==11){
			break;
		}
	}
}*/
// ��ʼ���ͷ�2
/*function initKefu2() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#tgqqs").append('<a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+notice_qq_img+'"></a>');
                $("#control_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
		if(i==5){
			break;
		}
	}
}*/
// ��ʼ���ͷ�3��������
/*function initKefu3() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#zhenduanQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_top_teacher_qq_img+'"></a></li>');
		$("#timeQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_div_lecture_qq_img+'"></a></li>');
        $("#timeQQ30").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_div_lecture_qq_img+'"></a></li>');
        // �����ʾ12��
		if(i==11){
			break;
		}
	}
}
*/
// ��ʼ���ͷ�4��������
/*function initKefu4() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
        $("#dbzcqq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/zxzx.gif" width="115"></a></li>');
		// �����ʾ6��
		if(i==5){
			break;
		}
	}
}*/

function initKefuSuoP() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
        $("#lockQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
        $("#huiyuanQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');
	$("#noJinGuChiQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');
        $("#controlQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="'+pc_login_control_qq_img+'"></a></li>');
        $("#networkQQ").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
// �����ʾ12��
		if(i==11){
			break;
		}
	}
}

// ��ʼ���ͷ�3��ɢ��ר�⣩
/*function initKefu5() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#sanhu_jijie").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default/images/qq_ico.gif" ></a></li>');
		// �����ʾ6��
		if(i==11){
			break;
		}
	}
}*/

// ��ʼ���ͷ�6
/*function initKefu6() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	for (var i = 0 ; i < length; i++) {
		// �����������±�
		var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
		$("#jinguchi_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');
		$("#jinguchi_qq1").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif"></a></li>');       
		$("#risk_qq1").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');		
		$("#risk_qq").append('<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+ salesmanQq[qqIndex]+'&amp;site=qq&amp;menu=yes" target="_blank" ><img src="/r/cms/www/default3/images/qq_ico.gif" ></a></li>');				
		if(i==7){
			break;
		}
	}
}*/

// ��ʼ���ؼ��¼�
/*function initFunction() {
	
	// Ϊҳͷ�Ŀͷ���������������¼�
	  $("#nav_service").hover(function(){
		    $("#nav_qqList").toggle();
	  });
	  
		$("#nav_qqList").mouseout(function(){  
		  $("#nav_qqList").hide();  
	   }).mouseover(function(){
	   	  $("#nav_qqList").show();  
	   });

}*/

/**
 * �µ���ʾ����
 */
/*function jAlert(o,t) {
	var d = $("#ts_div");
	d.find("h3").html(t);// ����
	d.find(".tan_padding").find("div").html(o);// ����
	d.show();
}

function checkTime() {
	var ar = ['8:30','21:00'];
    var d = new Date();
    if(d.getDay() == 0 || d.getDay() == 6) {
    	return true;
    }
    var current = parseInt(d.getHours()) * 60 + parseInt(d.getMinutes());
    var ar_begin = ar[0].split(':');
    var ar_end = ar[1].split(':');
    var b = parseInt(ar_begin[0]) * 60 + parseInt(ar_begin[1]);
    var e = parseInt(ar_end[0]) * 60 + parseInt(ar_end[1]);
    if (current >= b && current <= e) 
	{
    	return false;
	}else{
		return true;
	} 
}*/

/*
 * ��ȡ�����ǵ� 1 �� -1 ��
 */
function getGrail() {
	$.ajax({
		cache : true,
		url : "http://hq.sinajs.cn/list=s_sh000001",
		type : "GET",
		async: false,
		dataType : "script",
		success : function() {
			// ��ָ֤��
			var szzs = hq_str_s_sh000001.split(",");
			var szzs3 = parseFloat(szzs[3]).toFixed(2);
			if (szzs3 > -3) {
				// �����
				$("#menu_q1").attr("src","/r/cms/www/default3/images/qq_lqng.gif");
				$(".ke-icon-jjzg").addClass("ke-icon-lqng").removeClass("ke-icon-jjzg");
			} else {
				// �����
				$("#menu_q1").attr("src","/r/cms/www/default3/images/qq_jjzg.gif");
			}
		}
	});
}

/**
 * �������QQ
 */
/*function clientSimpleQQ() {
	var salesmanQq = salesmanRoomQq.split(",");
	var length = salesmanQq.length;
	// �����������±�
	var qqIndex = Math.floor(Math.random()*salesmanQq.length); 
	var url = 'http://wpa.qq.com/msgrd?v=3&uin='+salesmanQq[qqIndex]+'&site=qq&menu=yes';
	// document.location.target = '_blank';
	// document.location.href = url;
	window.open(url,"_blank")
}

function setCookie(name,value,expires)
{
	if(expires!=null){
		var exp = new Date();
		exp.setTime(exp.getTime() + expires);
		document.cookie = name + "="+ escape (value)+";expires="+exp.toGMTString();
	}else{
		document.cookie = name + "="+ escape (value);
	}
}

function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function delCookie(name){
	var exp = new Date();exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}*/


// ��������
/*function publicDiscuss(userName,liveWord_id,table_name) {
	var discuss = $('#discuss').val();
	if(checkHtml(discuss)){
		alert("������Ϸ����ַ�");
		$('#discuss').val("");
		return;
	}
	var params = {"discuss":discuss,"visiterName":userName,"source":'pc',"tactics_id":liveWord_id,"source_table":table_name};
	if(discuss.length <= 0){
		alert("��������������!");
		return false;
	}
	$.ajax({
	    url:"/tactics/publicDiscuss.htm",
	    data:params,
	    success: function(data) {
	    	// alert("�������۳ɹ�,��ȴ����!")
	    	$("#discuss").val("");
	    	var ht = '<div class="clearfix clxx_pl" id="disContent'+data.id+'">'+
	    				'<div class="fl clxx_pl_img"><img src="/r/cms/www/default3/images/dengji_'+data.commont_type+'.png" width="40" /></div>'+
	        			'<div class="fl clxx_pl_p">'+
	        			'<h4>'+data.commont_nick+'</h4>'+
	            		'<p>'+data.commont_content+'</p>'+
	            		'<p>'+data.create_time+'</p>'+
					      '</div>'+
					        '<div class="fr clxx_pl_z">'+
					        '<span id="discussCount_'+data.id+'">0</span> <a href="javascript:void(0)" onclick="tacticsDiscuss('+data.id+')"><s class="allIcon" id="allIcon_'+data.id+'"></s></a> <a href="javascript:void(0)" onclick="showDiscuss('+data.id+')">�ظ�</a>'+
					        '</div>'+
					    '</div>';
		    $("#disArea").prepend(ht);
		  // ��ת�����۴�
		    $("#content").mCustomScrollbar("scrollTo","#disContent"+data.id);
        
	    },
	    error: function(a,b,c){
	    }
	});
}*/

// ��Ͷ�ʲ���
/*function tacticsPraise(tactics_id) {
	var params = {"tactics_id":tactics_id};
	if(getCookie("#tacticsPraise_"+tactics_id)!="1"){
		$.ajax({
		    url:"/tactics/tacticsPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#tacticsPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("�����ظ��ޣ�");
		return false;
	}
	
}*/

// ����Ϣ���
/*function liveWordPraise(liveWord_id) {
	var params = {"liveWord_id":liveWord_id};
	if(getCookie("#liveWordPraise_"+liveWord_id)!="1"){
		$.ajax({
		    url:"/liveWord/liveWordPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#liveWordPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("�����ظ��ޣ�");
		return false;
	}
	
}*/

// ��Ͷ�ʲο�
/*function msgInterPraise(msgInter_id,table) {
	var params = {"msgInter_id":msgInter_id,"table":table};
	if(getCookie("#msgInterPraise_"+table+msgInter_id)!="1"){
		$.ajax({
		    url:"/msgInter/msgInterPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#msgInterPraise_"+table+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("�����ظ��ޣ�");
		return false;
	}
	
}*/
// �޹�Ʊ�ٿ�
/*function gpbkPraise(id) {
	var params = {"id":id};
	if(getCookie("#gpbkPraise_"+id)!="1"){
		$.ajax({
		    url:"/live/gpbkPraise.htm",
		    data:params,
		    success: function(data) {
		    	setCookie("#gpbkPraise_"+data.id,"1");
		    	$("#tacticsCount").html(Number(data.count));
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("�����ظ��ޣ�");
		return false;
	}
	
}*/

// ������
/*function tacticsDiscuss(commont_id) {
	var params = {"commont_id":commont_id};
	var count = $("#discussCount_"+commont_id).html();
	if(getCookie("#discussCount_"+commont_id)!="1"){
		$.ajax({
		    url:"/tactics/tacticsDiscuss.htm",
		    data:params,
		    success: function(data) {
		    	// ��ʶ�ظ���
		    	setCookie("#discussCount_"+data.commont_id,"1");
		    	$("#discussCount_"+data.commont_id).html(Number(data.count));
		    	$("#allIcon_"+data.commont_id).attr("class","allIcon s_ok");
		    },
		    error: function(a,b,c){
		    }
		});
	}else{
		alert("�����ظ��ޣ�");
		return false;
	}
}
// ����Ƿ���html��ǩ
function checkHtml(htmlStr) {  
    var  reg = /<[^>]+>/g;  
    return reg.test(htmlStr);  
} 

// �ظ�����
function reviewDiscuss(tactics_id,table_name) {
	var commont = $("#review").val();
	if(checkHtml(commont)){
		alert("������Ϸ����ַ�");
		$("#review").val("");
		return;
	}
	var userName = parent.visiterName;
	var commont_id = $("#commont_id").val();
	var params = {"commont_id":commont_id,"commont":commont,"visiterName":userName,"source":'pc',"tactics_id":tactics_id,"source_table":table_name};
	
	if(commont.length <= 0){
		alert("���������Ļظ�!");
		return false;
	}
	$.ajax({
	    url:"/tactics/reviewDiscuss.htm",
	    data:params,
	    success: function(data) {
	    	// �ظ����ۿ�����
	    	$("#review").val("");
	    	var ht = '<div class="clearfix clxx_pl" id="disContent'+data.id+'">'+
	    				'<div class="fl clxx_pl_img"><img src="/r/cms/www/default3/images/dengji_'+data.rev_type+'.png" width="40" /></div>'+
	        			'<div class="fl clxx_pl_p">'+
		        			'<h4 >'+data.rev_nick+'</h4>'+
		            		'<p>'+data.rev_commont+'</p>'+
		            		'<div class="clxx_pl_hf box_Fillet5 dian_40">�ظ���'+data.commont_nick+'&nbsp;'+data.create_time+'&nbsp;</p>'+data.commont_content+'&nbsp;</div>'+
		            		'<p>'+data.rev_time+'</p>'+
					    '</div>'+
				        '<div class="fr clxx_pl_z">'+
				        	'<span id="discussCount_'+data.rev_id+'">0</span> <a href="javascript:void(0)" onclick="tacticsDiscuss('+data.rev_id+')"><s class="allIcon" id="allIcon_'+data.rev_id+'"></s></a> <a href="javascript:void(0)"  onclick="showDiscuss('+data.rev_id+')">�ظ�</a>'+
				        '</div>'+
					  '</div>';
		    $("#disArea").prepend(ht);
		    // ���ػظ����۵���
		    hide('huifu_tan');
		    // ��ת�����۴�
		    $("#content").mCustomScrollbar("scrollTo","#disContent"+data.id);
		    
	    },
	    error: function(a,b,c){
	    	alert(c);
	    }
	});
}
function showDiscuss(id){
	$('#commont_id').val(id);
	show('huifu_tan');
}

function show(diveName){
	$('#'+diveName).show();
}

function hide(diveName){
	$('#'+diveName).hide();
}
// �رտγ�Ԥ��
function closeCourse(){
	$('.tan_div_public').hide();
}
// ����
function search(button){
	    var q = $("#"+button).val();
	    if(q==""||q==null||q=="�������������Ĵ�"){
			alert("��������Ϊ��!");
			return;
		}
	    if(CheckStr(q)){
			alert("�������ݷǷ�!");
			return;
		}
		var entry = encodeURI(encodeURI(q));
		window.location.href="/baike/search.htm?entry="+entry;
	}
// �ж��ַ��Ƿ�Ƿ�
	function CheckStr(val){  
		var str = "[~!@/'\"#$&^*]+";
		var reg = new RegExp(str);
		if(reg.test(val)) {
		    return true;
		} 
		return false;         
	}

function loginOut(){
	if(confirm('��ȷ��Ҫ�˳���?')){
		$.ajax({
			url : "/login/logout.htm",
			success : function(data) {
				if (data == true) {
					window.location.href= window.location.href;
				}
			}
		});
	}
}
// ��������
function bqsm(t){
	var str = '<font color="#eeeeee">1.���ֱ����������Ѷ�����ο�����������ֱ�����������ֱ�������еĹ۵�'+
	          '�жϱ����������Ը���Ϣ���ݵ�׼ȷ�ԡ��ɿ��Ի����ݵ������Բ��ṩ��֤��'+
	          'Ͷ�������вο����ݴ˲��������Ե���<br/>'+
	          '2.���ֱ������ʦ��������۾���������˶���Ͷ���г��Ĺ۵㣬�ʹɡ���������Ϊ��'+
	          '��������˹۵㣬�������κ�Ͷ��������಻������ֱ���Ĺ۵��������������Ͷ�������ԶԴ�������Ͷ�ʣ�</font>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
}

// ����
function ppzs(t){
	var str = '<font color="#eeeeee">1.�������ƣ����Ͻ�֤Ͷ����ѯ�������޹�˾���й�֤�����׼��ȫ����һ�����֤ȯͶ����ѯҵ�����յ�רҵͶ�˻�����<br/>'+
	'2.�������ƣ����Ⱥ�Ϊ���ټҵط��������������ܲ��š���ҵ���š����й�˾���ṩͶ����Ƶ�רҵ����<br/>'+
	'3.�Ŷ����ƣ�ӵ�й��ڶ���Ͷ���Ŷӡ�5A����ϯͶ�˾��š�SSS���ȵ��ھ��Ŷӡ��ṩһ��һ��ѯָ������Ͷ����ʵ�ֳ������档'+
	'</font>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
}

// ���ּƻ�
function bjjh(t){
	var str="";
	if(start_num ==1){
		str += '<div style="top:23%;position:absolute;left:79%; font-size:36px; color:#f00;font-family:Tahoma, Arial" id="minus_people">'+minusNum+'</div>';
	}
	if(start_time ==1){
		str +='<div style="top:51%;position:absolute;left:58%; font-size:30px; color:#f00;font-family:Tahoma, Arial" id="timer2"></div>';
	}
	str +='<a href="javascript:void(0)" onclick="show(\'in_tanchuang\')"><img src="'+pc_banner_img+'" width="100%" height="100%"/></a>';
	$("#banner_lb").html(str);
	$(t).siblings().removeAttr("class","box_nav_hover");
	$(t).attr("class","box_nav_hover");
	show_time("timer2");
}


// ��ҳ��������ʱ
function show_time(timeName)
{

	var time_now_server,time_now_client,time_end,time_server_client,timerID;

	time_end=new Date(index_end_time.replace("-", "/").replace("-", "/"));// ������ʱ��
	time_end=time_end.getTime();
	 
	time_now_server=new Date();// ��ʼ��ʱ��
	time_now_server=time_now_server.getTime();
	 
	time_now_client=new Date();
	time_now_client=time_now_client.getTime();
	 
	time_server_client=time_now_server-time_now_client;
	
	var timer = document.getElementById(timeName);
	if(!timer){
 		return ;
	}
 	timer.innerHTML =time_server_client;
 
	 var time_now,time_distance,str_time;
	 var int_day,int_hour,int_minute,int_second;
	 var time_now=new Date();
	 time_now=time_now.getTime()+time_server_client;
	 time_distance=time_end-time_now;
	 if(time_distance>0){
		  int_day=Math.floor(time_distance/86400000)
		  time_distance-=int_day*86400000;
		  int_hour=Math.floor(time_distance/3600000)
		  time_distance-=int_hour*3600000;
		  int_minute=Math.floor(time_distance/60000)
		  time_distance-=int_minute*60000;
		  int_second=Math.floor(time_distance/1000)
		 
		  if(int_hour<10)
		   int_hour="0"+int_hour;
		  if(int_minute<10)
		   int_minute="0"+int_minute;
		  if(int_second<10)
		   int_second="0"+int_second;
		  str_time=int_day+"��"+int_hour+"ʱ"+int_minute+"��"+int_second+"��";
		  timer.innerHTML=str_time;
		  setTimeout("show_time('"+timeName+"')",1000);
	 }
	 else
	 {
		  timer.innerHTML =timer.innerHTML;
		  clearTimeout(timerID)
	 }
}

function isOver(maxlen){
	if(freeToke == 1){
		$("#Chat_Send_Msg").removeAttr("maxlength");
	}else{
		var len = $("#Chat_Send_Msg").val().length;
		if(maxlen>=len){
			$("#tips").html("����������<strong class='colred'>"+(maxlen-len)+"</strong>��");
		}
	}
}*/

/*function showJinGu(){
	$(".jinguchi_ul_li").html("");
	$("#risktips").html("");
	$.ajax({
		url:"/stockPool.htm",
		success:function(data){
			// �й�Ʊ�Ƽ�ʱ
			if(data.type == "pool"){
				if(data.isHy){
					$("#jgcKf").hide();
				}
				var li ='';
				$.each(data.data,function(k,v){
					li += '<div class="jinguchi_li"><ul class="clearfix">'+
					'<li style="width:46%">��Ʊ����(����)��'+v.stock_name+'('+v.stock_code+')</li>'+
					' <li style="width:27%">Ԥ�����棺<span class="colred">'+v.prospective_earnings+'</span></li>'+
					'<li style="width:27%">�Ƽ�ʱ�䣺'+v.recommon_date.substring(5,16)+'</li>'+
					'</ul>'+
					' <div class="jinguchi_ly">'+
					'�Ƽ����ɣ�'+v.recommon_reason+
					' </div></div>';
				});	
				$(".jinguchi_ul_li").html(li);
				show('jingu_tanchuang');
				// ������ʾʱ
			}else if(data.type == "risk"){
				if(data.data!=""){
					var content ="";
					if(data.isHy){
						$("#riskKf").hide();
					}
					$.each(data.data,function(k,v){
						content =v.risk_content;
					});
					$("#risktips").html(content);
					show('risk_tip');
				}else{
					show('noJinGuChi');
				}
			}
		},
		error: function(a,b,c){
	    	show('noJinGuChi');
	    }
	});
}

function loginControl(type){
	var now = new Date();
	var todayLast =now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" 23:59:59";
	var time =parseInt(new Date(todayLast).getTime()) - parseInt(new Date().getTime());
	if(type=="1"){
		var loginCode = $("#loginCode").val();
		if(loginCode==null || loginCode.replace(" ","")==""){
			alert("�������¼�룡");
		}
		var params = {"type":"1","loginCode":loginCode};
		$.ajax({
		    url:"/user/loginControl.htm",
		    data:params,
		    success: function(data) {
		    	if(data.success){
		    		setCookie("loginStatus","1",time);
		    		location.reload();
		    	}else{
		    		$("#loginCode").val("");
		    		show('loginError');
		    	}
		    }
		})
	}else{
		var mobile = $("#username9").val();
		var password = $("#password9").val();
		var params = {"type":"2","userName":mobile,"password":password};
		var re=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
		if (!re.test(mobile)){
			alert("��������ȷ���ֻ���!");
			return false;
		}
		$.ajax({
		    url:"/user/loginControl.htm",
		    data:params,
		    success: function(data) {
		    	if(data.success){
		    		window.location.reload();
		    	}else{
		    		alert("��������ȷ���˺�����!");
		    	}
		    },
		    error: function(a,b,c){
		    	window.location.reload();
		    }
		});
	}
}

// ��½����
function operationControl(loginStatus,controlType,controlLong){
	var status =getCookie("loginStatus");
	if(status ==1){
		loginStatus =1;
		show("in_tanchuang");
	}
	if(loginStatus == '0' && controlType =='2'){
		var now = new Date();
		var todayLast =now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" 23:59:59";
		var time =parseInt(new Date(todayLast).getTime()) - parseInt(new Date().getTime());
		if(controlLong!=""){
		   var beforeTime = getCookie("loginControl");
		   if(typeof(beforeTime) == 'undefined' || beforeTime == null || beforeTime ==""){
			   beforeTime = new Date().getTime();
			   setCookie("loginControl",beforeTime,time);
		   }
		   var syLong = new Date().getTime() - Number(beforeTime) - Number(controlLong)*1000*60;
		   if(syLong >= 0){
			   show('login_control');
			   hide("in_tanchuang");
                           $("#liveRoom").remove();
		   }else{
	          setTimeout(function(){
	        	  location.reload();
	        },0-syLong);
		   }
		}
	}
}

// Tab�л� s:��ʼλ�� iѡ��λ�� a ���λ��
function setTab(s,i,a,menuc,contc){
	for(var n=s;n<=a;n++){
		if(i==n){
			$("#menu_"+n).addClass(menuc);
			$("#content_"+n).removeClass(contc);
		}else{
			$("#menu_"+n).removeClass(menuc);
			$("#content_"+n).addClass(contc);
		}
	}
}

// �س�ʱ��Ĭ���ǵ�½
function on_return(id,event){
    if(event.keyCode == 13){
        if (document.all(id)!=null){
              document.all(id).click();
              }
        }
 }*/