import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'ion-rangeslider';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const ionr = this.elementRef.nativeElement.querySelector('#ionr');
    (<any>$(ionr)).ionRangeSlider({
      type: 'double',
      min: 0,
      max: 1000,
      from: 400,
      to: 750,
    });
  }
}
