import { Component, OnDestroy, OnInit } from '@angular/core';
import { OAuthEvent, OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { authConfig } from '../../../../app.module';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

declare var urlRedirect: string;

@Component({
  selector: 'app-autenticacao',
  imports: [],
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.scss'
})
export class AutenticacaoRedirectComponent implements OnInit {

  protected host?: any;
  protected params?: any;

  constructor(private readonly authService: AuthService,
    private readonly oauthService: OAuthService,
    private readonly navigate: ActivatedRoute,
    private readonly router: Router
  ) {

    oauthService.events.subscribe((e: any) => {
      console.log('Event', e);
      console.log("this.oauthService.hasValidAccessToken()", this.oauthService.hasValidAccessToken());

    })
  }

  private intervalo: any;
  ngOnInit(): void {
    this.oauthService.configure(authConfig);
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {



          if(!this.params)
          if(this.oauthService.hasValidAccessToken()){
            //this.oauthService.redirectUri = window.location.origin + '/painel';
          }
            this.oauthService.initCodeFlow();

      });
  }

  ngOnInitx(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.oauthService.events
        .pipe()
        .subscribe((e: any) => {
          console.log('✅ Login bem-sucedido!', e);
          this.navigate.queryParams.subscribe(params => {
            const returnUrl = params['returnUrl'] || '/';
            console.log('urlRedirect', returnUrl);
            this.oauthService.redirectUri = window.location.origin + returnUrl;

          });

          if (e.type == 'token_received') {

            this.router.navigate(['/'])
          }
        });

      if (this.authService.valid()) {


      } else {
        console.log('initCodeFlow');
        this.navigate.queryParams.subscribe(params => {
          const returnUrl = params['returnUrl'] || '/';
          console.log('urlRedirect', returnUrl);
          console.log('this.authService.valid()');
          this.oauthService.customQueryParams = {
            'urlRedirect': 'urlRedirect'
          };
          this.router.navigate(['/'])
          this.oauthService.initCodeFlow();
        });


      }
    });
  }

  login(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.oauthService.initImplicitFlowInternal();
    });
  }

  private redirect() {

  }

  ngOnDestroy(): void {
    if (this.intervalo)
      clearInterval(this.intervalo);
  }
}
