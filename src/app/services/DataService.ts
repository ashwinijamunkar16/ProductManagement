import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../Common/AppError';

export class DataService {
    //   private url = "";// = "https://csacsacjsonplaceholder.typicode.com/posts";
      constructor(private url: string, private http: HttpClient) {
      }

      login(resource: any) {
        const headers = { 'Content-Type': resource.ContentType };
        const body = { grant_type: resource.grant_type, username: resource.username, password: resource.password };
        return this.http.post(this.url, body, {headers}).pipe(
            map(response => response),
            catchError(this.handleError)
        );
      }

      private handleError(error: Response)
      {
        return Observable.throw(new AppError(error));
      }
    }