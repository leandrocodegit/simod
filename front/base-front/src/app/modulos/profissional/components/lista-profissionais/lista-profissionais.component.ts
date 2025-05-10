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

@Component({
  selector: 'app-lista-profissionais',
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
    TituloPesquisaComponent
],
  templateUrl: './lista-profissionais.component.html',
  styleUrl: './lista-profissionais.component.scss'
})
export class ListaProfissionaisComponent implements OnInit {

  balanceFrozen: boolean = false;
  profissionais:any[] = [];

  ngOnInit(): void {
    this.profissionais = [
      {
        id: 1,
        nome: 'Leandro'
      }
    ]
  }

}

