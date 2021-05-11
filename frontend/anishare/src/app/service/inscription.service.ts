import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Utilisateur} from '../classes/utilisateur';

@Injectable({providedIn: 'root'})
export class InscriptionService
{
  constructor(private http: HttpClient) {}
  getUtilisateur(): Observable<any>{
    return this.http.get(environment.apiUrl+ '/utilisateur');
  }
  postInscription(inscription: Utilisateur): Observable<any> {
    return this.http.post(environment.apiUrl + '/inscription', inscription);
  }
}
