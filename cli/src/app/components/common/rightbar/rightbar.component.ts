import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.less']
})
export class RightbarComponent implements OnInit {

  constructor() { }
  tab:string
  ngOnInit() {
    this.tab="recommend";
  }
  tabClick(tab:string){
    this.tab=tab;
  }

}
