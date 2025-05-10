import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-card-profissional',
  imports: [
    CardModule,
    BadgeModule,
  ],
  templateUrl: './card-profissional.component.html',
  styleUrl: './card-profissional.component.scss'
})
export class CardProfissionalComponent {

}
