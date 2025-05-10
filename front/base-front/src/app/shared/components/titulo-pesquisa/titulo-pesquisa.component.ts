import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-titulo-pesquisa',
  imports: [
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    RouterModule
  ],
  templateUrl: './titulo-pesquisa.component.html',
  styleUrl: './titulo-pesquisa.component.scss'
})
export class TituloPesquisaComponent {

  @Input() value = {
    titulo: '',
    botaoAdd: '',
    routerLink: '',
    showAtivos: false
  };
  protected ativos = false;

}
