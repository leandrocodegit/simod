import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['*'],
        sendAccessToken: true,
      },
    }),
  ],
})
export class AppModule { }

import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment.dev';

export const authConfig: AuthConfig = {
  issuer: `http://localhost:8080/realms/${window.location.hostname}`,
  redirectUri: window.location.origin + '/auth',
  postLogoutRedirectUri: window.location.origin,
  clientId: window.location.origin,
  responseType: 'code',
  scope: `openid profile email`,
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  silentRefreshRedirectUri: window.location.origin + '/assets/silent-refresh.html',
  timeoutFactor: 0.75,
  sessionChecksEnabled: false,
  useSilentRefresh: false,
  decreaseExpirationBySec: 3000,
  clockSkewInSec: 0,
  requireHttps: false
};



