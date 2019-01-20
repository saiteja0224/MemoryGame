var pressed = 0;
var sc=0;
var prevPressed;
var pre;
var timeOut;
var ts=0;
var p=0;
var images=["one.png","two.png","three.png","apple.jpg","wm.jpg"];
var names=[];
function load(){
	window.location = "game.html";
}
function changeImage(clicked,index){
	

    if(clicked.src=="file:///C:/Users/Sai%20Teja/Desktop/memorygame/block.png"){
	pressed++;
 
	if(pressed >= 2)
	{
		clicked.src = names[index];
        
		if(names[index] == names[prevPressed])
		{
			ts=ts+2;
			sc=sc+2;
			
			pressed=0;
			var c="SCORE:"+sc;
			document.getElementById('sr').innerHTML=c;
			
			
		}
		else 
		{
			setTimeout(function(){ sc=sc-1;
			pre.src="block.png";
			clicked.src="block.png";
			var c="SCORE:"+sc;
			pressed=0;document.getElementById('sr').innerHTML=c;}
			,200);
			
		}
		
	}

	
		
	else
	{
		
		clicked.src = names[index];
		prevPressed = index;
		pre=clicked;
	
	}
	}
}
	function im()
	{
		for(var i=0;i<2;i++){
		var a=0;
var b=0;
var c=0;
var d=0;
	var r=Math.floor(Math.random()*5);
	var x=r;
	names.push(images[x]);
	 p++;
	while(a!=1)
	{
       var r1=Math.floor(Math.random()*5);
       if(r1!=x){
       var y=r1; 
   names.push(images[y]);

       p++;
   a++;}
       
	}
	while(b!=1)
	{
       var r2=Math.floor(Math.random()*5);
       if(r2!=x&&r2!=y){
       var z=r2; 
   names.push(images[z]);
       p++;
   b++;}
       
	}
	while(c!=1)
	{
       var r3=Math.floor(Math.random()*5);
       if(r3!=x&&r3!=y&&r3!=z){
       var e=r3; 
   names.push(images[e]);
       p++;
   c++;}
       
}
while(d!=1)
	{
       var r4=Math.floor(Math.random()*5);
       if(r4!=x&&r4!=y&&r4!=z&&r4!=e){
       var q=r4; 
   names.push(images[q]);
       p++;
   d++;}
       }
	}
}