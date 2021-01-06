import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { GetAllUsersService } from '../services/get-all-users.service';
import { FormsModule } from '@angular/forms';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FilterLocationsService } from '../services/filter-locations.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationModel } from '../models/LocationModel';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public users : UserModel[] = [];
    public locations : LocationModel[];

  constructor(private router: Router ,private getUsersService : GetAllUsersService, private filterService : FilterLocationsService, private fb: FormBuilder) { }
   public homeForm : FormGroup;

  ngOnInit(): void {
    this.getUsers();
    this.homeForm = this.fb.group({
      userSelector : [''],
      startDate : [''],
      endDate:[''],
     });

    }

  getUsers() {
    this.getUsersService.getAllUsers()
    .subscribe(
        data => {
          this.users = data;
          console.log("REUSIT");
        },
        error => {
          alert("Something went wrong");
        }
        );
  }


  get f(){
    return this.homeForm.controls
  }
  
  get userSelector(){
   return this.homeForm.get('userSelector')
  }
  get startDate(){
    return this.homeForm.get('startDate')
  }
  get endDate(){
    return this.homeForm.get('endDate')
  }

  filterLocations(){
    this.filterService.filterLocations(this.f.userSelector.value, this.f.startDate.value, this.f.endDate.value)
    .subscribe(
      data => {
        this.locations = data;
        console.log("Filtrare facuta cu SUCCES! ");
        console.log(this.locations);
      },
        error => {
          if(error instanceof HttpErrorResponse){
             if(error.status == 400){
               alert("Bad request")
             };
          }
           }
    )
    
  }

  logOut(){
    this.router.navigate(['/login']);
  }

  }


