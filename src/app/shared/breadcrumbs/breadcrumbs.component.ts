import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  title: string;
  public tituloSubs$:Subscription;

  constructor( private router: Router) { 

    this.tituloSubs$ = this.argumentosRuta()
                        // desestructuracion de 'data.titulo' en titulo
                        .subscribe( ({ titulo }) => {
                          // console.log( titulo );
                          this.title = titulo;
                          document.title = ` Admin Pro - ${ titulo }`;              
                        } );



  }

  ngOnInit(): void {
  }


  argumentosRuta() {

    // retornamos el argumento 'data'

    return this.router.events
      .pipe(
        filter( event =>  event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) =>  event.snapshot.firstChild === null),
        map( (event: ActivationEnd) =>  event.snapshot.data )
      )

  }

}
