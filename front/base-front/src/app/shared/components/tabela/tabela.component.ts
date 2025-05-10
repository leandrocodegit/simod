import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-tabela',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    TagModule
  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {

 @Input() itens!: any[];

 @Input() cols!: any[];


}
