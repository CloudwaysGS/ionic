import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandeClientPage } from './commande-client.page';

const routes: Routes = [
  {
    path: '',
    component: CommandeClientPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeClientPageRoutingModule {}
