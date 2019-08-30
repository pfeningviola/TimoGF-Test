import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  user: User = new User();
  submittedName: string;
  submittedText: string;
  message: string;
  submitted = false;
  validData = false;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.validData = true;
    this.submittedName = this.user.name;
    this.submittedText = this.user.text;
  }


}
