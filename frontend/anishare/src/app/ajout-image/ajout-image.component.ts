import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AjoutImageService } from '../service/ajout-image.service';
import { categorie } from '../classes/categorie';

@Component({
  selector: 'app-ajout-image',
  templateUrl: './ajout-image.component.html',
  styleUrls: ['./ajout-image.component.scss']
})
export class AjoutImageComponent implements OnInit {
  items = this.ajoutImageService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private ajoutImage: AjoutImageService,
    private formBuilder: FormBuilder,
    ) { }

  lstCategorie: categorie[];

  ngOnInit(): void {
    this.ajoutImage.getCategorie()
      .subscribe(
        data => {
          this.lstCategorie = data.response;
        }
      );
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
