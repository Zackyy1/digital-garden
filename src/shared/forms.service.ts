import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { Plant } from './general.service';


@Injectable({
  providedIn: 'root'
})


export class FormsService {

  constructor() { }


  /**
   * 
   * @param selector - Form selector
   * 
   * Gets all inputted data with keys as name attributes
   */
  getFormData = (selector: string) => {
    const FORM: JQuery<HTMLElement> = $(selector);
    let data = {};
    FORM.find('input:not(button):not(input[type="submit"]),textarea').each( (i, e) => {
      let inputName: string = $(e).attr('name');
      let inputValue: string = $(e).val().toString();
      let colorChoice: string = $(e).parent().find('data-js-color-picker').attr('data-color-choice');
      if (inputName.length > 0 && inputValue.length > 0) {
        data[inputName] = inputValue;
      }
    })
    return data
  }
}
