import { Component } from '@angular/core';
import * as functions from 'firebase-functions';
import { FirebaseFunctions } from '@angular/fire';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public thing;

  constructor() {
  };
}
