import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getAllDept(){
    debugger;
    return this.http.get("http://localhost:3000/posts");
  }
  
  postUserRegistration(data:any){
    debugger;
    return this.http.post("http://localhost:3000/user-details",data);
  }
  getUser(){
    debugger;
    return this.http.get("http://localhost:3000/user-details");
  }
}
