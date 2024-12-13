import { Component, ViewChild } from '@angular/core';
import { IdentityService } from './identity.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss',
})
export class IdentityComponent {
  loginForm!: FormGroup;
  isLoggedIn?: boolean = false;

  constructor(private fb: FormBuilder,private service:IdentityService, private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid)
      return;

    this.service.login(this.loginForm.value).pipe().subscribe(res => {
      this.isLoggedIn = true;

      if (res.isSucceeded==true){
        localStorage.setItem('token',res.token)
                this.router.navigateByUrl('/LoggedEntries');

      }
      else   
         this.router.navigateByUrl('/login');

    },
      err => {
        this.isLoggedIn = false;
      },
      () => {
        if (this.isLoggedIn == null)
          this.isLoggedIn = false;

      });
  }
}
