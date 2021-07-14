import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AjoutImageService} from '../service/ajout-image.service';
import {categorie} from '../classes/categorie';

@Component({
  selector: 'app-ajout-image',
  templateUrl: './ajout-image.component.html',
  styleUrls: ['./ajout-image.component.scss']
})
export class AjoutImageComponent implements OnInit {

  constructor(
    private ajoutImage: AjoutImageService,
    private http: HttpClient
  ) {
  }

  lstOptions: string[] = ['formImageCat1'];
  lstCategorie: categorie[];

  ngOnInit(): void {
    this.ajoutImage.getCategorie()
      .subscribe(
        data => {
          this.lstCategorie = data.response;
        }
      );
  }

  submit(data): any {
    console.log(data.formImageLien);
    console.log(data.formImageDescription);
    console.log(data.formImageDate);
    console.log(data.formImageCat1);
    const image = {
      idUtilisateur : 89,
      image : data.formImageLien,
      catImage : data.formImageCat1
    };
    // tslint:disable-next-line:no-shadowed-variable
    return this.ajoutImage.postImage(image).subscribe(image => { console.log(image); });
  }

  ajouterTag(): any {
    const form = (document.getElementById('formImage') as HTMLFormElement);
    const tag = form.ajoutTag.value;
    let isAlreadyExist = false;
    for (const i of this.lstCategorie) {
      if (i.nomCategorie === tag) { isAlreadyExist = true; }
    }
    if (isAlreadyExist) { console.log(`${tag} est une catégorie déjà existante`); }
    else {
      console.log(`${tag} est ajouter aux tags`);
      const data = { formCategorieNom : tag };
      // tslint:disable-next-line:no-shadowed-variable
      return this.ajoutImage.postTag(data).subscribe(data => {console.log(data); } );
      this.ngOnInit();
    }
  }
}
