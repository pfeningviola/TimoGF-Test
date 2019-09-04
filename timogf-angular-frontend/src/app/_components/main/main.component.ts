import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isValidData = false;
  submittedName: string;
  submittedText: string;
  choosenColor: string;

  constructor() { }

  ngOnInit() {
  }

  toPrint(submittedData: string[]){
    this.isValidData = true;
    this.submittedName = submittedData[0];
    this.submittedText = submittedData[1];
    this.choosenColor = submittedData[2];
  }

  setInvalidData(invalidData: boolean){
    this.isValidData = false;
  }
}
