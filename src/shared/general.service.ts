import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';

export interface Plant { 
  id?: string,
  name: string, 
  desc: string,
  longDesc: string,
  level: number,
  color: string
}

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  CLOSE_POPUP = '[data-js-close-popup]';
  POPUP = '[data-js-popup]';
  POPUP_CONTENT = '[data-js-popup-content]';
  EDIT_FORM: string = '[data-js-edit-plant-form]';
  NEW_PLANT_FORM: string = '[data-js-new-plant-form]';
  currentUrl: string;

  constructor(
    public firestore: AngularFirestore,
    public router: Router
    ) {
      this.Init();
    }


  Init = () => {
    this.getCurrentUrlSubscription();
  }

  showPopup = () => {
    $(this.POPUP).removeClass('hidden');
  }
  hidePopup = () => {
    $(this.POPUP).addClass('hidden');
    $(this.POPUP).find(this.POPUP_CONTENT).children().children().addClass('hidden')
  }

  minimizeString = (sourceString: string): string => {
    return sourceString.toLowerCase().split(' ').join('-');
  }

  getCurrentUrlSubscription = () => {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      
    })
  }

  redirect = (navigateTo: string | Array<string>) => {
    if (!Array.isArray(navigateTo)) {
      navigateTo = [navigateTo]
    };
    this.router.navigate(navigateTo as Array<string>)
  }

  openPopupWithForm = (popupName: string) => {
    this.showPopup();
    switch (popupName) {
      case 'newPlantForm':        
          $(this.NEW_PLANT_FORM).removeClass('hidden')

        break;
    
      default:
        break;
    }
  }

}
