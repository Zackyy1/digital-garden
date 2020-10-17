import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  CLOSE_POPUP = '[data-js-close-popup]';
  POPUP = '[data-js-popup]';
  POPUP_CONTENT = '[data-js-popup-content]';
  TOP_LAYER = '[data-js-toplayer]';
  COLOR_PICKER_HTML = `<ul class="color-picker">
    <li class="color-container"><button class="red">Red</button></li>
    <li class="color-container"><button class="green">Green</button></li>
    <li class="color-container"><button class="blue">Blue</button></li>
    <li class="color-container"><button class="orange">Orange</button></li>
    <li class="color-container"><button class="purple">Purple</button></li>
    <li class="color-container"><button class="cyan">Cyan</button></li>
    <button class="cancel-color-pick">Cancel</button>
</ul>`


  items: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
   }

  closePopup = () => {
    $(this.POPUP_CONTENT).children().remove();
    $(this.POPUP).hide();
  }
  openPopup = (content?: JQuery<HTMLElement>) => {
    if (!content) {
      $(this.POPUP).show();
      return
    }
    $(this.POPUP_CONTENT).append(content);
    $(this.POPUP).show();

  }
  openTopLayerPopup = (content: JQuery<HTMLElement>) => {
    $(this.TOP_LAYER).append(content);
    $(this.TOP_LAYER).show();
  }

  minimizeString = (sourceString: string): string => {

    return sourceString.toLowerCase().split(' ').join('-');
  }
}
