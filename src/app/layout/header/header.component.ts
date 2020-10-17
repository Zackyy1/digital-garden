import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  NEW_PLANT_BUTTON = '[data-js-new-plant]';

  constructor(private general: GeneralService) { }

  ngOnInit(): void {
  }

  initClickListener = () => {
    $(this.NEW_PLANT_BUTTON).on('click', e => {
      this.openForm();
    })
  }

  openForm = () => {
    this.general.openPopup();
  }

}
