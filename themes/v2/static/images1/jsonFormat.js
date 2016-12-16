var JsonCodec = {
		Str2Hex:function(tmp) {
			var str = "";
			for (var i=0; i<tmp.length; i++)
				str += ("00" + (tmp.charCodeAt(i)).toString(16)).substr(-2);
			return(str);
		},
		Hex2Str:function(tmp) {
			var str = "";
			for (var i=0; i<tmp.length; i+=2) 
				str += String.fromCharCode(parseInt(tmp.substr(i,2),16));
			return(str);
		},
		encodeJson:function(data){
			var _ttemp = encodeURIComponent(JSON.stringify(data));
			return this.Str2Hex(_ttemp);
		},
		decodeJson:function(data){
			var jst = decodeURIComponent(this.Hex2Str(data));
			return JSON.parse(jst);
		}
};