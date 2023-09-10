import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
