import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu,
      MenubarModule
    ],
    template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
