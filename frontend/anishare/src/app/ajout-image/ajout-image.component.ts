import { Component, OnInit } from '@angular/core';
import { FiltreService } from '../service/filtre.service';
import { categorie } from '../classes/categorie';

@Component({
  selector: 'app-ajout-image',
  templateUrl: './ajout-image.component.html',
  styleUrls: ['./ajout-image.component.scss']
})
export class AjoutImageComponent implements OnInit {

  constructor(private filtre: FiltreService) { }

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
