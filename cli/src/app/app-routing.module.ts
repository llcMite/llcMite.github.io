import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from "./article-list/article-list.component";
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'articlelist', component: ArticleListComponent },
  { path: '',   redirectTo: '/articlelist', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
