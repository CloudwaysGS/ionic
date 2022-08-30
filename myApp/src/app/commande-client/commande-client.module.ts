import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandeClientPageRoutingModule } from './commande-client-routing.module';

import { CommandeClientPage } from './commande-client.page';
import { CommandesService } from '../shared/services/commandes.service';
import { TokenService } from '../shared/services/token.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    CommandeClientPageRoutingModule
  ],
  declarations: [CommandeClientPage],
  providers: []
})
export class CommandeClientPageModule {}
