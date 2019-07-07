import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private admin =[]

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  logInAdminForm = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
    this.adminService.getAdmin().subscribe(data => this.admin = data)
  }

  logInUser(){
    let data = this.logInAdminForm.value;
    this.adminService.logInUser(data)
  }

}
