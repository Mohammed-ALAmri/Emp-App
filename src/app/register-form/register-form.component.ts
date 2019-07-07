import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private admin =[]

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  addAdminForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required]
  });

  ngOnInit() {
    this.adminService.getAdmin().subscribe(data => this.admin = data)
  }

  registerUser(){
    let data = this.addAdminForm.value;
    let newAdmin = {}
    let flag = false;
    this.admin.forEach(element => {
      if(element.phone === data.phone){
        flag = true;
      }
    });
    if(flag){
      console.log('Same Name')
    }else{
      if(data.password === data.rePassword){
        newAdmin = {
          id: data.id,
          name: data.name,
          phone : data.phone,
          password: data.password
        }
        this.adminService.addAdmin(newAdmin);
      }
      else{
        console.log("Not equal pass")
      }
    }

  }
}