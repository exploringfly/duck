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
    box1.style.backgroundSize = '120%';
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
        box1.style.backgroundSize = '120%';
    }
}
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