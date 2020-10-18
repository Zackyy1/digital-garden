import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';
import { GeneralService } from 'src/shared/general.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {


  FORM: string = '[data-js-login-form]';
  LOGIN_BUTTON: string = '[data-js-login-button]'
  isLoggedIn: boolean;

  constructor(
    private general: GeneralService,
    private auth: AuthService,
    private router: Router,
    private fireAuth: AngularFireAuth,

  ) { 
    
  }


  ngOnInit(): void {
    
    this.fireAuth.user.subscribe(e => {
      if (e) {
        this.router.navigate(['garden']);
      }
    })

    this.initLoginButtonListener();
  
  }

  initLoginButtonListener = () => {

    // Initiate login
    $(this.LOGIN_BUTTON).on('click', e => {
      e.preventDefault();
      const EMAIL: string = $(this.FORM).find('input[type=email]').val().toString();
      const PASS: string = $(this.FORM).find('input[type=password]').val().toString();
      this.auth.login(EMAIL, PASS);
    })
  
    
  }


}
