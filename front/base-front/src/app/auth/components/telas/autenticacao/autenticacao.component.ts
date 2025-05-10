import { Component, OnDestroy, OnInit } from '@angular/core';
import { OAuthEvent, OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { authConfig } from '../../../../app.module';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { LayoutService } from '../../../../base/components/menu/services/layout.service';

declare var urlRedirect: string;

@Component({
  selector: 'app-autenticacao',
  imports: [],
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.scss'
})
export class AutenticacaoComponent implements OnInit {

  protected host?: any;

  constructor(private readonly authService: AuthService,
    private readonly oauthService: OAuthService,
    private readonly layoutService: LayoutService,
    private readonly navigate: ActivatedRoute,
    private readonly router: Router
  ) {

    oauthService.events.subscribe(event => {
      console.log('Event', event);
      if (event.type == 'discovery_document_loaded' || event.type === 'user_profile_loaded') {
        if (this.oauthService.hasValidAccessToken() && this.authService.valid()) {
            this.router.navigate(['/painel']);
        }
      }
    })


  }

  ngOnInit(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      console.log('Valid', this.oauthService.hasValidAccessToken(), this.authService.valid());
      if (this.oauthService.hasValidAccessToken() && this.authService.valid()) {
        var intervalo = setInterval(() => {
          this.oauthService.loadUserProfile().then((user: any) => { 
            clearInterval(intervalo);
          });
        }, 2000);

      } else {
        this.oauthService.initCodeFlow();
      }
    });
  }
}
