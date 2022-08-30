import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { Panier } from '../models/panier';
import { Produit } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { 
    let existingCartItems = JSON.parse(localStorage.getItem('products')||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Produit[]>([]);
  items$:Observable<any> = this.itemsSubject.asObservable();

  addToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products,index) => {
        if (!this.isExistProduit(products, product.id)) {
          product.quantite = 1
          products.push(product);
          
        }
        else {
          products.forEach((element: any) => {
            if(element.id==product.id){
              // element.quantite=Number(element.quantite)
              element.quantite += 1

            }
          });
        }
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();

    this.itemsSubject.next(this.panier.value.produits);
  }

  removePanier(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        if (products.includes(product)  ) {
          const sup=products.find((sup: {id:number}) => sup.id==product.id);
          if (sup) {
            let dll=products.findIndex((sup: any)=>sup.id==product.id);
            products.splice(dll,1)
            localStorage.setItem('products', JSON.stringify(products));
          }
        }
       
      }),
    ).subscribe();
  }

  isExistProduit(produit: any, id: number) {
    return produit.find((pro: any) => {
      return pro.id === id;
    });
  }

  PricePanier(){
    let tab=0
    this.items$.pipe(
      map((produits) => {
        produits.forEach((element:any) =>{
          tab+=(element.prix * element.quantite)
        });
        localStorage.setItem('produit', JSON.stringify(produits));
      })
    ).subscribe();
    return tab
  }

  increment(product:Produit,quantite :any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach((element:any) =>{
          if(element.id === product.id){
            element.quantite=quantite;
          }
        });
        localStorage.setItem('produit', JSON.stringify(products));
      })
    )
    .subscribe();
  }

  panier:BehaviorSubject<Panier>=new BehaviorSubject<Panier>({
    produits:[],
    portions:[],
    boissons:[]
  })

  addPanier(produit:Produit, qte:any){
      produit.boissons=[]
      this.panier.value.produits.push(produit);
      this.itemsSubject.next(this.panier.value.produits);
    }
}
