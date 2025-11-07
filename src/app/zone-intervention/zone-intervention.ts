import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zone-intervention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zone-intervention.html'
})
export class ZoneInterventionComponent {
  protected readonly zones = signal([
    {
      titre: 'Zone d\'intervention 1 - Maintenance préventive',
      image: '/assets/vidange.jpg',
      services: [
        'Vérification des systèmes mécaniques avant panne',
        'Contrôle des niveaux d\'huile et graissage des pièces',
        'Inspection régulière des courroies et roulements'
      ]
    },
    {
      titre: 'Zone d\'intervention 2 - Réparation corrective',
      image: '/assets/diagno.jpg',
      services: [
        'Diagnostic et remplacement des pièces usées',
        'Réglage des mécanismes défectueux',
        'Remise en service après test de sécurité'
      ]
    },
    {
      titre: 'Zone d\'intervention 3 - Optimisation et amélioration',
      image: '/assets/depa.jpg',
      services: [
        'Ajustement des machines pour meilleure performance',
        'Installation de nouveaux composants plus efficaces',
        'Réduction des vibrations et bruits anormaux'
      ]
    }
  ]);

  // Statistiques pour la section info
  readonly stats = [
    { value: '50+', label: 'Zones couvertes', color: 'text-blue-800' },
    { value: '24h', label: 'Délai moyen', color: 'text-green-600' },
    { value: '98%', label: 'Satisfaction', color: 'text-yellow-500' },
    { value: '7j/7', label: 'Disponibilité', color: 'text-purple-600' }
  ];

  // Avantages pour la section rapport
  readonly advantages = [
    'Diagnostic détaillé avec photos',
    'Liste des réparations effectuées',
    'Recommandations d\'entretien',
    'Garantie sur les pièces et main d\'œuvre'
  ];
}