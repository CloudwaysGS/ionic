import { Pipe, PipeTransform } from '@angular/core';
import { CommandesService } from '../shared/services/commandes.service';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  constructor(private commandeServ:CommandesService) { }


  transform(donnees: any[], filterText: string) {
    if(donnees.length == 0 || filterText == '') 
    { 
      // return this.commandeServ.allCommandes()

    }
    const dons = []
    for(const don of donnees){
      if(don['etat'] == filterText){
        dons.push(don)
      }
    }
    return dons
  }

}
