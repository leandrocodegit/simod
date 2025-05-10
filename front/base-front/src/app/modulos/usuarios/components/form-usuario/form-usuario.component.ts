import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { VoltarSalvarComponent } from '../../../../shared/components/voltar-salvar/voltar-salvar.component';
import { HorarioAtendimentoComponent } from '../../../../shared/components/horario-atendimento/horario-atendimento.component';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioRequest } from '../../models/user-request.model';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FluidModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    TableModule,
    FieldsetModule,
    CheckboxModule,
    MessageModule,
    DatePickerModule,
    HorarioAtendimentoComponent,
    VoltarSalvarComponent
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.scss'
})
export class FormUsuarioComponent {

  protected semRestricao:boolean = false;
  protected usuario: UsuarioRequest = {} as UsuarioRequest;
  protected form: FormGroup

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
    { name: 'Administrador', code: 'Option 1' },
    { name: 'Usuário regular', code: 'Option 2' }
  ];


  dropdownItem = null;

  constructor(
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly usuarioService: UsuarioService,
    private readonly formBuilder: FormBuilder
  ) {

    this.form = formBuilder.group({
      firstName: ['', Validators.required],
      documento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dataNascimento: ['']
    })
  }

  isInvalid(field: string){
    return this.form.get(field)?.touched && !this.form.get(field)?.valid
  }

  salvar() {
    this.usuarioService.criarUsuario(this.usuario).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Usuário foi salvo',
        life: 3000
      });
    }, fail => {
      this.messageService.add({
        severity: 'error',
        summary: 'Falha',
        detail: 'Falhou ao salvar',
        life: 3000
      });
    })



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

