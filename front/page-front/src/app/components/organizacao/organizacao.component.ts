import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PanelModule } from 'primeng/panel';
import { CardProfissionalComponent } from './card-profissional/card-profissional.component';

@Component({
  selector: 'app-organizacao',
  imports: [
    OrganizationChartModule,
    CardProfissionalComponent,
    PanelModule
  ],
  templateUrl: './organizacao.component.html',
  styleUrl: './organizacao.component.scss'
})
export class OrganizacaoComponent {

  data: TreeNode[] = [
    {
        label: 'Prefeito',
        expanded: true,
        data: 'ar',
        children: [
            {
                label: 'Secretarias',
                expanded: true,
                data: 'ar',
                children: [
                    {
                        label: 'Saúde',
                        data: 'ar'
                    },
                    {
                        label: 'Educação',
                        data: 'hr'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                data: 'fr',
                children: [
                    {
                        label: 'France',
                        data: 'fr'
                    },
                    {
                        label: 'Morocco',
                        data: 'ma'
                    }
                ]
            }
        ]
    }
];
}
