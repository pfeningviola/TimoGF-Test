import { ValidationResponse } from './../_models/validation-response';
import { DataValidation } from './../_models/data-validation';
import { User } from './../_models/user';
import { ROOT_URL } from './../constants';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor(private http: HttpClient) { }

  user: User;
  numberOfPartsOfUsername: number;

  isSubmittedDataValid(name: string, text: string){
    //check if all field are filled
    if(name === null || text === null || name === '' || text === ''){
      return new DataValidation(false, 'All field are required.')
    }
    let partsOfName: string[] = name.trim().split(' ');

    //check if the name hase at least two parts
    if(partsOfName.length < 2) {
      return new DataValidation(false, 'The given name has less than two parts. It must be the complete name.')
    
    //check if the text has at least 1 non-space character
    } else if (text.trim().length < 1) {
      return new DataValidation(false, 'The given text must have at least one non-space character.')
    } else {
      this.serverSideValidation(name, text)
        .subscribe((response) => { this.user = response.user;
                                  this.numberOfPartsOfUsername = response.numberOfPartsOfUsername;
                                  return new DataValidation(true);
                                 },
                  error => { return new DataValidation(false, error.message)})
    }
  }

  serverSideValidation(name:string, text:string): Observable<ValidationResponse> {
    return this.http.post<ValidationResponse>(ROOT_URL + '/validation', {name, text})
      //.pipe(
      //  catchError(this.errorHandlingService.handleError));
  }
}
