import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationModel } from '../models/LocationModel';

@Injectable({
  providedIn: 'root'
})
export class FilterLocationsService {

  constructor(private http : HttpClient) { }


  filterLocations(userId : number, startDate :  Date, endDate : Date) : Observable<LocationModel[]> {
    const myData= localStorage.getItem('user');
    const headers= new HttpHeaders({Authorization : 'Basic '+myData});
    const url = "http://localhost:8080/locations";
    return this.http.get<LocationModel[]>(`${url}/?userId=${userId}&startDate=${startDate}&endDate=${endDate}`,{headers});
  }

}
