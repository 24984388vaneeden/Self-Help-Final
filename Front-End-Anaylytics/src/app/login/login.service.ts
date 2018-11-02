import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { loginModel } from "./login.model";
import { ApiService } from "../Services/General/api.service";

@Injectable()
export class LoginService{
   
    constructor(private http: HttpClient, private api: ApiService) {
        
    }

    login(model: loginModel){
        return this.http.post<any>(
            this.api.baseUrl() + 'api/auth/login',
            model
        );
    }
}
