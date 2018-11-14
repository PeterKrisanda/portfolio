import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isEnglish: boolean;

  constructor() { }

  ngOnInit() {
    // true value only for testing - it will be load dynamically from button click
    this.isEnglish = true;
  }

}
