import { Injectable } from '@angular/core';

export const homepageTheme = {
  '--dark-color': '#1a237e',
  '--light-color': '#6effff'
};

export const aboutMeTheme = {
  '--dark-color': '#8e0038',
  '--light-color': '#ffc1e3'
};

@Injectable({ providedIn: 'root' })

export class ThemeService {

  homepage() {
    return homepageTheme;
  }

  about() {
    return aboutMeTheme
  }

}
