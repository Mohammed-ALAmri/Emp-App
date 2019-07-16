import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private register_url ="http://localhost:3000/api/register" 
  private login_url ="http://localhost:3000/api/login" 

  constructor(private http: HttpClient, private router: Router) { }

  registerAdmin(newAdmin: object){
    return this.http.post<any>(this.register_url, newAdmin);
  }

  loginAdmin(admin){
    return this.http.post<any>(this.login_url, admin);
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logout() {
    localStorage.removeItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
