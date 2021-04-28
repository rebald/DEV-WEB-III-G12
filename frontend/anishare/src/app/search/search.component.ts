import { Component, OnInit } from '@angular/core';
import { FiltreService } from '../service/filtre.service';
import { categorie } from '../classes/categorie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private filtre: FiltreService) {
  }

  lstCategorie: categorie[];

  ngOnInit(): void {
    this.filtre.getCategorie()
      .subscribe(
        data => {
          this.lstCategorie = data;
        }
      );
  }
}
