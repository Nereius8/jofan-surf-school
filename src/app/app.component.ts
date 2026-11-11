import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jofan Surf School';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    const siteTitle = 'Jofan Surf School Lombok | Surf Lessons & Board Rental';
    const siteDesc = 'Premier surf school and surfboard rental in Selong Belanak, Lombok. Professional beginner & intermediate surf lessons, local warung, and adventure packages.';
    const siteUrl = 'https://jofansurfschool.com';

    // 1. Título principal
    this.titleService.setTitle(siteTitle);

    // 2. Meta etiquetas SEO estándar
    this.metaService.updateTag({ name: 'description', content: siteDesc });
    this.metaService.updateTag({ name: 'keywords', content: 'surf school lombok, surf lessons selong belanak, surfboard rental lombok, escuela de surf lombok' });
    this.metaService.updateTag({ name: 'author', content: 'Jofan Surf School' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // 3. Open Graph (Para WhatsApp, Redes Sociales y Previsualizaciones)
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: siteUrl });
    this.metaService.updateTag({ property: 'og:title', content: siteTitle });
    this.metaService.updateTag({ property: 'og:description', content: siteDesc });
    this.metaService.updateTag({ property: 'og:image', content: `${siteUrl}/assets/images/hero-surf.jpg` }); // Asegúrate de tener una buena foto aquí

    // 4. Twitter Cards
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: siteTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: siteDesc });
  }
}
