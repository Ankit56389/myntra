import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  loginForm:any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  onSubmit() {
    localStorage.setItem('email', this.loginForm.get('email')?.value);
    localStorage.setItem('password', this.loginForm.get('password')?.value);
    // console.log(this.loginForm.value);
    this.router.navigate(['header']);
  }

  createAccount() {
    this.router.navigate(['signup']);
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }
}
