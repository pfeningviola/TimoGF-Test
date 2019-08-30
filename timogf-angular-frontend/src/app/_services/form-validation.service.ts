import { Injectable } from '@angular/core';
import { DataValidation } from './../_models/data-validation';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isSubmittedDataValid(name: string, text: string){
    //check if all field were filled
    if(name === null || text === null || name === '' || text === ''){
      return new DataValidation(false, 'All field are required.')
    }
    let partsOfName: string[] = name.trim().split(' ');

    //check if the name hase at least two parts
    if(partsOfName.length < 2) {
      return new DataValidation(false, 'The given name has less than two parts. It must be the complete name.')
    
      //check if text has at least 1 non-space character
    } else if (text.trim().length < 1) {
      return new DataValidation(false, 'The given text must have at least one non-space character.')
    } else if (this.serverSideValidation(name)){
      return new DataValidation(true);
    } else {
      return new DataValidation(true);
    }
  }

  serverSideValidation(name:string):boolean {
    return true;
  }
}
