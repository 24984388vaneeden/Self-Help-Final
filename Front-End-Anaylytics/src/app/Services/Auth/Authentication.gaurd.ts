import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { loginModel } from "../../login/login.model";
import {LoginComponent } from "../../login/login.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const x_access_token = sessionStorage.authToken;

const httpOptions = 
  {
    headers: new HttpHeaders({'Content-Type': 'application/json'/*,'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjVlZTc2ZTM0MGYzMWEyYTA2YjBhNSIsImlhdCI6MTUzOTE2ODM3OCwiZXhwIjoxNTM5MjU0Nzc4fQ.DcgqO_JGgPSyuA2HojjRL_1ac1Ofp4HQ-AiHGb_53M8'*/})
  };

@Injectable()
export class AuthenticationGaurd implements CanActivate {
/**
 *
 */
constructor(private router: Router, private http: HttpClient) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       
        if( !sessionStorage.authToken ){
           this.router.navigate(['login']);
           return false;
        }
        else
        {
            return true;
        } 

    }

}