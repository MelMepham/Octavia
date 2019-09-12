import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorMessage: string;
  public successMessage: string;

  public login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  public onSubmit(value) {
    this._authService.doLogin(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

}
