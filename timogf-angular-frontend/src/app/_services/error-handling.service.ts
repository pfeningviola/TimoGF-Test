import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// to catch from the server returned errors and to be able to show these error messages
export class ErrorHandlingService {

  constructor(private router: Router) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Something bad happened; please try again later.');
    } else {
      return throwError(`${error.error.message}`);
    }
  }
}
