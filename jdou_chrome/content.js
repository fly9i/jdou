$(function(){
	/*
	$("#product-detail .m-tab-trigger").append("<li class='ui-switchable-item trig-item douban-comments'><a href='javascript:;'>豆瓣书评</a></li>");
	$('.douban-comments').on('click',function(){
		var bro = $('#pro-detail-hd');
		var top = bro.offset().top;
		var height = bro.height();
		var width = bro.width();
		var left = bro.offset().left;
		var div = $('<div></div>').css({position:'absolute',left:left,top:top+height+1,width:width,'background-color':'yellow',overflow:'hidden'});
		div.html("testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>testasdfa<br>");
		$('body').append(div);
	});
	$(document).keydown(function(event){
		event.stopPropagation();
		event.preventDefault();
		if(event.ctrlKey && event.keyCode==68){
			console.log("Ctrl+d typed.");
		}

	});
*/
	//页面加载时自动高亮页面<pre>标签代码
	var link = document.createElement("link");
	link.rel="stylesheet";
	link.type="text/css";
	link.href="http://7xju4c.com1.z0.glb.clouddn.com/wp-includes/prettify-theme/atelier-dune-light.css";
	link.onload=loadJs;
	function loadJs(){
	  var js=document.createElement("script");
	  js.src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
	  js.onload=function(){
	    var pre=document.getElementsByTagName("pre");
	    for(var i in pre){
	      pre[i].className='prettyprint linenums:1';
	    }
	  }
	  document.body.appendChild(js);
	}
	document.body.appendChild(link);
});
