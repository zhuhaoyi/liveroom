$.format = function (source, params) 
{
	if (arguments.length == 1)
	return function () {
	var args = $.makeArray(arguments);
	args.unshift(source);
	return $.format.apply(this, args);
	};
	if (arguments.length > 2 && params.constructor != Array) {
	params = $.makeArray(arguments).slice(1);
	}
	if (params.constructor != Array) {
	params = [params];
	}
	$.each(params, function (i, n) {
	source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
}; 

function MsgClass() {
    this.create = function(a) {
    	this.key = a.msgid==undefined?"":a.msgid;
		this.visiterName = a.fromMember.userNick.replace("游客-","");
		this.grade = a.fromMember.userLevel;
		this.content = (a.message).replace("ding.png","ding_mobile.png").replace("flower.png","flower_mobile.png").replace("guzhang.png","guzhang_mobile.png").replace("zan.png","zan_mobile.png").replace("geili.png","geili_mobile.png");
		this.sendTime = new Date(new Number(a.msgid)).format("hh:mm");
    }, this.toPrivateMsgItem = function() {
        var a = this.from_uid == myInfo.id ? 'class="mine"' : "", b = getRoleImg(this.from_roleid), c = '<li {0}>{1}<span class="photoimg">{2}</span><div class="TalkCon_p"><span>{3}</span></div></li>', d = $.format(c, a, b, this.from_name, msgFilter(this.content));
        return d;
    }, this.toMsgItem = function() {
        
        var grade = this.grade;
		var gradeImg  = getGradeImg(this.grade);
		var arrString = this.content.split('[^^!]');
		var talkformat;
		var talkhtml;
		if (arrString.length == 3) {
		    talkformat = '<div class="chat_box_li clearfix" id="{0}">\
                                     <div class="chat_time fl box_Fillet3">{1}</div>\
                                     <img src="{2}" class="chat_photo fl"  width="22" height="22"/>\
                                     <div class="chat_name fl box_Fillet3">{3}</div>\
				     <div class="fl say_font">对</div>\
                                     <img src="{4}" class="chat_photo fl"  width="22" height="22"/>\
                                     <div class="chat_name fl box_Fillet3">{5}</div>\
				 <div class="chat_div fl box_Fillet3">{6}</div>'; 
			talkhtml = $.format(talkformat, this.key, this.sendTime, gradeImg, this.visiterName.replace("游客-",""), getGradeImg(arrString[1]), arrString[2], arrString[0]);
		}else{
		        talkformat = '<div class="chat_box_li clearfix" id="{0}">\
				<div class="fl"><div class="chat_time fl box_Fillet3" >{1}</div>\
				<img src="{2}" class="chat_photo fl"  width="22" height="22"/>\
				<div class="chat_name fl box_Fillet3">{3}</div></div>\
				<div class="chat_div_box clearfix"><div class="chat_div fl box_Fillet3">{4}</div>\
		    </div>\
		</div>';
			talkhtml = $.format(talkformat, this.key, this.sendTime, gradeImg, this.visiterName, this.content);
		}
		return $talkhtml = $(talkhtml );
    }, this.isICanSee = function() {
        return !0;
    };
}

function getGradeImg(a) {
    return null == a || void 0 == a ? "/images/dengji_0.png" : "/images/dengji_" + a + ".png";
}
