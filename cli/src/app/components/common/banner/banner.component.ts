import { Component, OnInit } from '@angular/core';
import {VqueryService} from "../../../services/vquery.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {

  constructor(public vquery:VqueryService) { 
    console.log(vquery)
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    let that=this;
        //轮播开始
    var banner:any=document.querySelector('.banner');
    var oUl:any=document.querySelector('.banner_ul');
    var oLi:any=document.querySelectorAll('.banner_ul li');

    var oUl1:any=oUl.cloneNode(true);
    banner.appendChild(oUl1);
    oUl1.style.zIndex='9';
    oUl.style.zIndex='10';

    var w=oLi[0].offsetWidth;
    oUl.style.width=w*oLi.length+'px';
    banner.num=0;
    banner.timer=null;

    var oPrev:any=document.getElementById('prev');
    var oNext:any=document.getElementById('next');
    var oList:any=document.querySelectorAll('.banner_list');
    var oP:any=document.querySelector('.banner p')
    var banner_context:any=document.querySelectorAll('.banner_context')

    var iNum=0;
    oList[0].classList.add('banner_list_active');
    banner_op(iNum);
    oNext.onclick=function(){
        if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        that.vquery.startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        that.vquery.startMove(oUl1,{'left':-oLi.length*w},null);
        bannerActiveNum(iNum);
        
    };
    oPrev.onclick=function(){
    	if(iNum!=0){
        iNum--;
      }else{
        iNum=oLi.length-1;
        oUl.style.left=-oLi.length*w+'px';
        oUl1.style.left='0px'
      };
        that.vquery.startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        that.vquery.startMove(oUl1,{'left':w},null);
        bannerActiveNum(iNum);
    };
    
    for(var i=0; i<oList.length; i++){
    	oList[i].index=i;
    	oList[i].onclick=function(){
    		iNum=this.index;
    		that.vquery.startMove(oUl,{'left':-iNum*w},banner_op(iNum));
    		bannerActiveNum(iNum);
    	}   	
    }
    
    banner.timer=setInterval(function(){
    	if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        that.vquery.startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        that.vquery.startMove(oUl1,{'left':-oLi.length*w},null);
        bannerActiveNum(iNum);
    },3000);

    oP.onmouseover=function(){clearInterval(banner.timer);}
    oP.onmouseout=function(){banner.timer=setInterval(function(){
    	if(iNum!=oLi.length-1){
          iNum++
        }else{
          oUl.style.left=w+'px';
          oUl1.style.left=-(oLi.length-1)*w+'px';
          iNum=0;
        };
        that.vquery.startMove(oUl,{'left':-iNum*w},banner_op(iNum));
        that.vquery.startMove(oUl1,{'left':-oLi.length*w},null);
        bannerActiveNum(iNum);
    },3000);};

    function bannerActiveNum(iNum){
        oList[banner.num].classList.remove('banner_list_active');
        oList[iNum].classList.add('banner_list_active');
        banner.num=iNum;
    }
    function banner_op(iNum){
    	for(var i=0; i<banner_context.length;i++){
    		banner_context[i].style.top=-130+'px';
    	}
    	var delay=null;
    	clearTimeout(delay)
    	delay=setTimeout(function(){that.vquery.startMove(banner_context[iNum],{'top':60},null)},1000);
    	
    }
    //轮播结束
  }
}
