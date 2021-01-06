import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import { UserLoginModel } from '../models/UserLoginModel';
import { FormGroup } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private fb : FormBuilder, private service:AuthServiceService, private router: Router) { }
  
  public loginForm : FormGroup;
  
  
  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, 
                   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     password : ['', Validators.required]
     });
    }

  get f(){
    return this.loginForm.controls
  }
  
  get email(){
   return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  doLogin(){
    this.service.login(this.f.email.value, this.f.password.value)
    .subscribe(data => {
      const email = this.f.email.value;
      const password = this.f.password.value;
      
      let authString = btoa(email+':'+ password);
      localStorage.setItem('user', authString);

      console.log("succes  ! " + email+" "+password);
      if(email == "admin@admin.com"){
      this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/login']);
        alert("NOT authorized to continue!");
      }
    },
      error => {
        if(error instanceof HttpErrorResponse){
           if(error.status == 401){
             alert("Email not found or wrong password")
           };
        }
         }
      )
  }
}
