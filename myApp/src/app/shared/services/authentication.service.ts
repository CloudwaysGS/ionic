import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icredentials } from '../models/credentials';
import { Itoken } from '../models/token';

const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = `${apiUrl}/login_check`
  urlClient = `${apiUrl}/clients`

  token :any='';

  constructor(private http: HttpClient) { }

  login(credentials: Icredentials): Observable<Itoken>{
    return this.http.post<Itoken>(this.url,credentials)
  }
/////////////////////Get Login//////////////////////////////////
  getUrlClient(login: any){
    return this.http.get(this.urlClient+'?login='+login)
  }

  getTokenClient(){
    return this.token
  }

  setTokenClient(token: any){
    this.token = token
  }
}
