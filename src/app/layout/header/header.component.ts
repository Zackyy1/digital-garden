import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery';
import { AuthService } from 'src/shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})


export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private general: GeneralService,
    private auth: AuthService) {
    auth.auth.user.subscribe(e => {
      this.isLoggedIn = e ? true : false;
    })
  }

  ngOnInit() {

  }

  openPopupWithForm = (popupName) => {
    this.general.openPopupWithForm(popupName);
  }

  logout = () => {
    this.auth.logout();
  }

}
