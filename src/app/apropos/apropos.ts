import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apropos.html'
})
export class AproposComponent {
  protected readonly timeline = signal([
    {
      annee: '2013 - Création',
      description: 'Depuis notre création, MecaService s\'est imposé comme un acteur incontournable du dépannage et de la maintenance automobile au Sénégal.'
    },
    {
      annee: '2015 - Fondation', 
      description: 'Notre parcours témoigne d\'une croissance constante et d\'un engagement sans faille envers nos clients.'
    },
    {
      annee: '2018 - Expansion',
      description: 'Création de MecaService avec une vision claire : révolutionner le secteur du dépannage automobile au Sénégal.'
    },
    {
      annee: '2021 - Innovation',
      description: 'Extension de nos services aux entreprises et développement d\'une flotte mobile moderne pour les interventions d\'urgence.'
    },
    {
      annee: '2025 - Leadership',
      description: 'Intégration des technologies modernes et création d\'un réseau de partenaires mécaniques certifiés. Plus de 8000 interventions réussies, une satisfaction client de 99% et une présence digitale renforcée.'
    }
  ]);

  protected readonly equipe = signal([
    {
      nom: 'Cheikh Diop',
      poste: 'Directeur Général',
      photo: 'assets/1.png'
    },
    {
      nom: 'Soda Kébé',
      poste: 'Chef Mécanicienne',
      photo: 'assets/2.jpg'
    },
    {
      nom: 'Ousmane Faye',
      poste: 'Technicien',
      photo: 'assets/3.jpg'
    },
    {
      nom: 'Assane Ciss Niass',
      poste: 'Responsable Client',
      photo: 'assets/3.jpg'
    }
  ]);
}