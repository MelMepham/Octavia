import {Component, OnInit} from '@angular/core';
import {AnimationService} from "../../../services/animation.service";
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public animationOn: boolean;
  constructor(
    private _isAnimated: AnimationService,
    private _router: Router
  ) { }

  public ngOnInit() {
    this.animationOn = this._isAnimated.isAnimated;
    this.setStyleOnRoute();
  }

  public setStyleOnRoute () {
    console.log(this._router.url);
  }

  public onButtonClick() {
    this.animationOn = !this.animationOn;
    this._isAnimated.updateGlobalAnimationState();
  }
}
