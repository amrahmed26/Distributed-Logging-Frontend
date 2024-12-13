import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Department, Employee } from '../common';
import { EndPoints } from '../EndPoints';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  // ***************** Variables ***************** //
  // ***************** Constructor ***************** //
  constructor(private http: HttpClient) {}

  // ***************** Functions ***************** //
 
  login(model: any): Observable<any> {
    return this.http.post<Department>(EndPoints.LoginEndPoint, model);
  }
  public static decodeJWT(jwtToken: string) {
    let jwtData = jwtToken.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    return JSON.parse(decodedJwtJsonData)
}

  }

  

