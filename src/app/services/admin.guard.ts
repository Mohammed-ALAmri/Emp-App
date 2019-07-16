import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './admin.service'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _adminService: AdminService, private _router: Router) { }

  canActivate(): boolean {
    if (this._adminService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}