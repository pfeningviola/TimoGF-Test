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
  errorBySubmit = false;
  submissionError;
  error: string;
  numberOfPartsOfUsername: number;


  constructor(private formValidationService: FormValidationService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.error = null;

    //client-side validation in the service, the method returns with an Object(valid:boolean, error:string)
    let validation = this.formValidationService.isSubmittedDataValid(this.user.name, this.user.text);

    if (validation.valid) { //if the client-side validation ok, the program sends the data to the server
          this.formValidationService.serverSideValidation(this.user.name, this.user.text)
          .subscribe((response) => { this.numberOfPartsOfUsername = response.numberOfPartsOfUsername;
                                     this.validData = true;           //to show the submitted valid text and name
                                     this.submittedName = this.user.name;
                                     this.submittedText = this.user.text;
                                   },
                      error => {this.error = error.message}
          );
    } else {
      this.error = validation.error; //to show error message
    }
  }


}
