import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  images = [
    'assets/images/women.jpg',
    'assets/images/women.jpg',
    'assets/images/women.jpg'
  ]

  constructor() {
  }

  ngOnInit() {
  }

}