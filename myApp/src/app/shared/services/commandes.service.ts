import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

 private url:string = `${apiUrl}/commandes`
 private urlClient: string = `${apiUrl}/clients`
  // urls:string = `${apiUrl}/clients/22/commandes`



  constructor(private http: HttpClient, private token : TokenService) { }
  
  
   
  private httpOptions = {
    // headers: new HttpHeaders({
    // 'Content-type': 'application/json',
    // 'Authorization': `Bearer ${this.token.getToken}`,
    // })
    }
    allCommandes():Observable<any>{
    return this.http.get<any>(this.url).pipe(
    map(
    data =>{
    let datas=data['hydra:member']
    console.log(data);
    
    return datas
      }
     ))
    }

    getClient(token:string,id: any){

      return this.http.get<any>(this.urlClient+'/'+id+'/commandes')
    }

    // ClientCmd(token:string):Observable<any>{
      
        
    //     return this.http.get<any>(this.url,httpOptions).pipe(
    //       map(
    //         data =>{
    //           let datas=data['hydra:member']
    //           console.log(datas);
    //           return datas
    //         }
    //        ))     }
}
