import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() { 
    // console.log( 'SettingsService init');
    // href="./assets/css/colors/default-dark.css" 
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);
    
  }

  changeTheme( theme:string) {

    console.log( this.linkTheme );
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);


    // coloca la marca del check
    // this.checkCurrentTheme( );
    
  }

  checkCurrentTheme( ) {

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {
      // elimina la clase 'working' que es la que pone el 'check'
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      console.log('btnThemeUrl', btnThemeUrl);
      console.log('currentTheme', currentTheme);

      if ( btnThemeUrl === currentTheme) {
        elem.classList.add('working');        
      }
      
    });    
  }
}
