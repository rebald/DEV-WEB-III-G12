import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class FiltreService
{
  constructor(private http: HttpClient) {}
  getCategorie(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/categorie');
    }
}

