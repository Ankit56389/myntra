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

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    mobileNumber: new FormControl('', [Validators.required])
  });

  onSubmit() {
    localStorage.setItem('mobileNumber', this.loginForm.get('mobileNumber')?.value);
    this.router.navigate(['header']);
  }

  createAccount() {
    this.router.navigate(['signup']);
  }

  get mobileNumber() {
    return this.loginForm.get('mobileNumber');
  }
  
}
