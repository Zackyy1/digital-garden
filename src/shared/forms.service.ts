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
  getFormData = (selector: string): Plant => {
    const FORM: JQuery<HTMLElement> = $(selector);
    let data: Plant = {name: '', desc: '', longDesc: '', level: 1, color: ''};
    FORM.find('input:not(button),textarea').each( (i, e) => {
      let inputName: string = $(e).attr('name');
      data[inputName] = $(e).val();
    })
    return data
  }
}
