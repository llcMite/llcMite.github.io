import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from "./components/business/article-list/article-list.component";
import {ScoreComponent} from "./components/business/score/score.component";
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'articlelist', component: ArticleListComponent },
  { path:"score", component:ScoreComponent},
  { path: '',   redirectTo: '/articlelist', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
