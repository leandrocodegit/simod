import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { ModuloService } from '../../services/modulo.service';
import { Menu } from '../../../../models/modulo.model';
import { SelectModule } from 'primeng/select';
import { AuthService } from '../../../../../auth/components/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule,SelectModule, FormsModule],
  template: `
  <div style="width:100%">
  <p-select [(ngModel)]="tenant" (onChange)="selectTenant($event)" [options]="tenants" placeholder="Cliente" [style]="{'width': '100%'}"/>
  </div>
  <ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item?.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
  model: Menu[] = [];
  protected tenants:any[] = [];
  protected tenant: any;

  constructor(
    private readonly moduloService: ModuloService,
    private readonly authService: AuthService
  ){}

  ngOnInit() {

/*     const userJson = sessionStorage.getItem('id_token_claims_obj');
    if (userJson) {
      let user: any = JSON.parse(userJson);
      this.tenants = user.tenants;
      this.tenant = sessionStorage.getItem("X-Tenant-ID");
      if(!this.tenant)
       this.tenant = this.tenants[0]
    } */

    this.moduloService.listaModulo().subscribe(response => {
      this.model.push(
        {
          label: '',
          items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', separator:false, routerLink: ['/painel'] }]
        }
      );
      response.forEach(modulo => {
        this.model.push(modulo.menu)
      });
    });
  }

  selectTenant(event: any){
    this.tenant = event.value;
    sessionStorage.setItem("X-Tenant-ID", this.tenant);
  }
}
