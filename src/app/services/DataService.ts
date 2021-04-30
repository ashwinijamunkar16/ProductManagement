import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { AppError } from '../Common/AppError';

export class DataService {
    //   private url = "";// = "https://csacsacjsonplaceholder.typicode.com/posts";
      constructor(private url: string, private http: HttpClient) {
      }

      login(resource: any) {
        const body = new URLSearchParams();
        body.set('grant_type', resource.grant_type);
        body.set('username', resource.username);
        body.set('password', resource.password);

        const options: any = {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        // const headers = { 'Content-Type': resource.ContentType };
        // const headers = new Headers({'Content-Type': resource.ContentType});
        // const body = { grant_type: resource.grant_type, username: resource.username, password: resource.password };
        return this.http.post(this.url, body.toString(), options).pipe(
            map(response => response),
            // catchError(this.handleError)
        );
      }

      private handleError(error: Response)
      {
        return Observable.throw(new AppError(error));
      }
    }