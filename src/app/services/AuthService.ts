import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(credentials: any) {
        return this.http.post('http://localhost:44360/login', credentials);
    }
}