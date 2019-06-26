import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee' ; 
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  listEmp(): Observable <Employee[]>{
    return this.http.get<Employee[]>("http://dummy.restapiexample.com/api/v1/employees")
  }

  deleteEmp(id): Observable <Employee[]>{
    return this.http.delete<Employee[]>(`http://dummy.restapiexample.com/api/v1/${id}`)
  }
}