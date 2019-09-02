import { ValidationResponse } from './../_models/validation-response';
import { DataValidation } from './../_models/data-validation';
import { ROOT_URL } from './../constants';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  isSubmittedDataValid(name: string, text: string){
    //check if all field are filled
    if(name === null || text === null || name === '' || text === ''){
      return new DataValidation(false, 'All field are required.');
    }
    let partsOfName: string[] = name.trim().split(' ');

    //check if the name hase at least two parts
    if(partsOfName.length < 2) {
      return new DataValidation(false, 'The given name has less than two parts. It must be the complete name.');
    
    //check if the text has at least 1 non-space character
    } else if (text.trim().length < 1) {
      return new DataValidation(false, 'The given text must have at least one non-space character.');
    } else {
      return new DataValidation(true);
    }
  }

  serverSideValidation(name:string, text:string): Observable<ValidationResponse> {
    return this.http.post<ValidationResponse>(ROOT_URL + '/validation', {name, text}, this.httpOptions)
      .pipe(
        catchError(this.errorHandlingService.handleError)); //to catch the server side errors
  }
}
