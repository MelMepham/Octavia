import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimationService} from "../../../services/animation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public animationOn: boolean;
  constructor(
    private _isAnimated: AnimationService
  ) { }

  public ngOnInit() {
    this.animationOn = this._isAnimated.isAnimated;
  }

  public onButtonClick() {
    this.animationOn = !this.animationOn;
    this._isAnimated.updateGlobalAnimationState();
  }
}
