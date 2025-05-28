import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if (!localStorage.getItem('clienteId') && window.location.pathname !== '/login' && window.location.pathname !== '/cadastrar') {
  window.location.href = '/login';
} else {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
}