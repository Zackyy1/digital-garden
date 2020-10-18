import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { FirestoreService } from 'src/shared/firestore.service';
import { FormsService } from 'src/shared/forms.service';
import { GeneralService, Plant } from 'src/shared/general.service';

@Component({
  selector: 'app-create-plant-form',
  templateUrl: './create-plant-form.component.html',
  styleUrls: ['./create-plant-form.component.less']
})
export class CreatePlantFormComponent implements OnInit {

  colorPicker: string = '[data-js-color-picker]'
  colorPickerCancel: string = '[data-js-cancel-color-pick]'
  ATTR_COLOR_CHOICE: string = 'data-color-choice';
  FORM: string = '[data-js-new-plant-form]';


  constructor(
    private forms: FormsService,
    private firestore: FirestoreService,
    private general: GeneralService
    ) { }

  ngOnInit(): void {
    this.initColorPickListener();
  }

  initColorPickListener = () => {
    $(this.colorPicker).find('button').on('click', e => {
      e.preventDefault();
      // const $BUTTON: JQuery<HTMLElement> = $(e.target);
      // console.log('Picked color', $BUTTON.data('color'));
      // $BUTTON.parent().parent().data('color-choice', $BUTTON.data('color'))

      this.chooseColor(e)
      
    })
  }

  openColorPicker = (e): void => {
    e.preventDefault();    
    $(this.colorPicker).removeClass('hidden');
    $(this.colorPickerCancel).removeClass('hidden');

  }
  closeColorPicker = (e): void => {
    e.preventDefault();
    $(this.colorPicker).addClass('hidden');
    $(this.colorPickerCancel).addClass('hidden');
  }

  getColorChoice = (): string => {
    return $(this.colorPicker).data('color-choice');
  }

  chooseColor = (e): void => {
    const PICKED_COLOR_ELEMENT = $(e.target);
    const PICKED_COLOR = PICKED_COLOR_ELEMENT.data('color');
    console.log('Chose color', PICKED_COLOR);
    $(this.colorPicker).attr('data-color-choice', PICKED_COLOR)
  }

  submitNewPlantForm = (e) => {
    e.preventDefault();
    console.log('Submitting for with data');
    let data: Plant = this.forms.getFormData(this.FORM);
    data['color'] = this.getColorChoice();

    console.log('Submitting:', data);
    this.firestore.addPlant(data)
    this.general.hidePopup();
    
    
  }

}
