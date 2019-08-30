import { DataValidation } from './../../_models/data-validation';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { FormValidationService } from './../../_services/form-validation.service';

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
  error: string;


  constructor(private formValidationService: FormValidationService) { }

  ngOnInit() {
  }

  onSubmit(){
    let validation = this.formValidationService.isSubmittedDataValid(this.user.name, this.user.text);

    if (validation.valid) {
      this.validData = true;
      this.submittedName = this.user.name;
      this.submittedText = this.user.text;
    } else {
      this.error = validation.error;
    }
  }


}
