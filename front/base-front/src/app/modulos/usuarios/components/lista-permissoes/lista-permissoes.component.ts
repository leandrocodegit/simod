import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { HorarioAtendimentoComponent } from '../../../../shared/components/horario-atendimento/horario-atendimento.component';
import { TituloPesquisaComponent } from '../../../../shared/components/titulo-pesquisa/titulo-pesquisa.component';


@Component({
  selector: 'app-lista-permissoes',
  imports: [
    CommonModule,
    DataViewModule,
    FormsModule,
    SelectButtonModule,
    PickListModule,
    OrderListModule,
    TagModule,
    ButtonModule,
    HorarioAtendimentoComponent,
    TituloPesquisaComponent
  ],
  templateUrl: './lista-permissoes.component.html',
  styleUrl: './lista-permissoes.component.scss',
  styles: `
  ::ng-deep {
      .p-orderlist-list-container {
          width: 100%;
      }
  }
`,
})
export class ListaPermissoesComponent implements OnInit {

  layout: 'list' | 'grid' = 'list';

  options = ['list', 'grid'];

  products: any[] = [];

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  ngOnInit(): void {

    this.products = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }
  ];

  this.targetCities = [];

  this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }
  ];

  }

}

