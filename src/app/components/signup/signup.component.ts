import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  isSignedIn=false;
  constructor(public authService:AuthService) { }


  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn=true
      else
      this.isSignedIn=false
  }

  userRegisterForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    mNumber: new FormControl('', [Validators.required,Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required])
  });

  async onsignup(email:string,password:string){
    // localStorage.setItem("email",this.userRegisterForm.get("email")?.value);
    // localStorage.setItem("password",this.userRegisterForm.get("password")?.value);
    // localStorage.setItem("mNumber",this.userRegisterForm.get("mNumber")?.value);
    // localStorage.setItem("name",this.userRegisterForm.get("name")?.value);
    // this.http.post<any>("")
    await this.authService.signup(email,password)
    if(this.authService.isLoggedIn)
    this.isSignedIn=true
  }

  get email(){
    return this.userRegisterForm.get('email');
  }

  get password(){
    return this.userRegisterForm.get('password');
  }

  get mNumber(){
    return this.userRegisterForm.get('mNumber');
  }

  get name(){
    return this.userRegisterForm.get('name');
  }
  
}
