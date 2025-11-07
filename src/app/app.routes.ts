import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos';
import { ServicesComponent } from './services/services';
import { ZoneInterventionComponent } from './zone-intervention/zone-intervention';
import { TemoignagesComponent } from './temoignages/temoignages';
import { AccueilComponent } from './accueil/accueil';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'apropos', component: AproposComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'zone-intervention', component: ZoneInterventionComponent },
    { path: 'temoignages', component: TemoignagesComponent },
    { path: '**', redirectTo: '' }
];