import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  produits: any

  constructor(private servCata:CatalogueService,private route: Router) { }

  ngOnInit(): void {
  
  let k = this.route.url.split('/')[(this.route.url.split('/').length)-1]
  this.servCata.produit$(k).subscribe((data)=>{ 
  this.produits=data
  // console.log(this.produits)
        })
  }


}
