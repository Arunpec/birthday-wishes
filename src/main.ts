import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';  // Import this
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Include provideAnimations() in the appConfig providers
bootstrapApplication(AppComponent, {
  providers: [...appConfig.providers, provideAnimations()]
})
.catch((err) => console.error(err));
