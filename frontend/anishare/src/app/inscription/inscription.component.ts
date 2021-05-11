import { Component, OnInit } from '@angular/core';
import {InscriptionService} from '../service/inscription.service';
import {Utilisateur} from '../classes/utilisateur';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private inscription: InscriptionService, private http: HttpClient) {
  }

  lstUtlisateur: Utilisateur[];

  ngOnInit(): void {
    this.inscription.getUtilisateur()
      .subscribe
      (data => {
        this.lstUtlisateur = data.response;
       console.log(data);
      });
  }

  submit(data) {
    if (data.formInscriptionMdp === data.formInscriptionMdpConfirmation) {
      console.log('utlisateur ajouté');
      return this.inscription.postInscription(data).subscribe(data => {console.log(data); } );
    } else {
      alert('Les mots de passe ne correspondent pas !');
    }
  }
}
