import {Injectable} from "@angular/core";


@Injectable()
export class BaseApiService {
  public baseApi() {
    if (window.location.host.includes('localhost')) {
      return 'http://localhost:3000/';
    }

    return 'http://www.placeholder.com/';
  }
}
