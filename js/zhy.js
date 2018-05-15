	window.onload=function(){
	var d=document.getElementById("box1").getElementsByTagName('div');
	var s=document.getElementById("box1").getElementsByTagName('span');
	d[0].onmouseover=function(){
		s[0].style.display='none';
		s[1].style.display='block';
	}
	d[0].onmouseout=function(){
		s[0].style.display='block';
		s[1].style.display='none';
	}
	d[1].onmouseover=function(){
		s[2].style.display='none';
		s[3].style.display='block';
	}
	d[1].onmouseout=function(){
		s[2].style.display='block';
		s[3].style.display='none';
	}
	d[2].onmouseover=function(){
		s[4].style.display='none';
		s[5].style.display='block';
	}
	d[2].onmouseout=function(){
		s[4].style.display='block';
		s[5].style.display='none';
	}
	d[3].onmouseover=function(){
		s[6].style.display='none';
		s[7].style.display='block';
	}
	d[3].onmouseout=function(){
		s[6].style.display='block';
		s[7].style.display='none';
	}
	d[4].onmouseover=function(){
		s[8].style.display='none';
		s[9].style.display='block';
	}
	d[4].onmouseout=function(){
		s[8].style.display='block';
		s[9].style.display='none';
	}
	d[5].onmouseover=function(){
		s[10].style.display='none';
		s[11].style.display='block';
	}
	d[5].onmouseout=function(){
		s[10].style.display='block';
		s[11].style.display='none';
	}	
	d[6].onmouseout=function(){
		s[12].style.display='block';
		s[13].style.display='none';
	}	
	d[6].onmouseover=function(){
		s[12].style.display='none';
		s[13].style.display='block';
	}
	var lis=document.getElementById("us").getElementsByTagName('li');
	var box1=document.getElementsByTagName('aside')[0];
	var x=0
	var timer1=null;
	clearInterval(timer1);
	function kz(){
	x++;
	if(x==2){x=0};
//	alert(x);
	box1.style.background='url(img/'+x+'.jpg) no-repeat center top';
	for(var i=0;i<lis.length;i++){
	lis[i].style.background='#866952';	
	}
	lis[x].style.background='#007AFF';
	}
	timer1=setInterval(kz,1200)
	box1.onmouseover=function(){
	clearInterval(timer1);	
	}
	box1.onmouseout=function(){
	timer1=setInterval(kz,1200)
	}
	for(var i=0;i<lis.length;i++){
		lis[i].xvhao=i;
		lis[i].onclick=function(){
		x=this.xvhao;
		for(var i=0;i<lis.length;i++){
	lis[i].style.background='#866952';	
	}
	lis[x].style.background='#007AFF';
	box1.style.background='url(img/'+x+'.jpg) no-repeat center top';
	}
	}
	
	var zt=document.getElementById("zt");
	var zt2=document.getElementById("zt2");
	var timer2=null;
	var y=0;
	clearInterval(timer2);
	setInterval(function(){
		y++;
		if(y==1){
		zt.style.display='none';
		zt2.style.display='block';
		}
		else{
		zt.style.display='block';
		zt2.style.display='none';
		y=0;
		}
		
	},2500)
	var liss=document.getElementById("u1").getElementsByTagName('li');
	var boxx=document.getElementsByClassName('jh');
	for(var j=0;j<liss.length;j++){
		liss[j].xvhaoo=j;
		liss[j].onclick=function(){
		for(var j=0;j<liss.length;j++){
		liss[j].style.listStyleImage='url(img/iDot.png)';
		boxx[j].style.display='none';
		}
		liss[this.xvhaoo].style.listStyleImage='url(img/iDotHover.png)';
		boxx[this.xvhaoo].style.display='block';
		}
	}
	
	
	}	