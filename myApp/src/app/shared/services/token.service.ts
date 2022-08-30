import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private storage: Storage,private router: Router) {
    this.storage.create();
   }

  async init(token:string) {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
   this.storage.set('token',token)
    // this.router.navigate(['./commande-client'])
  }
  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }
  
  async getToken(){
    return await this.storage.get('token').then((data)=>{
      return data
    })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  clearToken(){
    this.storage.remove('token')
    this.router.navigate(['./catalogue'])
  }


  saveToken(token:string,id: any){
    const tokenInfo = this.getDecodedAccessToken(token); // decode token
// this.setTokenClient(tokenInfo)
console.log('mytok',tokenInfo);

// const expireDate = tokenInfo.exp; // get token expiration dateTime
if(tokenInfo.roles[0]=="ROLE_CLIENT"){
this.router.navigate([id+'/commande-client'])

} 
else if(tokenInfo.roles[0]=="ROLE_GESTIONNAIRE"){
this.router.navigate([''])

} 
        this.storage.set('token',token)      
      }
  }

  


  // saveToken(token: string): void{
  //   localStorage.setItem('token', token)    
  //   this.router.navigate(['./catalogue'])
  // }

  // islogged(): boolean{
  //   const token=localStorage.getItem('token')
  //   console.log(token)
  //   return !! token
  // }

  // clearToken(){
  //   localStorage.removeItem('token')
  //   this.router.navigate(['/login'])
  // }


