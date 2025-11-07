import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  private eventListener?: () => void;

  get sidebarClasses(): string {
    const baseClasses = 'w-64 sm:w-72 lg:w-52 xl:w-64 bg-blue-800 text-white fixed h-screen overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0';
    const mobileClasses = this.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full';
    return `${baseClasses} ${mobileClasses}`;
  }

  ngOnInit() {
    // Écouter l'événement du bouton menu
    this.eventListener = () => {
      this.toggleMobileMenu();
    };
    document.addEventListener('toggleMobileMenu', this.eventListener);

    // Initialiser l'état du menu selon la taille d'écran
    this.handleResize();

    // Fermer le menu si on clique en dehors (mobile uniquement)
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    if (this.eventListener) {
      document.removeEventListener('toggleMobileMenu', this.eventListener);
    }
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    if (window.innerWidth < 1024) {
      this.isMobileMenuOpen = false;
    }
  }

  private handleClickOutside(event: Event) {
    if (window.innerWidth < 1024 && this.isMobileMenuOpen) {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.querySelector('[data-menu-button]');
      
      const isClickInsideMenu = mobileMenu?.contains(target);
      const isClickOnMenuButton = menuButton?.contains(target);
      
      if (!isClickInsideMenu && !isClickOnMenuButton) {
        this.isMobileMenuOpen = false;
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.handleResize();
  }

  private handleResize() {
    if (window.innerWidth >= 1024) {
      // En desktop, le menu est toujours visible (géré par CSS)
      this.isMobileMenuOpen = false;
    }
  }
}