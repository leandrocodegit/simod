import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { HorarioAtendimentoComponent } from '../../../../shared/components/horario-atendimento/horario-atendimento.component';


@Component({
  selector: 'app-card-profissional',
  imports: [
    CardModule,
    BadgeModule,
    HorarioAtendimentoComponent
  ],
  templateUrl: './card-profissional.component.html',
  styleUrl: './card-profissional.component.scss'
})
export class CardProfissionalComponent {

}
