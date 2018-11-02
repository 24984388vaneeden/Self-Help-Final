import { Injectable } from "@angular/core";

@Injectable()
export class ApiService{
    baseUrl(): string{
        if(window.location.href.includes('localhost')){
            return 'http://192.168.1.139:3000/'
        }

        return 'https://www.example.com/'
    }
}