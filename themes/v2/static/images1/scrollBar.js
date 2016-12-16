function scrollBar() {

    this.init = function init(divName){
		this.divName = divName;
    };
    this.addItem = function addItem(message){
    	this.removeSurplusItem(15);
    	$("#"+this.divName).append(message);
    	$("#"+this.divName).animate({scrollTop:$("#"+this.divName)[0].scrollHeight},500);
    };
    this.firstLoad= function addItem(message){
    	this.removeSurplusItem(15);
    	$("#"+this.divName).append(message);
    	$("#"+this.divName).animate({scrollTop:$("#"+this.divName)[0].scrollHeight},0);
    };
    this.removeSurplusItem = function removeSurplusItem(len){
    	var curLen = $("#"+this.divName).children().length;
    	if(curLen > len){
    		var num = curLen - len;
    		for(var i= 0 ; i < num ; i++ ){
    			$("#"+this.divName).children(':first').remove();
    		}
    	}
    };
    
}