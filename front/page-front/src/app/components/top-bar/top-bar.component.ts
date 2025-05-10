import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../menu/services/layout.service';
import { OAuthService } from 'angular-oauth2-oidc';
 import { SelectModule } from 'primeng/select';
import { ProfileLoginComponent } from '../menu/telas/sidebar/profile-login/profile-login.component';
import { AppConfigurator } from '../../app.configurator';
import { MegaMenuModule } from 'primeng/megamenu';
import { Carosel1Component } from '../carosel/carosel1/carosel1.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
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
    SelectModule,
    MegaMenuModule,
    Carosel1Component,
    MenubarModule,
    AvatarModule,
    DropdownModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  protected items!: MenuItem[];
  protected layoutService;

  megaMenuItems = [
    {
      label: 'Home',
      routerLink: 'carosel'
    },
    {
        label: 'Portais',
        routerLink: '/',
        items: [
                {
                    label: 'Woman',
                    items: [{ label: 'Woman Item' }, { label: 'Woman Item' }, { label: 'Woman Item' }]
                },
                {
                    label: 'Men',
                    items: [{ label: 'Men Item' }, { label: 'Men Item' }, { label: 'Men Item' }]
                }
            ]
    },
    {
        label: 'Governo',
        items: [
                {
                    label: 'Computer',
                    items: [{ label: 'Computer Item' }, { label: 'Computer Item' }]
                },
                {
                    label: 'Camcorder',
                    items: [{ label: 'Camcorder Item' }, { label: 'Camcorder Item' }, { label: 'Camcorder Item' }]
                }
            ],
    },
    {
        label: 'Serviços',
        items: [
                {
                    label: 'Living Room',
                    items: [{ label: 'Living Room Item' }, { label: 'Living Room Item' }]
                },
                {
                    label: 'Kitchen',
                    items: [{ label: 'Kitchen Item' }, { label: 'Kitchen Item' }, { label: 'Kitchen Item' }]
                }
            ]
    },
  {
    label: 'Fotos'
}
];


  constructor(private readonly layoutServiceInstance: LayoutService,
    private oauthService: OAuthService
  ) {
    this.layoutService = layoutServiceInstance;
  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Core',
                  icon: 'pi pi-bolt',
                  shortcut: '⌘+S'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server',
                  shortcut: '⌘+B'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil',
                  shortcut: '⌘+U'
              },
              {
                  separator: true
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette',
                          badge: '2'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette',
                          badge: '3'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3'
      }
  ];

  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
