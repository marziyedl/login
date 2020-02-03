import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { AppLoginBoxComponent } from './app-login-box/app-login-box.component';



const appRoutes: Routes = [
 // { path: '', component: AppComponent },
  { path: 'signup', component: SignUpComponent },
    { path: 'login', component: AppLoginBoxComponent },
  { path: 'users', component: UsersComponent , canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes, { useHash: false, enableTracing: false, onSameUrlNavigation: 'reload' })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
