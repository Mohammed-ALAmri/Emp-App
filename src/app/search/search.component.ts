import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee' ;

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private employees = [];
  private searchEmp = [];
  private idse = false;
  private nese = false;
  private prse = false;
  private noShow = false;
  private url = "http://localhost:5555/employees"

  constructor(private fb: FormBuilder, private http: HttpClient, private employeeService: EmployeeService) { }

  serchIdForm = this.fb.group({
    id: ['']
  });

  serchNameForm = this.fb.group({
    name: ['']
  });

  serchProjectForm = this.fb.group({
    project: ['']
  });

  ngOnInit() {
    this.employeeService.listEmp().subscribe(data => this.employees = data)
  }

  deleteEmp(id){
    this.http.delete(this.url + `/${id}`).toPromise().then(() => {
      this.http.get<Employee[]>(this.url).subscribe(data => this.searchEmp = data);
   })
  }

  searchId(){
    let data = this.serchIdForm.value;
    this.searchEmp = [];
    this.employees.forEach(e => {
      if(e.id == data.id){
        this.searchEmp.push(e);
      }
    });
    if(this.searchEmp.length > 0){
      this.noShow = true;
    }
    else{
      this.noShow = false;
    }
  }

  searchName(){
    let data = this.serchNameForm.value;
    let res = data.name.toLowerCase()
    this.searchEmp = [];
    this.employees.forEach(e => {
      if(e.name.toLowerCase().includes(res)){
        this.searchEmp.push(e);
      }
    });
    if(this.searchEmp.length > 0){
      this.noShow = true;
    }
    else{
      this.noShow = false;
    }
  }

  searchProj(){
    let data = this.serchProjectForm.value;
    this.searchEmp = [];
    this.employees.forEach(e => {
      if(e.projects.length >= data.project){
        this.searchEmp.push(e);
      }
    });
    if(this.searchEmp.length > 0){
      this.noShow = true;
    }
    else{
      this.noShow = false;
    }
}

  seid(){
    this.idse = true;
    this.nese = false;
    this.prse = false;
  }

  sene(){
    this.nese = true;
    this.idse = false;
    this.prse = false;
  }

  sepr(){
    this.prse = true;
    this.nese = false;
    this.idse = false;
  }
}
