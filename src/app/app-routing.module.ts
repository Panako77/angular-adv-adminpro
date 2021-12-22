import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// MODULOS
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// COMPONENTES
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [


  // {path: 'dashboard', PageRouting},
  // {path: 'auth', AuthRouting},
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full'},

  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
