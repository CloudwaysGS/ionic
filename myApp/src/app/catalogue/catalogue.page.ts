import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produit } from '../shared/models/produits';
import { CatalogueService } from '../shared/services/catalogue.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  pathImage = environment.pathImage  
  loading: Produit[]| null = null
  produits: any

  slideOpts = {
    initialSlide: 1,
    speed: 100,
    loop:true,
    autoplay:{
      delay: 3000
    }
  };

  constructor(private servCata:CatalogueService) { }

  ngOnInit() {
    this.servCata.all().subscribe((data)=>{
      this.produits = data.produits
      // console.log(this.produits);
      
    })
  }

  clickchanged(type:string){
    // alert("ok");
    switch (type) {
      case "burger":
      this.servCata.all().subscribe((data)=>this.produits = data.burgers)
      break;
      case "menu":
      this.servCata.all().subscribe((data)=>this.produits = data.menus)
      break;
      default:
      this.servCata.all().subscribe((data)=>this.produits = data.produits)
      break;
    }
}


}
