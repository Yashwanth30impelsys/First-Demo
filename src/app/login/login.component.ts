import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { LoginModel } from '../login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = '';
  model: any;

  constructor(private route: Router, private logservice: LoginService) { }
  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [Validators.minLength(6), Validators.required]);

  ngOnInit() {
  }
  emailHasError() {
    return this.email.hasError('required') ? 'you must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  passwordHasError() {
    return this.password.hasError('minLength') ? 'password should be length of 6 letters' :
      this.password.hasError('required') ? 'You must enter password' : '';
  }
  loginf(): void {
    this.model = {
      "email": this.email.value,
      "password": this.password.value
    }


    /*login():void{
      if(this.email.value== "yash@gmail.com" && this.password.value=="yashwanth" ){
        this.message="Login success";
        this.route.navigate(['/home']);
      }else{
        this.message="invalid login credentials";
      }
    }
    */
    let obj = this.logservice.loginFnservice(this.model)
    console.log('obj', obj);

    if (obj == "LoggedIn") {
      this.message = "Login success";
      this.route.navigate(['/home/main']);
    } else {
      this.message = "Incorrect Login Credentials";
    }
  }
}  
