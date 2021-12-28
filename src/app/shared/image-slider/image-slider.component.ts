import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  cellWidth = '100%';
  @ViewChild('myCarousel', { static: false }) myCarousel:
    | { next: () => void }
    | undefined;
  //   slides = [
  //     { image: 'assets/images/slider-badging.jpg' },
  //     { image: 'assets/images/slider-badag.jpg' },
  //     { image: 'https://dummyimage.com/600x400/accf44/fff.png' },
  //   ];

  slides = [
    { path: 'assets/images/slider-badging.jpg' },
    { path: 'assets/images/slider-badag.jpg' },
    { path: 'https://dummyimage.com/600x400/accf44/fff.png' },
  ];

  next() {
    if (this.myCarousel) {
      this.myCarousel.next();
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
