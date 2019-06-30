import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee' ; 
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://localhost:5555/employees"
  constructor(private http: HttpClient) { }

  listEmp(): Observable <Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  addEmp(newEmployee: object){
    this.http.post(this.url, newEmployee).subscribe();
  }

  searchEmp(id): Observable <Employee[]>{
    return this.http.get<Employee[]>(this.url+`/${id}`);
  }
}