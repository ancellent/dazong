window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var W = canvas.width;
	var H = canvas.height;
	var deg=0,new_deg=380,dif=0;
	var loop,re_loop;
	var text,text_w;
	
	function init(){
		var r = deg*Math.PI/180;
		ctx.beginPath();
		ctx.strokeStyle = "#fff";
		ctx.lineWidth=6;
		ctx.arc(W/2,H/2,100,90*Math.PI/180,r+90*Math.PI/180,false);
		ctx.stroke();


		ctx.beginPath();
		ctx.strokeStyle = "#85bae1";
		ctx.lineWidth=9;
		ctx.arc(W/2,H/2,91,90*Math.PI/180,r+90*Math.PI/180,false);
		ctx.stroke();


		ctx.beginPath();
		ctx.strokeStyle = "#2691d0";
		ctx.lineWidth=2;
		ctx.arc(W/2,H/2,121,90*Math.PI/180,r+90*Math.PI/180,false);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = "#3d9ed5";
		ctx.lineWidth=2;
		ctx.arc(W/2,H/2,127,90*Math.PI/180,r+90*Math.PI/180,false);
		ctx.stroke();
	}
	function draw(){
		loop = setInterval(function(){
			if(deg == new_deg){
				clearInterval(loop);
			}
			if(deg<new_deg){
				deg+=4;
			}else{
				deg-=4;
			}
			init();	
		},1);
	}

	// re_loop = setInterval(draw,2000);
}