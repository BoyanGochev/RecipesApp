import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ShareComponent } from './recipes/share/share.component';
import { DetailsComponent } from './recipes/details/details.component';
import { EditComponent } from './recipes/edit/edit.component';
import { ProfileComponent } from './users/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'share',
    component: ShareComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
