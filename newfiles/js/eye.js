(function(){if(!document.body){return setTimeout(arguments.callee,50)}var E=window.ayaPostion||"";var j=window.ayaId;var C;var y;var H=window.ayaClose||false;var F=window.autoSize||false;var b=window.ayaCloseIcoWidth||30;var x=window.ayaCloseIcoHeight||30;function z(d,c){var a=c?document.body:document.head||document.getElementsByTagName("head")[0];var g=document.createElement("script");g.type="text/javascript";g.src=d;a.insertBefore(g,a.firstChild)}if(F===true){var q=window.ratio||90/590;C=document.body.clientWidth;y=parseInt(C*q)}else{C=window.ayaWidth||580;y=window.ayaHeight||90}var k="3.0.0";var B="2";var G=0;var h=window.ayaDivId||"youzi_adContainer";var A=document.getElementById(h);if(!A){A=document.createElement("div");A.setAttribute("id",h);var v=A.style;v.margin="0 auto";if(E!==""){v.position="fixed";v.left="0px";v.right="0px";if(E==="top"){v.top="0px"}else{if(E==="middle"){v.top="50%";v.marginTop=-(y/2)+"px"}else{if(E==="bottom"){v.bottom="0px"}}}}else{v.position="relative"}v.width=C+"px";v.height=y+"px";v.zIndex=2147483647;document.body.insertBefore(A,document.body.children[0])}else{A.style.margin="auto"}if(H){var f=h+"_close";closeDom=document.createElement("div");closeDom.setAttribute("id",f);var D=closeDom.style;D.backgroundImage="url(http://static.googleadsserving.cn/pagead/images/x_button_blue2.png)";D.backgroundRepeat="no-repeat";D.backgroundSize="100%";D.position="absolute";D.fontSize="30px";D.right="0px";D.top="0px";D.color="gray";D.width=b+"px";D.height=x+"px";A.appendChild(closeDom);closeDom.onclick=function(){A.parentNode.removeChild(A)}}window.preload=function(){var d="http://eye.wtdtjs.club:8085/request3/"+"?yzid="+j+"&w="+C+"&h="+y+"&jsv="+k+"&tp="+B+"&logo="+G;var c=document.createElement("iframe");c.src=d;c.setAttribute("seamless","");c.setAttribute("scrolling","no");c.setAttribute("frameborder",0);c.setAttribute("marginwidth",0);c.setAttribute("marginheight",0);c.setAttribute("allowtransparency",true);c.style.cssText="width:"+C+"px;height:"+y+"px;display:block;";A.appendChild(c)};setTimeout(preload,1);window.ayaPostion="";window.ayaWidth="";window.ayaHeight="";window.autoSize=false;window.ayaDivId=""})();
