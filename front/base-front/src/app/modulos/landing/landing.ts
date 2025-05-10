import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FooterWidget } from './components/footerwidget';
import { TopbarWidget } from './components/topbar/topbar.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
      RouterModule,
      RippleModule,
      StyleClassModule,
      ButtonModule,
      DividerModule,
      TopbarWidget,
      FooterWidget
    ],
    template: `
    <div class="layout-wrapper bg-surface-0 dark:bg-surface-900">
    <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" style="border-bottom: solid var(--primary-color);"/>
        <div class="layout-main-container" style="padding-top: 0;">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div class="layout-mask animate-fadein">
        <footer-widget />
        </div>
    </div>
    `
})
export class Landing {}
