import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  addEmployeeForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    salary: ['', Validators.required],
    dev: ['', Validators.required],
    birthdate: ['', Validators.required],
    idp: ['', Validators.required],
    namep: ['', Validators.required],
    startp:['', Validators.required]
  });

  ngOnInit() {

  }

  get id(){
    return this.addEmployeeForm.get('id');
  }

  get name(){
    return this.addEmployeeForm.get('name');
  }

  get salary(){
    return this.addEmployeeForm.get('salary');
  }

  get dev(){
    return this.addEmployeeForm.get('dev');
  }

  get birthdate(){
    return this.addEmployeeForm.get('birthdate');
  }

  get idp(){
    return this.addEmployeeForm.get('idp');
  }

  get namep(){
    return this.addEmployeeForm.get('namep');
  }

  get startp(){
    return this.addEmployeeForm.get('startp');
  }

}
