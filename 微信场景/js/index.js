//->rem响应式布局
~(function () {
    var winW = document.documentElement.clientWidth,
        desW = 640,
        ratio = winW / desW;
    if (winW >= desW) {
        document.documentElement.style.fontSize = desW+ 'px';
        document.documentElement.style.margin = '0 auto';
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
})();


//->INIT SWIPER
new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,  //无缝衔接滚动
        //effect:'cube',        //轮播效果 默认slide效果

    //autoplay: 3000,  //3s实现一次自动轮播
    //autoplayDisableOnInteraction: false,   //用户操作swiper之后，是否禁止autoplay，默认true，禁止

    /*当切换结束后，给当前展示的区域添加对应的ID，有才实现对应的动画效果*/
    onSlideChangeEnd: function (swiper) {
        //获取当前一共有多少个活动块(slide) 包含loop模式下前后多加的两个
        var slideAry = swiper.slides,
        //获取当前展示这个区域的索引
            curIn = swiper.activeIndex,
            total=slideAry.length;
        //计算id是page？
        var targetId='page';
        switch (curIn){
            case 0: //索引是0  代表轮播图的最后一张
                targetId+=total-2;
                break;
            case (total-1):       //最后一个索引  第一张图
                targetId+=1;
                break;
            default:
                targetId+=curIn;
        }

        //给当前的活动块设置ID  把其余的ID移除  slideAry是类数组
        [].forEach.call(slideAry,function(item,index){
            if(curIn===index){
                item.id=targetId;
                return;
            }
            item.id=null;
        });
    }

});