import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/general.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {

  constructor(public general: GeneralService) { }

  ngOnInit(): void {
  }

}
