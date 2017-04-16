//触屏向上下滑动
function touchZ(obj,obj2){
      obj.on({       
        touchstart: function(event){
            //todo 滑动开始
            var startX=event.touches[0].pageX;
            startY=event.touches[0].screenY;
            console.log(event)
            //阻止冒泡事件
            event.stopPropagation();

          
        },
        touchmove: function(event){
            // todo活动过程  
                                
        },
        touchend: function(event){
            //滑动结束
            var endY=event.changedTouches[0].screenY;
            //判断触发事件
            var s=endY- startY;
 
            //向上滑动
            if(s<-15){
               
            }
            //向下滑动
            if(s>15){
                
            }        
        }
    });
}

//todo设置屏幕高度为设备的高度
function setHeight(obj){
    var screenHeight=document.body.clientHeight ;
    obj.height(screenHeight);
}