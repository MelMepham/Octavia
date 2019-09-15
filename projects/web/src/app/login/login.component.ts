import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public errorMessage: string;
  public successMessage: string;

  public login = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: new FormControl('', [Validators.required])
  });

  constructor(private _authService: AuthService) { }

  get email() { return this.login.get('email') }

  get password() { return this.login.get('password') }

  public onBlur() {
    if (this.login.get('email').updateOn === 'blur') {
      const value = this.login.get('email').value;
      const newControl = new FormControl(value, {
          validators: [Validators.required, Validators.email],
          updateOn: "change"
        });
      this.login.setControl('email', newControl)
    this.login.get('email').markAsTouched()
    }
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
