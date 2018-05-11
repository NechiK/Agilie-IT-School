import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: any;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }
  facebookLogin() {
    this.afAuth.auth.signInWithPopup(new FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  isUserLoggedIn() {
    if (this.userDetails) {
      return true;
    } else {
      return false;
    }
  }
  getUser() {
    return {
      name: this.userDetails.displayName,
      email: this.userDetails.email
    };
  }

}
