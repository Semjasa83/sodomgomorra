import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
        children: [
        // { path: 'fPw', component: ForgotpwComponent},
      ],
  },
  // { path: 'home', component: HomeComponent,
  //     children: [
  //       { path: 'fPw', component: ForgotpwComponent},
  //       { path: 'main', component: MainComponent},
  //     ],
  // },
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
