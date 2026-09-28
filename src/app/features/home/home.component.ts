import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent, TranslatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
  
})
export class HomeComponent {
  private router = inject(Router);

  heroImage = 'tablas.jpg';

  // Variable para controlar si el menú móvil está abierto o cerrado
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToRental(): void {
    this.router.navigate(['/rental']);
  }

  // Función para hacer scroll exacto a cualquier sección
  scrollTo(sectionId: string): void {
    // Si el menú móvil estuviera abierto al hacer click, lo cerramos
    this.closeMobileMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}
