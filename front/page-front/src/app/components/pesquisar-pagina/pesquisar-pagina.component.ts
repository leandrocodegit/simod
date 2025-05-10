import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Popover, PopoverModule } from 'primeng/popover';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-pesquisar-pagina',
  imports: [
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    PopoverModule,
    TableModule
  ],
  templateUrl: './pesquisar-pagina.component.html',
  styleUrl: './pesquisar-pagina.component.scss'
})
export class PesquisarPaginaComponent {

  toggleDataTable(op: Popover, event: any) {
    op.toggle(event);
}
}
