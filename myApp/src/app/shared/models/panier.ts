import { Produit } from "./produits"

export interface Panier{
  produits:Produit[]
  boissons:Produit[]
  portions:Produit[]
}