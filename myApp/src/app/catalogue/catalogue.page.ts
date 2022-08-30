import { Component, OnInit } from '@angular/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Produit } from '../shared/models/produits';
import { CatalogueService } from '../shared/services/catalogue.service';
import { RangeValue } from '@ionic/core';



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

  constructor(private servCata:CatalogueService,private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
  lastEmittedValue: RangeValue;

  ngOnInit() {
    this.servCata.all().subscribe((data)=>{
      this.produits = data.produits
      // console.log(this.produits);
      

    })
  }


  onIonChange(event: any) {
    this.produits= this.produits.filter(
      data=>{
        console.log(event.detail.value)
          return data.prix >= event.detail.value.lower && 
                  data.prix <= event.detail.value.upper
              
      }
    )
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
