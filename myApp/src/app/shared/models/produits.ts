export interface Produit {
    id?:number
    nom:string
    imageBlob:string
    date?:string
    prix:number
    description?:string
    '@type':string
    quantite?:number
    boissons?:Produit[]
}
