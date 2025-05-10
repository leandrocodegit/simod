import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppModule, authConfig } from './app.module';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    AppModule,
    MegaMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'base-front';

  
  constructor(private oauthService: OAuthService) {
    this.configureAuth();
  }

  configureAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
