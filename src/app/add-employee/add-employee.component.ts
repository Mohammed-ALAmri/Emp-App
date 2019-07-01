import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    salary: new FormControl(''),
    dev: new FormControl(''),
    birthdate: new FormControl(''),
    idp: new FormControl(''),
    namep: new FormControl(''),
    startp: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
