import { Component } from '@angular/core';
import { StatsWidgetComponent } from '../stats-widget/stats-widget.component';
import { ProximasAgendasComponent } from '../proximas-agendas/proximas-agendas.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-painel-dashboard',
  standalone: true,
  imports: [
    ChartModule,
    StatsWidgetComponent,
    ProximasAgendasComponent
  ],
  templateUrl: './painel-dashboard.component.html',
  styleUrl: './painel-dashboard.component.scss'
})
export class PainelDashboardComponent {

  pieData: any;
  pieOptions: any;
constructor(private authService: OAuthService
) {}


ngOnInit(): void {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  this.pieData = {
    labels: ['Livres', 'Ocupadas'],
    datasets: [
        {
            data: [540, 325],
            backgroundColor: [documentStyle.getPropertyValue('--p-teal-500'), documentStyle.getPropertyValue('--p-rose-500'), documentStyle.getPropertyValue('--p-teal-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--p-teal-400'), documentStyle.getPropertyValue('--p-rose-400'), documentStyle.getPropertyValue('--p-teal-400')]
        }
    ]
};

this.pieOptions = {
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: textColor
            }
        }
    }
};
}

signInWithGoogle(): void {
  this.authService.loadUserProfile().then(profile => {
    console.log('Perfil do usuário:', profile);
  });
}
}
