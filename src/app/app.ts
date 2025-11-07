import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  template: `
    <div class="flex min-h-screen bg-gray-50">
      
      <!-- SIDEBAR -->
      <app-sidebar></app-sidebar>

      <!-- CONTENU PRINCIPAL -->
      <main class="flex-1 lg:ml-52 xl:ml-64">
        
        <!-- HEADER -->
        <app-header></app-header>

        <!-- PAGE CONTENT -->
        <div class="pt-16 lg:pt-20 min-h-screen">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>

    <!-- FOOTER -->
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'MecaService';
  
  constructor(private router: Router) {}
}