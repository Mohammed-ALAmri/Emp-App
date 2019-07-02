import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee' ; 

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

  addNewEmp(event){
    const employee = event.target;
    this.newEmployee = {
      "id": employee.querySelector('#id').value,
      "name": employee.querySelector('#name').value,
      "salary":employee.querySelector('#salary').value
    };
    this.employeeService.addEmp(this.newEmployee);
  }

  deleteEmp(id){
    this.http.delete(this.url + `/${id}`).toPromise().then(() => {
      this.http.get<Employee[]>(this.url).subscribe(data => this.employees = data);
   })
  }

  searchEmp(event){
    event.preventDefault();
    const employee = event.target;
    this.employeeService.searchEmp(employee.querySelector('#id').value).subscribe(data => {
      this.emp[0] = data 
      this.employees = this.emp
    });
  }
}
