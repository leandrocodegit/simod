import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelecionaDiasSemadaComponent } from '../../../../shared/components/seleciona-dias-semada/seleciona-dias-semada.component';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { VoltarSalvarComponent } from '../../../../shared/components/voltar-salvar/voltar-salvar.component';


@Component({
  selector: 'app-form-profissional',
  standalone: true,
  imports: [
    InputTextModule,
    FluidModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    TextareaModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    SelecionaDiasSemadaComponent,
    TableModule,
    DatePipe,
    VoltarSalvarComponent
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  templateUrl: './form-profissional.component.html',
  styleUrl: './form-profissional.component.scss'
})
export class FormProfissionalComponent {

  product: any
  horarios: any[] = [
    {
      dia: 'Segunda-feira',
      inicio: new Date,
      termino: new Date
    },
    {
      dia: 'Segunda-feira',
      inicio: new Date,
      termino: new Date
    }
  ]

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];


  dropdownItem = null;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  salvar() {
    console.log('Salvar');

    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Profissional foi salvo',
      life: 3000
    });

  }

  hideDialog() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000
        });
      }
    });
  }
}

