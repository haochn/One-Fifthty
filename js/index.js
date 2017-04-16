(function($){
//默认设置
	var defaults={
		obj:$('body'),
		height:'15',
		backgroundUp:"#ccc",
		backgroundDown:"#f0f",
		callback:function(){

		}
	};

	$.fn.swipeZ=function(options){
		var op=$.extend(true, defaults, options);
		
		op.obj.on({
       		
        touchstart: function(event){
            //todo 滑动开始
          	//zepto.js获取y轴坐标
            // var startX=event.touches[0].pageX;
         
            _startY=event.originalEvent.targetTouches[0].pageY;
            // startY=event.touches[0].screenY;
          
            // console.log(event.touches[0]);

        },
        touchmove: function(event){
            // todo活动过程           
        },
        touchend: function(event){
            //滑动结束
          	//zepto.js获取y轴坐标
            // var endY=event.changedTouches[0].screenY;
            var _endY=event.originalEvent.changedTouches[0].screenY;
            //判断触发事件
            	
            var _s=_endY- _startY;
           
            //向上滑动
            if(_s-op.height<0){
                $(this).css('background',op.backgroundUp);
                $(this).html('上滑事件');
            }
            //向下滑动
            if(_s>op.height){
                $(this).css('background',op.backgroundDown);
                $(this).html('下滑事件');
            }
        }
    });
















	}


})(jQuery);