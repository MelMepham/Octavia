import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public errorMessage: string;

  public login = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: new FormControl('', [Validators.required])
  });

  constructor(private _authService: AuthService, private _router: Router) { }

  get email() { return this.login.get('email') }

  get password() { return this.login.get('password') }

  public onBlur() {
    if (this.login.get('email').updateOn === 'blur') {
      const value = this.login.get('email').value;
      const newControl = new FormControl(value, {
          validators: [Validators.required, Validators.email],
          updateOn: "change"
        });
      this.login.setControl('email', newControl);
    this.login.get('email').markAsTouched();
    }
  }

  public onSubmit(value) {
    this._authService.doLogin(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        //TODO: route to the home page with a logged in.
        this.login.reset();
        this._router.navigate(['./home'])
      }, err => {
        console.log(err);
        if (err.code === 'auth/internal-error') {
          this.errorMessage = "Something went wrong on our side, please try again.";
        } else {
          this.errorMessage = "Something went wrong. Please make sure your details are correct and try again";
        }
      })
  }

}
