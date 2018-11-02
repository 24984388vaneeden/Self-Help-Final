import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterModel} from './register.model';
import { ApiService } from "../Services/General/api.service";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient,private api: ApiService) {
  }

  register(model: RegisterModel) {
    return this.http.post<boolean>(this.api.baseUrl() + 'api/auth/register', model,);
  }
}
