import { SignUpComponent } from './Auth/sign-up-client/sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFreelanceurComponent } from './Auth/sign-up-freelanceur/sign-up-freelanceur.component';
import { ChoixincriptionComponent } from './choixincription/choixincription.component';
import { SignUpGardeGuard } from './guard/sign-up-garde.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component: HomeComponent},
  {path:'choix',component: ChoixincriptionComponent},
  {path:'sign-in',component: SignInComponent},
  {path:'sign-up',component: SignUpComponent,canActivate:[SignUpGardeGuard]},
  {path:'sign-up-freelance',component:SignUpFreelanceurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
