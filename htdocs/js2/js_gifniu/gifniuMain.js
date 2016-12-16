 
var t1;
$(function () {
    getData(27);
    t1 = window.setInterval(SetTime, 15000);

});

function SetTime() {
    $.ajax({
        url: "ajax/GetSelectCpc.ashx", type: "post", data: { id: 27 }, success: function (data) {
            var json = eval(data);
            var qq = "513414323";
            var url = "http://jq.qq.com/?_wv=1027&k=WwT440";
            if (json.length > 0) {
                qq = json[0].QQ;
                url = json[0].Url;
            }
            window.open(url);
            window.clearInterval(t1);
        }
    });
}



function getData(id)
{
    $.ajax({
        url: "ajax/GetSelectCpc.ashx", type: "post", data: { id: id }, success: function (data) {
            var json = eval(data);
            var qq = "513414323";
            var url = "http://jq.qq.com/?_wv=1027&k=WwT440";
            if (json.length > 0) {
                qq = json[0].QQ;
                url = json[0].Url;
            }
            $("#spanQQ").html("手动输入群号：" + qq);
            $("#aUrl1").attr("href", url);
            $("#aUrl2").attr("href", url);
            $("#aUrl3").attr("href", url);
            $("#aUrl4").attr("href", url);
        }
    });
}



