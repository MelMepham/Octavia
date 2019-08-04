import { Component, OnInit } from '@angular/core';
import {AnimationService} from '../../../services/animation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public animationOn: boolean;


  constructor(
    private _isAnimated: AnimationService,
  ) { }

  public ngOnInit() {
    this.animationOn = this._isAnimated.isAnimated;

  }

  public onButtonClick() {
    this.animationOn = !this.animationOn;
    this._isAnimated.updateGlobalAnimationState();
  }
}
