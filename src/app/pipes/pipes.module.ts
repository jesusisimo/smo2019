import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPipe } from './video.pipe';

@NgModule({
  declarations: [
    VideoPipe
  ],
  exports: [
    VideoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

