import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  public onSubmit() {

  }
  constructor() { }

  ngOnInit() {
  }

}
