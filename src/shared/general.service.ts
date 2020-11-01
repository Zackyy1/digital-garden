import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

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
  hidePopup = ($event?) => {
    let doReturn = false;
    if ($event) {
      $event.path.map( pathPiece => {
        if ($(pathPiece).hasClass('popup-content')) {
          doReturn = true
        }
      })
    }
    if (doReturn) {
      return;
    }
    $(this.POPUP).addClass('hidden');
    $(this.POPUP).find(this.POPUP_CONTENT).children().children().addClass('hidden')
  }

  minimizeString = (sourceString: string): string => {
    return sourceString.toLowerCase().split(' ').join('-');
  }

  getCurrentUrlSubscription = () => {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        return event.url
      }

    })
  }

  randomString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  redirect = (navigateTo: string | Array<string>) => {
    if (!Array.isArray(navigateTo)) {
      navigateTo = [navigateTo]
    };
    this.router.navigate(navigateTo as Array<string>)
  }

  openPopupWithForm = (popupName: string, data?) => {
    this.showPopup();
    switch (popupName) {
      case 'newPlantForm':
        $(this.NEW_PLANT_FORM).removeClass('hidden')

        break;
      case 'editPlantForm':
        $(this.EDIT_FORM).removeClass('hidden')
        if (data) {
          console.log(data);
          console.log($(this.EDIT_FORM).find('input:not([type="submit"])'));
          for (let plantDataPiece in data) {            
            $(this.EDIT_FORM).find('#'+plantDataPiece).val(data[plantDataPiece])
          }
          $(this.EDIT_FORM).find('[data-color-choice]').attr('data-color-choice', data.color)
          
        }

        break;
      default:
        break;
    }

    

  }

}
