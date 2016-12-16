$(".hiden_img").click(function(){
    $(".tab").css("display","none");
});

///�ж�ʱ��

///�ж�ʱ��
var timeTask=setInterval(function(){

    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    //if(h>=10&&m<=30&&s==00){
    //9:00-09:30
    if(h==09&&m<=30){
        callFunction();

    }
    //9:30-10:30
    if(h==09&&h==10&&m<=30&&m>=30){
        callFunction1();

    }
    //10:30-11:30
    if(h==10||h==11&&m<=30&&m>=30){
        callFunction2();

    }
    //11:30-13:00
    if(h>=11&&h<=13&&m>=30&&m<=60){
        callFunction3();
    }
    //13:00-14:00
    if(h==13){
        callFunction4();

    }
    //14:00-15:00
    if(h==14){
        callFunction5();

    }
    //15:00-16:00
    if(h==15){
        callFunction6();

    }
    //16:00-17:00
    if(h==16){
        callFunction7();

    }
    //17:00-18:00
    if(h==17){
        callFunction8();
    }
    //18:00-19:00
    if(h==18){
        callFunction9();

    }
    //19:00-20:00
    if(h==19){
        callFunction10();
    }
    if(h==20){
        callFunction11();

    }

},3000);


function callFunction() {
    $(".tr_color1").css("color","red");
    $(".tr_color1 .img_1").attr("src","img/1.png");
    $(".tr_color1 .img_3").attr("src","img/2.png");
}
function callFunction1() {
	$(".tr_color1").css("color","#000");
    $(".tr_color1 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color1 .img_3").attr("src","img/hmzbs-renwu.png");
	
	
    $(".tr_color2").css("color","red");
    $(".tr_color2 .img_1").attr("src","img/1.png");
    $(".tr_color2 .img_3").attr("src","img/2.png");
}
function callFunction2() {
	$(".tr_color2").css("color","#000");
    $(".tr_color2 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color2 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color3").css("color","red");
    $(".tr_color3 .img_1").attr("src","img/1.png");
    $(".tr_color3 .img_3").attr("src","img/2.png");
}
function callFunction3() {
	$(".tr_color3").css("color","#000");
    $(".tr_color3 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color3 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color4").css("color","red");
    $(".tr_color4 .img_1").attr("src","img/1.png");
    $(".tr_color4 .img_3").attr("src","img/2.png");
}
function callFunction4() {
	$(".tr_color4").css("color","#000");
    $(".tr_color4 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color4 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color5").css("color","red");
    $(".tr_color5 .img_1").attr("src","img/1.png");
    $(".tr_color5 .img_3").attr("src","img/2.png");
}
function callFunction5() {
	$(".tr_color5").css("color","#000");
    $(".tr_color5 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color5 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color6").css("color","red");
    $(".tr_color6 .img_1").attr("src","img/1.png");
    $(".tr_color6 .img_3").attr("src","img/2.png");
}
function callFunction6() {
	$(".tr_color6").css("color","#000");
    $(".tr_color6 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color6 .img_3").attr("src","img/hmzbs-renwu.png");
	
	
    $(".tr_color7").css("color","red");
    $(".tr_color7 .img_1").attr("src","img/1.png");
    $(".tr_color7 .img_3").attr("src","img/2.png");
}


function callFunction7() {
	$(".tr_color7").css("color","#000");
    $(".tr_color7 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color7 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color8").css("color","red");
    $(".tr_color8 .img_1").attr("src","img/1.png");
    $(".tr_color8 .img_3").attr("src","img/2.png");
}

function callFunction8() {
	$(".tr_color8").css("color","#000");
    $(".tr_color8 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color8 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color9").css("color","red");
    $(".tr_color9 .img_1").attr("src","img/1.png");
    $(".tr_color9 .img_3").attr("src","img/2.png");
}

function callFunction9() {
	$(".tr_color9").css("color","#000");
    $(".tr_color9 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color9 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color10").css("color","red");
    $(".tr_color10 .img_1").attr("src","img/1.png");
    $(".tr_color10 .img_3").attr("src","img/2.png");
}
function callFunction10() {
	$(".tr_color10").css("color","#000");
    $(".tr_color10 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color10 .img_3").attr("src","img/hmzbs-renwu.png");
	
    $(".tr_color11").css("color","red");
    $(".tr_color11 .img_1").attr("src","img/1.png");
    $(".tr_color11 .img_3").attr("src","img/2.png");
}
function callFunction11() {
	$(".tr_color11").css("color","#000");
    $(".tr_color11 .img_1").attr("src","img/hmzbs-time.png");
    $(".tr_color11 .img_3").attr("src","img/hmzbs-renwu.png");

    $(".tr_color12").css("color","red");
    $(".tr_color12 .img_1").attr("src","img/1.png");
    $(".tr_color12 .img_3").attr("src","img/2.png");
}



