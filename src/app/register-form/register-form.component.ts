import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from "@angular/router"


@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  private passFlag = true;
  private phoneFlag = true;

  addAdminForm = this.fb.group({
    id: ['',[Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rePassword: ['', [Validators.required, Validators.minLength(6)]]
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
        res => {console.log(res)
                localStorage.setItem('token', res.token)
                this.router.navigate(['/login'])},
        err => {console.log(err)
                this.phoneFlag = false})
    }
    else{
      this.passFlag = false
    }
  }

  get name(){
    return this.addAdminForm.get('name');
  }
  get phone(){
    return this.addAdminForm.get('phone');
  }
  get password(){
    return this.addAdminForm.get('password');
  }
  get rePassword(){
    return this.addAdminForm.get('rePassword');
  }
} 