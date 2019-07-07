import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interfaces/employee' ;

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees = [];
  private emp = [];
  pageOfItems: Array<any>;
  private newEmployee: object = {};
  url = "http://localhost:5555/employees"

  constructor(private http: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.listEmp().subscribe(data => this.employees = data)
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  deleteEmp(id){
    this.http.delete(this.url + `/${id}`).toPromise().then(() => {
      this.http.get<Employee[]>(this.url).subscribe(data => this.employees = data);
   })
  }
}
