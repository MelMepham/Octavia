import {Component, HostBinding, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Navigation, NavigationEnd, Router} from '@angular/router';
import {of, Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
import {ThemeService} from '../../services/theme.service';
import {objectKeys} from 'codelyzer/util/objectKeys';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  public _destroyed$ = new Subject;

  private _lightColor;
  private _darkColor;

  constructor(
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private _themeService: ThemeService
  ) {
  }

  @HostBinding('attr.style')
  get style() {
    return this._sanitizer.bypassSecurityTrustStyle(`--dark-color: ${this._darkColor}; --light-color: ${this._lightColor}`);
  }

  ngOnInit() {
    this.updateStylesOnNavigationEnd();
    this.updateStyles()
  }

  public updateStylesOnNavigationEnd() {
    return this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._destroyed$)
      ).subscribe(() => this.updateStyles())
  };

  public updateStyles() {
    if (this._router.url === '/home'){
      this.setStyles(this._themeService.homepage());
    }
    if (this._router.url === '/about'){
      this.setStyles(this._themeService.about());
    }
  }
  public setStyles(theme: {}) {
    this._darkColor = theme['--dark-color'];
    this._lightColor = theme['--light-color'];
  }
}
