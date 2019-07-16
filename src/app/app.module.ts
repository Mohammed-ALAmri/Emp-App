import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AlertComponent } from './alert/alert.component';
import { SearchComponent } from './search/search.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChartsComponent } from './charts/charts.component';

import { AdminService } from "./services/admin.service";
import { AdminGuard } from './services/admin.guard';
import { TokenInterceptorService } from './services/token-interceptor.service'

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListComponent,  
    JwPaginationComponent,
    AlertComponent,
    SearchComponent, 
    AddEmployeeComponent, 
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    AdminService, 
    AdminGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }