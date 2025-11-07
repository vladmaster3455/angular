import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  toggleMobileMenu() {
    // Émet un événement pour communiquer avec le sidebar
    const event = new CustomEvent('toggleMobileMenu');
    document.dispatchEvent(event);
  }
}