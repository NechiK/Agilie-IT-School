import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InterceptorService {

  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      params: request.params.append('page', '1').set('per_page', '24'),
      setHeaders: {
        Authorization: `Bearer some token`
      }
    });
    return next.handle(request);
  }

}
