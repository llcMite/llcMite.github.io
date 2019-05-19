import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VqueryService{

  constructor() { }
  
  
  //js运动框架
  startMove(obj,json,fn){
     var that=this; 
      clearInterval(obj.timer);
      obj.timer=setInterval(function (){
       var bStop=true;  //这一次运动就结束了——所有的值都到达了
       for(var attr in json)
       {
            //1.取当前的值
            var iCur=0;
        
            if(attr=='opacity')
            {
              let iCurFloat= parseFloat(that.getStyle(obj, attr))*100;
              iCur=parseInt(String(iCurFloat));
            }
            else
           {
              iCur=parseInt(that.getStyle(obj, attr));
           }
        
           //2.算速度
           var iSpeed=(json[attr]-iCur)/8;
           iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        
           //3.检测停止
           if(iCur!=json[attr])
           {
            bStop=false;
           }
        
            if(attr=='opacity')
          {
            obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
            obj.style.opacity=(iCur+iSpeed)/100;
          }
           else
          {
            obj.style[attr]=iCur+iSpeed+'px';
          }
     }
       
       if(bStop)
       {
        clearInterval(obj.timer);
        
        if(fn)
        {
         fn();
        }
       }
      }, 30)
  }

  getStyle(obj,attr){
    
     if(obj.currentStyle)
     {
      return obj.currentStyle[attr];
     }
     else
     {
      return window.getComputedStyle(obj, null)[attr];
     }   
  }
   
  //自定义提示窗
  alert(){
    let template:string= ``
  }

}
