import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() { }

  ngOnInit(): void {


    // this.retornaObservable().pipe(
    //   retry( 2 )
    // )    
    // .subscribe(
    //   valor => console.log( 'Subs: ', valor),
    //   error => console.warn( 'Error', error ),
    //   // el siguiente es el complete
    //   () => console.log( 'Obs$ terminado')    
    // );

    this.intervalSubs = this.retornaIntervalo()
      // .subscribe( (resp) => { console.log( resp );});
      // .subscribe( (resp) => console.log( resp ) );
      .subscribe( console.log );

  }

  // retornaIntervalo(): Observable<string> {

  //   // const intervalo$ = interval( 1000 )
  //   return interval( 1000 )
  //           .pipe(
  //             take(4),
  //             map( valor => 'hola mundo ' + (valor + 1)
  //             )
  //           );
  //   // return intervalo$;
                          
  // }



  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  

  retornaIntervalo(): Observable<number> {

    return interval( 300 )
            .pipe(
              map( valor => valor + 1),
              take(10),              
              filter( valor => ( valor % 2 == 0 ? true: false )),
            );
                          
  }

  



  // retornaObservable():Observable<number> {

  //   let i = -1;
  //   let counter = 0;

  //   const obs$ = new Observable<number>( observer => {

      
  //     const intervalo = setInterval( () => {

  //       // console.log( "click" );
  //       i++;
  //       observer.next( i );
        
  //       if ( i == 4 ) {
  //         clearInterval( intervalo );
  //         observer.complete()
  //       }
        
  //       if ( i == 2 ) {

  //         counter++;

  //         console.log( 'ERROR, i ha llegado a 2');
  //         if ( counter < 2 ) {
  //           i = -1;            
  //         }
  //         clearInterval( intervalo );
  //         observer.error( 'i ha llegado a 2' )
  //       }

  //     },1000);

  //   });

  //   return obs$;
  // }

}
