import { Component } from '@angular/core';
// import {LoginModel, LoginResponseModel} from "../login/login.model";
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../../app/services";
import {UserModel} from "./user.model";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'home.html'
})
export class HelloIonicPage {
  constructor(
    private http: HttpClient,
    private baseApiService: BaseApiService
  ) {

  }

  userName(model: UserModel) {
    return this.http.post<UserModel>(this.baseApiService.baseApi() + 'api/user/', model.email);
  }
}
