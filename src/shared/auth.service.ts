import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;
  Auth;

  constructor(
    public auth: AngularFireAuth,
    private router: Router
    ) {
    this.Auth = auth.user.subscribe(e => {
      console.log(e);
      this.isLoggedIn = e ? true : false;
      return e
    })
  }


  login(email, pass) {
    this.auth.signInWithEmailAndPassword(email, pass).then((e) => {
      console.log('Logged in as', e);
      this.router.navigate(['garden']);

    }).catch((err) => {
      console.log(err);
      alert('You are not allowed here :(')
    });
  }
  logout() {
    this.auth.signOut();

  }
}
