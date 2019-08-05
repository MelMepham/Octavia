import {Component, OnInit, OnDestroy} from '@angular/core';
import {AnimationService} from "../../services/animation.service";
import {Subject} from 'rxjs';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  private _destroyed$ = new Subject();
  public shouldAnimate: boolean;
  constructor(
    private _isAnimated: AnimationService
  ) { }

  public ngOnInit() {
    this._isAnimated.isAnimatedObservable$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(val => this.shouldAnimate = val)
  }

  public ngOnDestroy() {
    this._destroyed$.next();
  }

}
