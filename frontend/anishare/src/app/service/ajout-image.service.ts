import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Image} from '../classes/image';

@Injectable({providedIn: 'root'})
export class AjoutImageService
{
  constructor(private http: HttpClient) {}
  getCategorie(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/categorie');
  }
  postImage(image: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/image', image);
  }
  postTag(tag: any): Observable<any> {
  return this.http.post(environment.apiUrl + '/categorie.ts', tag);
}
}
