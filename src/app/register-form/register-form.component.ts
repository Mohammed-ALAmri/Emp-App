import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  registerUser(event){
    event.preventDefault();
    const target = event.target
    let first = target.querySelector('#first').value
    let last = target.querySelector('#last').value
    let phoneNumber = target.querySelector('#phoneNumber').value
    let Password = target.querySelector('#Password').value
    let Password2 = target.querySelector('#Password2').value
  }
}
