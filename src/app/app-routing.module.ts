import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChartsComponent } from './charts/charts.component'

import { AdminGuard } from './services/admin.guard'

const routes: Routes = [
  {
    path: "" ,
    redirectTo:"homepage",
    pathMatch: "full"
  },
  {
    path: "login" ,
    component: LoginFormComponent
  },
  {
    path: "register" ,
    component: RegisterFormComponent
  },
  {
    path: "homepage" ,
    component: HomeComponent
  },
  {
    path: "employeelist" ,
    component: ListComponent,
    canActivate: [AdminGuard]
  },  
  {
    path: "addemployee" ,
    component: AddEmployeeComponent,
    canActivate: [AdminGuard]

  },  
  {
    path: "search" ,
    component: SearchComponent,
    canActivate: [AdminGuard]

  },
  {
    path: "charts" ,
    component: ChartsComponent,
    canActivate: [AdminGuard]

  },
  {
    path: "**" ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }