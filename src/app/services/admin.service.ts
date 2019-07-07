import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin' ;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:5555/admin"
  private flag = false;

  constructor(private http: HttpClient) { }

  addAdmin(newAdmin: object){
    this.http.post(this.url, newAdmin).subscribe();
  }

  getAdmin(): Observable <Admin[]>{
    return this.http.get<Admin[]>(this.url);
  }

  logInUser(d){
    let admin = []
    this.getAdmin().subscribe(data =>{
      admin = data ; 
      admin.forEach(element => {
        if(element.phone === d.phone && element.password === d.password){
          console.log('loging In...')
          this.flag = true;
        }
      })
    })
  }

  getFlag(){
    return this.flag
  }
}
