import { DataValidation } from './../../_models/data-validation';
import { User } from './../../_models/user';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormValidationService } from './../../_services/form-validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  user: User = new User();
  submittingInProcess = false;
  error: string;
  numberOfPartsOfUsername: number;
  defaultColor = '#db3b3b';
  choosenColor: string;
  @Output() messageToPrint = new EventEmitter<string[]>();
  @Output() invalidData = new EventEmitter<boolean>();


  constructor(private formValidationService: FormValidationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = null;
    this.submittingInProcess = true; // to make the form fields and the submit button disable until finish the validation process
    this.choosenColor = this.defaultColor;

    // client-side validation in the service, the method returns with an Object(valid:boolean, error:string)
    let validation = this.formValidationService.isSubmittedDataValid(this.user.name, this.user.text);

    if (validation.valid) { // if the client-side validation ok, the program sends the data to the server
          this.formValidationService.serverSideValidation(this.user.name, this.user.text)
          .subscribe((response) => { this.submittingInProcess = false;
                                     this.numberOfPartsOfUsername = response.numberOfPartsOfUsername;
                                     // to show the submitted valid text and name, send to the MessageComponent
                                     this.messageToPrint.emit([this.user.name, this.user.text, this.choosenColor])
                                   },
                      error => { if (error === 'undefined') { // if the server isn't working
                                    this.error = "Sorry, something went wrong. Please try again later!"
                                 } else {
                                    this.error = error; // to show the server-side error message
                                 }
                                 this.submittingInProcess = false;
                                 this.invalidData.emit(true);
                               }
          );
    } else {
      this.error = validation.error; // to show the client-side error message
      this.submittingInProcess = false;
      this.invalidData.emit(true);
    }
  }
}
