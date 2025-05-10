import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule, DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-proximas-agendas',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    DatePipe,
    TagModule
  ],
  templateUrl: './proximas-agendas.component.html',
  styleUrl: './proximas-agendas.component.scss'
})
export class ProximasAgendasComponent {

  protected agendas: any[] = [
    {
      severity: 'danger',
      value: 'Menos de 30 minutos',
      data: new Date,
      nome: 'Fulano',
      sala: 1
    },
    {
      severity: '',
      value: '',
      data: new Date,
      nome: 'Fulano',
      sala: 1
    }, {
      severity: 'danger',
      value: 'Menos de 30 minutos',
      data: new Date,
      nome: 'Fulano',
      sala: 1
    },
    {
      severity: '',
      value: '',
      data: new Date,
      nome: 'Fulano',
      sala: 1
    },
  ];
}
