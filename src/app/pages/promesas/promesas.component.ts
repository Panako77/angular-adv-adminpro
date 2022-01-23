import { Component, OnInit } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 

  }
  
  ngOnInit(): void {
    
    this.getUsuarios().then( ( usuarios ) => {
      console.log( usuarios );
      
    });

    // this.getUsuarios();
    // const promesa = new Promise( (resolve, reject) => {

    //   if ( false ) {        
    //     resolve( 'Hola mundo');
    //   } else {        
    //     reject('algo salio mal');
    //   }      
    // });

    // promesa.then( ( resp ) => {
    //   // console.log('Terminé');
    //   console.log( resp );      
    // })
    // .catch( ( err ) => {
    //   console.error( err );
    // });

    // console.log('Fin del Init');    

    
    
  }
  
  getUsuarios(){

    // const promesa = new Promise( ( resolve )=>{
    return new Promise( ( resolve )=>{

      fetch( 'https://reqres.in/api/users?page=2' )
        .then( resp => resp.json() )
        .then( (body) => resolve( body.data )
      );
    });

    // return promesa;



  }




}
