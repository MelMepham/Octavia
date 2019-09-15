import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateWhenUserIsNotLoggedIn implements CanActivate {
  public constructor(private _authService: AuthService) {}
    public canActivate() {
      return this._authService.isLoggedIn() ? false : true
    }

}
