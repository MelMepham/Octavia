import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AnimationService} from "../../services/animation.service";
import {takeUntil} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Book { name: string; }


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  private _destroyed$ = new Subject();
  public shouldAnimate: boolean;

  public items: Observable<any[]>;

  constructor(
    private _isAnimated: AnimationService,
    private _db: AngularFirestore
  ) {
    this.items = _db.collection('/books').valueChanges();
    // console.log(this.items)
  }

  public ngOnInit() {
    this._isAnimated.isAnimatedObservable$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(val => this.shouldAnimate = val)
  }

  public ngOnDestroy() {
    this._destroyed$.next();
  }
}
