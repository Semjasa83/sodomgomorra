import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameinterfaceComponent } from "./interface/gameinterface/gameinterface.component";


const routes: Routes = [
  { path: '',   redirectTo: 'gameinterface', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent,
  //       children: [
        // { path: 'fPw', component: ForgotpwComponent},
  //     ],
  // },
  { path: 'gameinterface', component: GameinterfaceComponent,
  //     children: [
  //       { path: 'fPw', component: ForgotpwComponent},
  //       { path: 'main', component: MainComponent},
  //     ],
  },
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'gameinterface' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GameinterfaceComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
