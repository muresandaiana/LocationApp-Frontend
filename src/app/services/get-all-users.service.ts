import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http : HttpClient) { }
   
   
  getAllUsers() : Observable<UserModel[]>{
    const myData= localStorage.getItem('user');
    const headers= new HttpHeaders({Authorization : 'Basic '+myData});
    let url = "http://localhost:8080/users";
    return this.http.get<UserModel[]>(url,{headers});
  }
}
