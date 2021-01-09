import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AuthServiceService } from './services/auth-service.service';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { Loader } from "@googlemaps/js-api-loader"



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'Your Google API'})
  
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
