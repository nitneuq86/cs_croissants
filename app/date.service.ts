import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
    getVendredis(annee: number, mois: number): Array<Date> {
        var dateCurseur = new Date(annee, mois, 1);
        var dateCurseurMax = new Date(annee, mois + 1, 1);
        var resultats = new Array<Date>();
        while(dateCurseur < dateCurseurMax)
        {
            if (dateCurseur.getDay() == 5) { // Si le jour est un vendredi
                resultats.push(new Date(dateCurseur.valueOf()));
            }
            dateCurseur.setDate(dateCurseur.getDate() + 1); // Ajouter un jour
        }
        return resultats;
    }
}
