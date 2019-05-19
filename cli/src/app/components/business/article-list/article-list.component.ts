import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VqueryService} from "../../../services/vquery.service";
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  public name:string
  constructor(public activeRoute:ActivatedRoute,public vqueryService:VqueryService) { }
  
  ngOnInit() {

  }

}
