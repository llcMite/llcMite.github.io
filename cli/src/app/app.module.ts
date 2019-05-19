import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { RightbarComponent } from './components/common/rightbar/rightbar.component';
import { BannerComponent } from './components/common/banner/banner.component';
import { ArticleListComponent } from './components/business/article-list/article-list.component';
import { ScoreComponent } from './components/business/score/score.component';

import {VqueryService} from "./services/vquery.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightbarComponent,
    BannerComponent,
    ArticleListComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VqueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
