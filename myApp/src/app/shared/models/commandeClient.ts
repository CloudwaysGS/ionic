// export interface CommandeClient {
//   "@context": string
//   "@id": string
//   "@type": string
//   "hydra:member": HydraMember[]
//   "hydra:totalItems": number
// }

export interface CommandeClient {
  "@id": string
  "@type": string
  id?:string
  numeroCommande: string
  dateCommande: string
  etat: string
  montantCommande: number
  client: Client
  zone: Zone
  burgerCommandes: BurgerCommande[]
  menuCommandes: MenuCommande[]
  boissonCommandes: BoissonCommande[]
  friteCommandes: FriteCommande[]
}

export interface Client {
  "@id": string
  "@type": string
  adresse: string
  telephone: string
}

export interface Zone {
  "@id": string
  "@type": string
  libelle: string
  prix: number
}

export interface BurgerCommande {
  "@id": string
  "@type": string
  id: number
  quantite: number
  prix: number
  burger: Burger
}

export interface Burger {
  "@id": string
  "@type": string
  menuBurgers: any[]
}

export interface MenuCommande {
  "@id": string
  "@type": string
  id: number
  quantite: number
  menu: Menu
  prix: number
}

export interface Menu {
  "@id": string
  "@type": string
  menuBurgers: MenuBurger[]
}

export interface MenuBurger {
  "@id": string
  "@type": string
  quantite: number
}

export interface BoissonCommande {
  "@id": string
  "@type": string
  boissonTailleBoisson: BoissonTailleBoisson
  prix: number
}

export interface BoissonTailleBoisson {
  "@type": string
  "@id": string
  quantiteStock: number
  boisson: any
  tailleBoisson: any
}

export interface FriteCommande {
  "@id": string
  "@type": string
  quantite: number
}
