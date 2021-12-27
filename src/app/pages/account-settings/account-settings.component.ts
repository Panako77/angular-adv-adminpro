import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public links: NodeListOf<Element>;
  
  
  constructor( private settingsService: SettingsService) { 

  }

  ngOnInit(): void {
    // selecciona todos los links con clase selector
    this.settingsService.checkCurrentTheme();
    
  }

  changeTheme( theme:string) {

    this.settingsService.changeTheme( theme );
    // coloca la marca del check
    this.settingsService.checkCurrentTheme();
    
  }


  
}
