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

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  logInAdminForm = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() { }

  logInUser(){
    let data = this.logInAdminForm.value;
    this.adminService.loginAdmin(data).subscribe(
      res => console.log(res),
      err => console.log(err))
    // this.router.navigate(['/empltoyeelist']);
  }
}