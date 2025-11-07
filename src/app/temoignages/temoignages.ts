import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoignages.html'
})
export class TemoignagesComponent {
  protected readonly temoignages = signal([
    {
      nom: 'Amadou Fall',
      type: 'particulier',
      photo: '/assets/3.jpg',
      commentaire: 'Panne d\'embrayage en pleine centre-ville, j\'étais vraiment dans le pétrin ! L\'équipe de MecaService est arrivé en 25 minutes. Diagnostic rapide, réparation sur place et c\'est reparti ! Service client au top, je garde leur numéro précieusement !',
      note: 5
    },
    {
      nom: 'Fatou Ndiaye',
      type: 'Mécanicienne',
      photo: '/assets/2.jpg',
      commentaire: 'En tant que femme mécanicienne, je suis souvent seule ! 3 ans que je sous-traite certaines interventions avec MecaService pour les gros projets. Toujours dans les délais, pas gérés seule. L\'équipe me respecte et me traite d\'égal à égal, tout en étant très professionnels, on s\'entraide entre femmes du métier !',
      note: 5
    },
    {
      nom: 'Mamadou Sarr',
      type: 'Mécanicienne',
      photo: '/assets/2.jpg',
      commentaire: 'Je connais bien le métier et je peux dire que MecaService, c\'est du sérieux ! Équipe compétente, matériel moderne et surtout interventions propres. Quand mes clients ont une urgence le soir, le weekend ou même les jours fériés, je les oriente vers eux. Qualité sans faille. Du travail de pro !',
      note: 5
    },
    {
      nom: 'Aissatou Diallo',
      type: 'Entreprise',
      photo: '/assets/3.jpg', 
      commentaire: 'Notre flotte de véhicules commerciaux compte sur MecaService pour la maintenance. Service professionnel, devis transparents et interventions rapides.',
      note: 5
    },
    {
      nom: 'Moussa Ba',
      type: 'particulier',
      photo: '/assets/meca.jpg',
      commentaire: 'Excellent service ! Mon véhicule est tombé en panne sur l\'autoroute. L\'équipe est arrivée rapidement et a résolu le problème sur place.',
      note: 4
    }
  ]);

  protected readonly filtreActuel = signal('tous');
  protected readonly types = signal(['tous', 'particulier', 'Mécanicienne', 'Entreprise']);

  protected temoignagesFiltres() {
    const filtre = this.filtreActuel();
    const tous = this.temoignages();
    
    if (filtre === 'tous') {
      return tous;
    }
    
    return tous.filter(t => t.type === filtre);
  }

  protected changerFiltre(type: string) {
    this.filtreActuel.set(type);
  }

  protected getEtoiles(note: number): string[] {
    return Array(5).fill(0).map((_, i) => i < note ? '★' : '☆');
  }
}