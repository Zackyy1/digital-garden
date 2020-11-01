import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/shared/firestore.service';
import { FormsService } from 'src/shared/forms.service';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit-plant-form',
  templateUrl: './edit-plant-form.component.html',
  styleUrls: ['./edit-plant-form.component.less']
})
export class EditPlantFormComponent implements OnInit {

  colorPicker: string = '[data-js-color-picker]'
  colorPickerCancel: string = '[data-js-cancel-color-pick]'
  ATTR_COLOR_CHOICE: string = 'data-color-choice';
  FORM: string = '[data-js-edit-plant-form]';
  currentUrl;
  plantId;

  constructor(
    private forms: FormsService,
    private firestore: FirestoreService,
    private general: GeneralService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initColorPickListener();

    this.getCurrentUrlSubscription();
    
    
  }

  initColorPickListener = () => {
    $(this.FORM).find(this.colorPicker).find('button').on('click', e => {
      e.preventDefault();
      // const $BUTTON: JQuery<HTMLElement> = $(e.target);
      // console.log('Picked color', $BUTTON.data('color'));
      // $BUTTON.parent().parent().data('color-choice', $BUTTON.data('color'))

      this.chooseColor(e)
      
    })
  }


  getCurrentUrlSubscription = () => {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        let searchableString = '/plant/';
        let idWithParams = this.currentUrl.slice(searchableString.length);
        let idWithoutParams = idWithParams.substr(0, idWithParams.indexOf('/') > 0 ? idWithParams.indexOf('/') : idWithParams.length)
        this.plantId = idWithoutParams;
        
        return event.url
      }

    })
    
  }

  openColorPicker = (e): void => {
    e.preventDefault();    
    $(this.FORM).find(this.colorPicker).removeClass('hidden');
    $(this.FORM).find(this.colorPickerCancel).removeClass('hidden');

  }
  closeColorPicker = (e): void => {
    e.preventDefault();
    $(this.FORM).find(this.colorPicker).addClass('hidden');
    $(this.FORM).find(this.colorPickerCancel).addClass('hidden');
  }

  getColorChoice = (): string => {
    return $(this.FORM).find(this.colorPicker).data('color-choice');
  }

  chooseColor = (e): void => {
    const PICKED_COLOR_ELEMENT = $(e.target);
    const PICKED_COLOR = PICKED_COLOR_ELEMENT.data('color');
    console.log('Chose color', PICKED_COLOR);
    $(this.FORM).find(this.colorPicker).attr('data-color-choice', PICKED_COLOR)
  }

  submitEditPlantForm = (e) => {
    e.preventDefault();
    console.log('Submitting for with data');
    let data = this.forms.getFormData(this.FORM);
    data['color'] = this.getColorChoice();

    console.log('Submitting:', data);
    this.firestore.editPlant({plantId: this.plantId, data})
    this.general.hidePopup();
    
    
  }
}
