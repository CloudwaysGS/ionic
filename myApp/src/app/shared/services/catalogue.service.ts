import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Catalogue } from '../models/catalogue';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private abs_url:string=`${apiUrl}/catalogues`
  private urlDetail:string =`${apiUrl}/details`

  constructor(private http:HttpClient) { }
  all():Observable<Catalogue>{
    return this.http.get<any>(this.abs_url).pipe(
      
      map(data=>{
       // data.produits=[...data[0].menus,...data[1].burgers]
         let catalogue:Catalogue={
             menus:data['hydra:member'][1].menu ,
             burgers:data['hydra:member'][0].burger,
             produits:[...data['hydra:member'][1].menu,...data['hydra:member'][0].burger]
        }
        return catalogue
      }),
    )
  }

produit$(id:any):Observable<any> {
    return this.http.get<any>(`${this.urlDetail}/${id}`)
 }

}
