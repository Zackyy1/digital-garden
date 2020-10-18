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
      // console.log($(e.target), $(e.target).is(POPUP_CONTENT))
      if (!$(e.target).parents(this.general.POPUP_CONTENT).length) {
        this.general.hidePopup();
      }

    })

    // $(this.NEW_PLANT_BUTTON).on('click', e => {
    //   let newPlantForm = `
        
    //     `
    //   let newPlantContent: JQuery<HTMLElement> =
    //     $(newPlantForm)
    //   this.general.openPopup(newPlantContent);
    //   newPlantContent.find('#color-picker').on('click', e => {
    //     e.preventDefault();
    //     this.general.openTopLayerPopup($(this.general.COLOR_PICKER_HTML));
    //   })
    //   newPlantContent.on('submit', e => {
    //     e.preventDefault();
    //     const data = {
    //       name: newPlantContent.find('#name').val(),
    //       desc: newPlantContent.find('#desc').val(),
    //       longDesc: newPlantContent.find('#longDesc').val(),
    //       level: newPlantContent.find('#level').val(),
    //     }
    //     console.log('We gotem', data)
    //     this.addNewPlant(data);
    //     this.general.closePopup();
    //   });


    // })
  }

  addNewPlant = (data) => {


  }
  showPlantDetails = (el: JQuery<HTMLElement>) => {
    const PATH = el.data('path');
    const PLANT_NAME: string = PATH.substring(PATH.lastIndexOf('/'))
    // this.general.firestore.collection('plants').doc(PLANT_NAME).get()
    //   .then(ref => {
    //     const DATA = ref.data();
    //     console.log(DATA)
    //     const POPUP_HTML: string = `
    //     <div class="plant-popup-content">
    //         <h1 class="plant-popup-name">${DATA.name}</h1>
    //         <p class="plant-popup-description">${DATA.longDesc}</p>
    //         <!-- <div class="images">(todo)</div> -->
    //         <p class="plant-popup-level">${DATA.level}</p>
    //     </div>
    //     `;

    //     this.general.openPopup($(POPUP_HTML)); // Open with DATA
    //   }).catch(err => {
    //     console.warn(err);
    //   });
  }


}
