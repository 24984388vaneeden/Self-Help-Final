import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginModel, LoginResponseModel} from "./login.model";
import {BaseApiService} from "../../app/services";

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private baseApiService: BaseApiService) {
  }

  login(model: LoginModel) {
    return this.http.post<LoginResponseModel>(this.baseApiService.baseApi() + 'api/auth/login', model);
  }

  storeToken(token: string): void {
    console.log("token", token);
    localStorage.setItem("authToken", token);
  }

  eraseToken(): void {
    localStorage.removeItem('authToken');
  }
}
