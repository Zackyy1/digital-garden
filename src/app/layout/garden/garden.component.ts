import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/general.service';
import { FirestoreService } from 'src/shared/firestore.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.less']
})
export class GardenComponent implements OnInit {

  NEW_PLANT_BUTTON = '[data-js-new-plant]';
  GARDEN: string = '[data-js-garden]';
  EDIT_ICON: string = '[data-js-edit-icon]'
  plants;

  constructor(private general: GeneralService,
    private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.initButtons();

    this.plants = this.firestore.plants


  }

  initButtons = () => {
    $(this.general.CLOSE_POPUP).on('click', e => {
      this.general.hidePopup();
    })

    $(this.general.POPUP).on('click', e => {
      if (!$(e.target).parents(this.general.POPUP_CONTENT).length) {
        this.general.hidePopup();
      }

    })
  }

}
