import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private employees = [];
  pageOfItems: Array<any>;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.listEmp().subscribe(data => this.employees = data)
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
