import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // private flag = false;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
}
