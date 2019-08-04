import { Injectable } from '@angular/core';

export const homepageTheme = {
  '--dark-color': '#00522D',
  '--light-color': '#9CFFE4'
};

export const aboutMeTheme = {
  '--dark-color': 'pink',
  '--light-color': 'hotpink'
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
