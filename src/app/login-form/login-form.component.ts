import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from "@angular/router"

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private admin =[];
  private phoneFlag = true;

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  logInAdminForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/)]],
    password: ['', Validators.required],
  });

  ngOnInit() { }

  logInUser(){
    let data = this.logInAdminForm.value;
    this.adminService.loginAdmin(data).subscribe(
      res => {console.log(res)
              localStorage.setItem('token', res.token)
              this.router.navigate(['/employeelist'])},
      err => {console.log(err)
              this.phoneFlag = false})
  }

  get phone(){
    return this.logInAdminForm.get('phone');
  }
  get password(){
    return this.logInAdminForm.get('password');
  }

}