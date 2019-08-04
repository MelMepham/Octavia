import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSmall: boolean;

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) { }

  public ngOnInit() {

    this._breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isSmall = state.matches ? false : true;
      });
  }

  public toggleMobileMenu() {
    console.log('click')
  }
}
