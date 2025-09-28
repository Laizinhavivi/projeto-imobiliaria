import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/views/public/home/home';
import { InteressesComponent } from './app/views/cliente/meus-interesses/meus-interesses';
import { CardImovelComponent } from './app/templates/components/card-imovel/card-imovel';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'imoveis', component: CardImovelComponent },
      { path: 'interesses', component: InteressesComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));
