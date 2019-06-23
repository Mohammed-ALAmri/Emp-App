import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.listEmp().subscribe(data => this.employees = data)
  }

}
