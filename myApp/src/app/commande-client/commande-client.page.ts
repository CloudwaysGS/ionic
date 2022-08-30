import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { CommandesService } from '../shared/services/commandes.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.page.html',
  styleUrls: ['./commande-client.page.scss'],
})
export class CommandeClientPage implements OnInit {

  commandes:any
  client:any=''
  date:any
  filterText:"any"

  constructor(private commandeServ:CommandesService,private token:TokenService,private auth:AuthenticationService,private route:ActivatedRoute) { }

  async ngOnInit() {

    const id=this.route.snapshot.params['id']
    const token=await this.token.getToken()
    this.commandeServ.getClient(token,id).subscribe(
      data=>{
        let datas=data['hydra:member']
        this.commandes=datas
        console.log(this.commandes);
        
      }
    )
//  console.log(this.auth.getTokenClient().login);
//     this.client=this.auth.getUrlClient(this.auth.getTokenClient().username)
    
//     let tokenString = await this.token.getToken()

//     console.log(this.commandes)
//     this.commandeServ.getClient(token,id).subscribe(
//       data=>{
//         this.commandes=data
//         console.log(data);
        
//       }
//     )
  }



}
