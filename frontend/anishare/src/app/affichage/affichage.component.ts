import { Component, OnInit } from '@angular/core';
import {FiltreService} from '../service/filtre.service';
import {categorie} from '../classes/categorie';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})

export class AffichageComponent implements OnInit {
  constructor(private filtre: FiltreService) {
  }
  lstCategorie: categorie[];

  ngOnInit(): void {
    this.filtre.getCategorie()
      .subscribe(
        data => {
          this.lstCategorie = data.response;
        }
      );
  }
}


