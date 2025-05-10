import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-voltar-salvar',
  imports: [
    ButtonModule
  ],
  templateUrl: './voltar-salvar.component.html',
  styleUrl: './voltar-salvar.component.scss'
})
export class VoltarSalvarComponent {

  @Output() salvarEmit = new EventEmitter();
  @Input() disable = false;

  constructor(private location: Location) {}

  voltar(){
    this.location.back();
  }

  salvar(){
    this.salvarEmit.emit();
  }

}
