import { Injectable } from '@angular/core';
import {LoginModel } from "./login.model";
import { environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private api = environment.baseUrl;

  constructor() { }
  
  loginFnservice(login:LoginModel){
    if(login.email=="yash@gmail.com" && login.password=="yashwanth"){
      return "LoggedIn";
    }else{
      return "isNotloggedIn";
    }
  }
}
