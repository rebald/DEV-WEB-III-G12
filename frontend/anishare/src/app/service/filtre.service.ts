import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class FiltreService
{
  constructor(private http: HttpClient) {}
  getCategorie(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/categorie');
    }
}

//  return this.http.get(environment.apiUrl + '/categorie');
