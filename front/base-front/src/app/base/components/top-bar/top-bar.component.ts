import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../../../app.configurator';
import { LayoutService } from '../menu/services/layout.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { ProfileLoginComponent } from '../menu/telas/sidebar/profile-login/profile-login.component';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    AppConfigurator,
    RouterModule,
    ProfileLoginComponent,
    SelectModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  protected items!: MenuItem[];
  protected layoutService;

  constructor(private readonly layoutServiceInstance: LayoutService,
    private oauthService: OAuthService
  ) {
    this.layoutService = layoutServiceInstance;
  }

  ngOnInit(): void {
    //  this.gateway.login().subscribe(response => console.log(response));

  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
