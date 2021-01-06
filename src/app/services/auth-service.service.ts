import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../models/UserLoginModel';

const httpOptions={
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   

  constructor(private http:HttpClient) { 
    
  }

  
  login(email : string, password: string){
    let url = "http://localhost:8080/users/login";
    return this.http.post(url, {email, password})
    
  }
}

