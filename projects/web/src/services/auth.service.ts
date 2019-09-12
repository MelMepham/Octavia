// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from "@angular/core";
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(public afAuth: AngularFireAuth) {}

  public doLogin(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  public doRegister(value) {
    //Do some stuff in here to create a user.
  }
}
