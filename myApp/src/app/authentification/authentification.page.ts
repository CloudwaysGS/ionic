import { Component, OnInit } from '@angular/core';
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

  constructor(private loginServ:AuthenticationService, private tokenServ: TokenService) { }

  ngOnInit() {
  }

  onSubmit(): void{
    console.log(this.form)
    this.loginServ.login(this.form).subscribe(
      data => {
        console.log(data.token),
        this.tokenServ.saveToken(data.token)      
      },
      err => console.log(err)
    )
  }

}
