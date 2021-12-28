import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
//import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  //imports: [CommonModule, MatCarouselModule.forRoot()],
  imports: [CommonModule, IvyCarouselModule],
  declarations: [ImageSliderComponent],
  //exports: [MatCarouselModule, ImageSliderComponent],
  exports: [ImageSliderComponent],
})
export class ImageSliderModule {}
