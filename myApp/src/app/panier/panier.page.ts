import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  somme=0
  constructor(private panierServ:PanierService) { }

  items$=this.panierServ.items$

  ngOnInit() {
    this.items$=this.panierServ.items$
  }

  remove(a:any){
    this.panierServ.removePanier(a)
  }
  calculSomme(){

    this.somme=this.panierServ.PricePanier()
  }

  priceProduit(produit:any,quantite:any){
    this.panierServ.increment(produit, quantite)
  }
}
