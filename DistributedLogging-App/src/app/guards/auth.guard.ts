import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')!=null) {
      return true; // Allow access if authenticated
    }

    this.router.navigateByUrl('/login'); // Redirect to login if not authenticated
    return false; // Block access
  }
}
