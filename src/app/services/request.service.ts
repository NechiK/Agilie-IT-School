import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }
  getShots() {
    const params = new HttpParams().set('page', '2');
    const headers = new HttpHeaders();
    return this.http.get('http://api.mobile.design/api/shots', {
      params: params,
      headers: headers
    });
  }

}
