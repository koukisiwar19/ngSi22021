import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  constructor() {}

  ngOnInit(): void {}

  findSelectedCv(selectedCv: Cv) {
    this.selectedCv = selectedCv;
  }
}
