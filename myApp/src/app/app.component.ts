import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tokenServ:TokenService) {}


  logout(){
    this.tokenServ.clearToken()
  }
}
