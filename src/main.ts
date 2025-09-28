import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

// Páginas públicas
import { HomeComponent } from './app/views/public/home/home';
import { BuscaImoveisComponent } from './app/views/public/busca-imoveis/busca-imoveis';
import { DetalhesImovelComponent } from './app/views/public/detalhes-imovel/detalhes-imovel';

// Páginas do cliente
import { MeusInteressesComponent } from './app/views/cliente/meus-interesses/meus-interesses';

// Páginas do corretor
import { DashboardImoveisComponent } from './app/views/corretor/dashboard-imoveis/dashboard-imoveis';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      // Rotas públicas
      { path: '', component: HomeComponent },
      { path: 'imoveis', component: BuscaImoveisComponent },
      { path: 'detalhes-imovel/:id', component: DetalhesImovelComponent },

      // Rotas do cliente
      { path: 'meus-interesses', component: MeusInteressesComponent },

      // Rotas do corretor
      { path: 'dashboard-imoveis', component: DashboardImoveisComponent },

      // Rota coringa
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));
