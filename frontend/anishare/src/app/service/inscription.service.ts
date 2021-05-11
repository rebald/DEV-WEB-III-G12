import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class InscriptionService
{
  constructor(private http: HttpClient) {}
  postInscription(): Observable<any> {
    return this.http.post(environment.apiUrl + '/inscription');
  }
}
