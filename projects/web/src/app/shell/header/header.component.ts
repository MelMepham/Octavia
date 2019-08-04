import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSmall: boolean;
  public isMobileMenuOpen = false;

  constructor(
    private _breakpointObserver: BreakpointObserver
  ) { }

  public ngOnInit() {

    this._breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isSmall = state.matches ? false : true;
        this.isMobileMenuOpen = false;
      });
  }

  public toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
