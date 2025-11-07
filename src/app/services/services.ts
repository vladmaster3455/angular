import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class ServicesComponent {
  // Liste complète des services offerts
  private allServices = [
    {
      titre: 'Réparations mécaniques',
      sous_titre: '(dans un garage ou sur place si possible)',
      image: 'assets/repa.jpg',
      details: [
        'Moteur (courroies, filtres, bougies, injecteurs...)',
        'Transmission',
        'Embrayage, boîte de vitesses, cardans...)',
        'Freinage (plaquettes, disques, liquide de frein)',
        'Suspension et amortisseurs',
        'Refroidissement (radiateur, pompe à eau)'
      ]
    },
    {
      titre: 'Vidange et remplacement des filtres',
      sous_titre: '',
      image: 'assets/vidange.jpg',
      details: [
        'Diagnostic et remplacement des pièces usées',
        'Réglage des mécanismes défectueux',
        'Remise en service après test de sécurité',
        'Changement des liquides (huile moteur, liquide de frein, liquide de refroidissement)',
        'Contrôle des pneus et équilibrage'
      ]
    },
    {
      titre: 'Dépannage sur place',
      sous_titre: '',
      image: '/assets/depa.jpg',
      details: [
        'Démarrage de batterie (booster ou changement de batterie)',
        'Remplacement de roue crevée/pneu endommagé',
        'Livraison de carburant en cas de panne sèche',
        'Petites réparations rapides pour permettre au véhicule de repartir',
        'Remorquage du véhicule en cas de panne grave, transport du véhicule vers un garage ou un centre de réparation'
      ]
    },
    {
      titre: 'Diagnostic électronique',
      sous_titre: '(avec valise de diagnostic)',
      image: '/assets/diagno.jpg',
      details: [
        'Lecture des codes d\'erreur (ECU)',
        'Mise à jour des logiciels embarqués',
        'Réinitialisation des voyants'
      ]
    },
    {
      titre: 'Entretien de la climatisation',
      sous_titre: '',
      image: '/assets/clim.jpg',
      details: [
        'Recharge de gaz',
        'Nettoyage du circuit',
        'Remplacement des filtres d\'habitacle'
      ]
    }
  ];

  // Le signal visibleServices affiche les 3 premiers services par défaut
  protected readonly visibleServices = signal(this.allServices.slice(0, 3));
  protected isFullListDisplayed = false;

  // Fonction pour afficher tous les services
  showMoreServices(): void {
    this.visibleServices.set(this.allServices);
    this.isFullListDisplayed = true;
  }

  // Liste des avantages
  protected readonly avantages = signal([
    {
      titre: 'Disponibilité 24h/24 et 7j/7',
      description: 'Toujours présents en cas d\'urgence, même la nuit, les week-ends et les jours fériés.'
    },
    {
      titre: 'Intervention rapide',
      description: 'Nos équipes se déplacent en un temps record pour limiter votre immobilisation.'
    },
    {
      titre: 'Techniciens qualifiés',
      description: 'Des mécaniciens expérimentés capables de diagnostiquer et réparer efficacement.'
    },
    {
      titre: 'Service sur place ou remorquage',
      description: 'Nous faisons le maximum pour vous dépanner directement sur la route, et si nécessaire, nous assurons le remorquage de votre véhicule.'
    },
    {
      titre: 'Tarifs transparents et compétitifs',
      description: 'Pas de mauvaises surprises : devis clair avant toute intervention.'
    },
    {
      titre: 'Satisfaction garantie',
      description: 'Votre tranquillité et votre sécurité sont notre priorité.'
    }
  ]);
}