import {Component, HostBinding, OnInit, OnDestroy} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Navigation, NavigationEnd, Router} from '@angular/router';
import {of, Subject} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {

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

  public ngOnInit() {
    this.updateStylesOnNavigationEnd();
  }

  public ngOnDestroy() {
    this._destroyed$.next();
  }

  public updateStylesOnNavigationEnd() {
    return this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._destroyed$)
      ).subscribe(() => this.updateStyles())
  };

  public updateStyles() {
    let route = this._router.url;
    let routeWithoutHash = route.split('#')[0];
    if (routeWithoutHash === '/home'){
      this.setStyles(this._themeService.homepage());
    }
    if (routeWithoutHash === '/about'){
      this.setStyles(this._themeService.about());
    }
    if (routeWithoutHash === '/login'){
      this.setStyles(this._themeService.login());
    }
  }
  public setStyles(theme: {}) {
    this._darkColor = theme['--dark-color'];
    this._lightColor = theme['--light-color'];
  }
}
