import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackHomeComponent } from '../components/button-back-home/button-back-home.component';



@NgModule({
  declarations: [
    ButtonBackHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonBackHomeComponent
  ]
})
export class SharedModule { }
