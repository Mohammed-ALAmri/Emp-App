import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  addAdminForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required]
  });

  ngOnInit() {
  }

  registerUser(){
    
    let data = this.addAdminForm.value;
    let newAdmin = {}

    if(data.password === data.rePassword){
      newAdmin = {
        id: data.id,
        name: data.name,
        phone : data.phone,
        password: data.password
      }
      this.adminService.registerAdmin(newAdmin).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    else{
      console.log("Not equal pass")
    }
  }
} 