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

	var more = document.getElementsByClassName('more')[0];
	var navs = document.getElementsByClassName('except');
	var clicks = 0;
        more.onclick = function () {
            if(clicks === 0) {
                for(var k = 0 ; k< navs.length ; k++) {
                    navs[k].style.display= 'block';
                }
                clicks ++;
			} else {
                for(var k = 0 ; k< navs.length ; k++) {
                    navs[k].style.display= 'none';
                }
                clicks = 0;
			}
        };