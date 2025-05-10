import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';
import { TituloPesquisaComponent } from '../../../../shared/components/titulo-pesquisa/titulo-pesquisa.component';
import { TabelaComponent } from '../../../../shared/components/tabela/tabela.component';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    RouterModule,
    TituloPesquisaComponent,
    TabelaComponent
  ],
  templateUrl: './lista-usuarios.component.html'
})
export class ListaUsuariosComponent implements OnInit {

  balanceFrozen: boolean = false;
  profissionais: any[] = [];
  protected cols: any = [
    { header: 'Id', field: 'id' },
    { header: 'Nome', field: 'nome' },
    { header: 'Perfil', field: 'perfil' },
    { header: 'Status', field: 'status' }
  ]
  protected itens = [
    {id: 1, nome: 'Leandro Pereira de Oliveira', perfil: 'Administrador', status: {value: 'Ativo', severity:"success"}},
    {id: 1, nome: 'Leandro Pereira de Oliveira', perfil: 'Administrador', status: {value: 'Inativo', severity:"Warning"}}

  ]

  ngOnInit(): void {
    this.profissionais = [
      {
        id: 1,
        nome: 'Leandro'
      }
    ]
  }

}

