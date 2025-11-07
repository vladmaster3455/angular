import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styles: [`
    @keyframes fadeInSlideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .social-icon {
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      transform: scale(1.1) rotate(5deg);
    }

    @media (max-width: 768px) {
      .footer-section {
        text-align: center;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'Facebook',
      icon: '/assets/facebook.png',
      alt: 'Facebook MecaService',
      href: '#'
    },
    {
      name: 'Instagram', 
      icon: '/assets/instagram.jpg',
      alt: 'Instagram MecaService',
      href: '#'
    },
    {
      name: 'WhatsApp',
      icon: '/assets/whatsapp.jpg', 
      alt: 'WhatsApp MecaService',
      href: '#'
    }
  ];

  quickLinks = [
    { label: 'Accueil', route: '/' },
    { label: 'À propos', route: '/apropos' },
    { label: 'Services', route: '/services' },
    { label: 'Zone d\'intervention', route: '/zone-intervention' },
    { label: 'Témoignages', route: '/temoignages' }
  ];
}