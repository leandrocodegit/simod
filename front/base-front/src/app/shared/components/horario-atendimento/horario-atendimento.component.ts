import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-horario-atendimento',
  imports: [
    BadgeModule,
    StyleClassModule
  ],
  templateUrl: './horario-atendimento.component.html',
  styleUrl: './horario-atendimento.component.scss'
})
export class HorarioAtendimentoComponent {

}
