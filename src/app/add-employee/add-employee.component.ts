import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  addEmployeeForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    salary: ['', Validators.required],
    dev: ['', Validators.required],
    birthdate: ['', Validators.required],
    idp: this.fb.array([''], Validators.required),
    namep: this.fb.array(['']),
    startp:this.fb.array([''])
  });

  ngOnInit() {

  }

  addProject(){
    this.idp.push(this.fb.control(''));
    this.namep.push(this.fb.control(''));
    this.startp.push(this.fb.control(''));
  }

  onSubmit(){
    let data = this.addEmployeeForm.value;
    let isDev = false;
    console.log(data)
    if(data.dev == "true"){
      isDev = true
    }

    let newEmp = {
      id: data.id,
      name: data.name,
      salary: data.salary,
      birthdate: data.birthdate,
      isDev: data.dev,
      projects: [
        {
          id: data.idp[0],
          name: data.namep[0],
          startDate: data.startp[0]
        }
      ]
    }
    this.employeeService.addEmp(newEmp);
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
    return this.addEmployeeForm.get('idp') as FormArray;
  }

  get namep(){
    return this.addEmployeeForm.get('namep') as FormArray;
  }

  get startp(){
    return this.addEmployeeForm.get('startp') as FormArray;
  }
}
