// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from "@angular/core";
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {Router} from '@angular/router';
import {errorComparator} from 'tslint/lib/verify/lintError';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;

  public constructor(public afAuth: AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  public doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      // TODO: route somewhere
        .then(res => {
          resolve(res);
        }, err => {
          reject(err)
        })
    })
  }

  public logout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(res => {
          resolve(res);
          this.router.navigate(['./login'])
        }, err => {
          reject(err)
        })
    })
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  public register(value) {

    //this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
    //Do some stuff in here to create a user.
  }
}
