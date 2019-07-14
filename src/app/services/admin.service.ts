import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin' ;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private register_url ="http://localhost:3000/api/register" 
  private login_url ="http://localhost:3000/api/login" 

  constructor(private http: HttpClient) { }

  registerAdmin(newAdmin: object){
    return this.http.post<any>(this.register_url, newAdmin);
  }

  loginAdmin(admin){
    return this.http.post<any>(this.login_url, admin);
  }
}
