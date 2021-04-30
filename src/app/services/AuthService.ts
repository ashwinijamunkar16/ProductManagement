import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './DataService';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends DataService {
    constructor(http: HttpClient) {
        super('http://localhost:44360/login', http);
    }

    // login(credentials: any) {
    //     return this.dataservice.login('http://localhost:44360/login', credentials);
    // }
}