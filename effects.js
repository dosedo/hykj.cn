// JavaScript Document

var menuid;
window.winwidth = $(window).width();
window.winheight = $(window).height();

//页面滚动
var _delayTop = 0;
$(window).bind("scroll",function(){
	var _wTop = _winScroll = windowPos = $(window).scrollTop(),
		docHeight = $(document).height(),
		windowHeight = $(window).height(),
		completion = windowPos / (docHeight - windowHeight) * window.winheight;
	//$('.progress').height(completion);
	if(_wTop>30&&_delayTop<_wTop){
		$(".header").addClass("active");
	}else{
		$(".header").removeClass("active");
		$(".header").css("left","0px");
		$("https://www.ehealth-china.com/js/.header .nav").css("right","-273px");
		$(".chose").unbind().remove();
		$("https://www.ehealth-china.com/js/.header .nav").removeClass("show"); 
	}
	if(_wTop<30&&$(".header").attr("data-class")!=undefined){
		$(".header").addClass($(".header").attr("data-class"));
		$(".header").removeClass("active");

	}else if(_wTop>30&&$(".header").attr("data-class")!=undefined){
		$(".header").removeClass($(".header").attr("data-class"));
	}


});





//字体大小
var f_12 = 12,
	f_14 = 14,
	f_15 = 15,
	f_16 = 16,
	f_18 = 18,
	f_20 = 20,
	f_22 = 22,
	f_24 = 24,
	f_26 = 26,
	f_28 = 28,
	f_30 = 30,
	f_32 = 32,
	f_34 = 34,
	f_36 = 36,
	f_38 = 38,
	f_40 = 40,
	f_42 = 42,
	f_44 = 44,
	f_46 = 46,
	f_48 = 48,
	f_50 = 50,
	f_52 = 52,
	f_54 = 54,
	f_56 = 56,
	f_58 = 58,
	f_60 = 60,
	f_70 = 70,
	f_80 = 80,
	f_90 = 90,
	f_100 = 100;
	f_110 = 110;
$.fn.fontFlex = function(min, max, mid, line_height) {
    var $this = this;
    $(window).resize(function() {
	    if(window.winwidth>1024){
	        //var size = window.innerWidth / mid;
	        var size = window.innerWidth / (1880 / mid);
	        if (size < min) size = min;
	        if (size > max) size = max;
	        $this.css('font-size', size + 'px').attr("data-font",1);
	        if(line_height==1){$this.css('line-height', parseFloat($this.css("line-height")) + size - mid + 'px')}
	        if(line_height==2){$this.css('line-height', size + 'px')}
	    }else{
	    	$("[data-font=1]").removeAttr("style");
	    }
    }).trigger('resize');
};


 
  



