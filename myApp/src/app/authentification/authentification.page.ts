import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icredentials } from '../shared/models/credentials';
import { AuthenticationService } from '../shared/services/authentication.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  form: Icredentials = {
    login: '',
    password: ''
  }

  wet:any
  constructor(private loginServ:AuthenticationService, private tokenServ: TokenService,private route:Router) { }

  async ngOnInit(){
    this.wet=await
    this.tokenServ.getToken()
  }

  onSubmit(): void{
    this.loginServ.login(this.form).subscribe(
      data=>{
        this.tokenServ.saveToken(data.token,data.id)
      }
    )
}
}

