import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarslistComponent } from './components/carslist/carslist.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FourofourpageComponent } from './components/fourofourpage/fourofourpage.component';
import { DetailsComponent } from './components/details/details.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { DeletepageComponent } from './components/deletepage/deletepage.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarslistComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
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
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'edit',
     component: EditpageComponent
  },
  {
    path: 'delete',
    component: DeletepageComponent
  },
  {
    path: '**',
    component: FourofourpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
