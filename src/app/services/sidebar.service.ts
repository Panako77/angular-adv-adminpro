import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url:''},
        { title: 'ProgresBar', url:'progress'},
        { title: 'Gráficas', url:'grafica1'},
        { title: 'Promesas', url:'promesas'},
        { title: 'rxjs', url:'rxjs'},

      ]
    }
  ]

  constructor() { }
}
