$(function(){
	document.addEventListener("touchmove", function(e) {e.preventDefault();}, false);
	var winHeight = $(document).height();
	$('.page').css("height",(winHeight)+"px");
	$('.swiper').css("height",(winHeight)+"px");
	$('.one_out').css("height",(winHeight)+"px");
	$('.nr_out').css("height",(winHeight)+"px");
	$('.shade').css("height",(winHeight)+"px");
	$('.swiper-container').css("height",(winHeight)+"px");
	var swiperV = new Swiper('.swiper-container-v', {
	        direction: 'vertical'
	    });



// loading
	// var loadimg=function(imgs,callback){
 //        if(!imgs){return false};//参数判断
 //        var img=[];
 //        var len=imgs.length;
 //       	var loadedCount = 0;
 //        for(var i=0;i<len;i++){
 //            img[i]=new Image();
 //            img[i].src=imgs[i];
 //            img[i].onload = function(){
 //            	loadedCount++;
 //            	$('.loading span').html(Math.ceil(loadedCount/len*100));
 //            	if (loadedCount>=len){
	// 				callback ? callback.apply(img) : null;
	// 			}
 //            }
 //        }
 //    }
	// var imgs=["./images/page1_bt_ml.png","./images/l1.jpg","./images/page1_bt1.png","./images/page1_bt2.png","./images/page1_bt3.png","./images/page1_bt4.png","./images/page2_1.png","./images/page2_2.png","./images/page2_3.png","./images/page3_1.png","./images/page3_2.png","./images/page4_1.png","./images/page4_2.png","./images/page5_2.png","./images/page5_3.png","./images/page5_4.png","./images/page6_2.png","./images/page6_3.png","./images/page6_4.png","./images/page7_1.png","./images/page7_2.png"];
	// loadimg(imgs,function(){
	// 		$('.loading').fadeOut(function(){
			//start()
	// 		$('.shade').css({"display":"none"});
	// 		$('.loading').css({"display":"none"});
	// 		start()
	// 	});
	// });

// loading
	var loadimg=function(imgs,callback){
        if(!imgs){return false};//参数判断
        var img=[];
        var len=imgs.length;
       	var loadedCount = 0;
        for(var i=0;i<len;i++){
            img[i]=new Image();
            img[i].src=imgs[i];
            img[i].onload = function(){
            	loadedCount++;
            	$('.loading span').html(Math.ceil(loadedCount/len*100));
            	if (loadedCount>=len){
					callback ? callback.apply(img) : null;
				}
            }
        }
    }
	var imgs=["./images/guoquan.png","./images/l1.jpg","./images/b3_2.png","./images/biao1_1.png","./images/biao2_1.png","./images/biao2_2.png","./images/biao3_1.png","./images/biao4_1.png","./images/bt01.png","./images/bt02.png","./images/bt03.png","./images/bt04.png","./images/hand.png","./images/index_tb.png","./images/quan.png","./images/index_text1.png","./images/index_text2.png","./images/index_text3.png","./images/index_text4.png","./images/pc_img.jpg","./images/page1_bt_ml.png","./images/l1.jpg","./images/page1_bt1.png","./images/page1_bt2.png","./images/page1_bt3.png","./images/page1_bt4.png","./images/page2_1.png","./images/page2_2.png","./images/page2_3.png","./images/page3_1.png","./images/page3_2.png","./images/page4_1.png","./images/page4_2.png","./images/page5_2.png","./images/page5_3.png","./images/page5_4.png","./images/page6_2.png","./images/page6_3.png","./images/page6_4.png","./images/page7_1.png","./images/page7_2.png","./images/page8_1.jpg","./images/page8_2.jpg","./images/page8_3.jpg","./images/page8_4.jpg","./images/page8_txt.png"];
	loadimg(imgs,function(){
			$('.loading').fadeOut(function(){

			$('.shade').css({"display":"none"});
			$('.loading').css({"display":"none"});
			start()
		});
	});

	function start(){
		$(".xx").addClass("xx_move")
		setTimeout(function(){
				$(".guoquan").addClass("guoquan_m");
			},500)
		setTimeout(function(){
			$(".page1_tb").addClass("opacity1");
			$(".page1_top1").addClass("syi_top");
			setTimeout(function(){
				$(".page1_top2").addClass("syi_top");
				setTimeout(function(){
					$(".page1_top3").addClass("syi_top");
					setTimeout(function(){
						$(".page1_top4").addClass("syi_top");
					},300)
				},300)
			},300)
		},1100)
	}




})
