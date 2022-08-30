import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';
import { TokenService } from '../shared/services/token.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthentificationPageRoutingModule
  ],
  declarations: [AuthentificationPage],
  providers:[TokenService]//////
})
export class AuthentificationPageModule {}
