import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VqueryService} from "../../../services/vquery.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.less']
})
export class ScoreComponent implements OnInit {
  constructor(public route:Router,public vquerySerivce:VqueryService) { 
  }

  public selectStar:number
  public selectScore:any="0.0";

  ngOnInit() {
    
  }
  
  cancelScore(){
    let oLi:any=document.querySelectorAll('.star-box li');
    this.selectScore="0.0";
    this.selectStar=undefined;
    for(let i=0;  i<oLi.length; i++){
      oLi[i].querySelector('.high').style.zIndex=0;
    }
  }
  submitScore(){
    alert(this.selectScore+"分")
  }

  ngAfterViewInit(){
      let that=this;
      let oLi:any=document.querySelectorAll('.star-box li');
      let oStarBox:any=document.querySelector(".star-box");
      let oLiLength=oLi.length;
      for(let i=0; i<oLi.length; i++){
        oLi[i].index=i;
        oLi[i].onmouseover=function(){
          let index:number=this.index;
          for(let i=0;  i<=index; i++){
            oLi[i].querySelector('.high').style.zIndex=2;
          }
          that.selectScore=((index+1)*2).toFixed(1); 
        }

        oLi[i].onclick=function(){    
          that.selectStar=this.index;
          let selectIndex:number=that.selectStar;
          if(selectIndex>=0){
            for(let i=0;  i<=selectIndex; i++){
              oLi[i].querySelector('.high').style.zIndex=2;
            }
          }
          that.selectScore=((selectIndex+1)*2).toFixed(1); 
        }

        oStarBox.onmouseout=function(){
          let selectIndex:number=that.selectStar;
          for(let i=0;  i<oLiLength; i++){
            oLi[i].querySelector('.high').style.zIndex=0;
          }
          for(let i=0;  i<=selectIndex; i++){
            oLi[i].querySelector('.high').style.zIndex=2;
          }
          that.selectScore=selectIndex !=undefined ? ((selectIndex+1)*2).toFixed(1):"0.0"; 
        }
      }
  }

 
  
}
