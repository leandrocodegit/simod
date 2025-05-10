import { Routes } from '@angular/router';
import { PainelAgendamentosComponent } from './modulos/agendamentos/components/painel-agendamentos/painel-agendamentos.component';
import { PainelOficinaComponent } from './modulos/oficina/components/painel-oficina/painel-oficina.component';
import { PainelEstoqueComponent } from './modulos/agendamentos/components/painel-estoque/painel-estoque.component';
import { DashboardAgendamentosComponent } from './modulos/agendamentos/components/dashboard-agendamentos/dashboard-agendamentos.component';
import { DashboardEstoqueComponent } from './modulos/estoque/components/telas/dashboard-estoque/dashboard-estoque.component';
import { PainelDashboardComponent } from './base/components/menu/telas/dashboard/painel-dashboard/painel-dashboard.component';
import { CalendarioGridComponent } from './modulos/agendamentos/components/calendario-grid/calendario-grid.component';
import { LoginSocialComponent } from './auth/components/telas/login-social/login-social.component';
import { AuthGuard } from './auth/components/services/auth.guard';
import { AutenticacaoComponent } from './auth/components/telas/autenticacao/autenticacao.component';
import { AppLayout } from './base/components/menu/telas/sidebar/app.layout';
import { ListaAgendaDiaComponent } from './modulos/agendamentos/components/lista-agenda-dia/lista-agenda-dia.component';
import { PainelProfissionalComponent } from './modulos/profissional/components/painel-profissional/painel-profissional.component';
import { ListaProfissionaisComponent } from './modulos/profissional/components/lista-profissionais/lista-profissionais.component';
import { ListaSalasComponent } from './modulos/agendamentos/components/lista-salas/lista-salas.component';
import { CardProfissionalComponent } from './modulos/profissional/components/card-profissional/card-profissional.component';
import { FormProfissionalComponent } from './modulos/profissional/components/form-profissional/form-profissional.component';
import { ConfiguracaoesAgendaComponent } from './modulos/agendamentos/components/configuracaoes-agenda/configuracaoes-agenda.component';
import { ListaHorariosAgendaComponent } from './modulos/agendamentos/components/lista-horarios-agenda/lista-horarios-agenda.component';
import { PainelUsuarioComponent } from './modulos/usuarios/components/painel-usuario/painel-usuario.component';
import { ListaUsuariosComponent } from './modulos/usuarios/components/lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './modulos/usuarios/components/form-usuario/form-usuario.component';
import { PermissoesUsuarioComponent } from './modulos/usuarios/components/permissoes-usuario/permissoes-usuario.component';
import { ListaPermissoesComponent } from './modulos/usuarios/components/lista-permissoes/lista-permissoes.component';
import { Landing } from './modulos/landing/landing';
import { CadastroComponent } from './modulos/landing/cadastro/cadastro.component';
import { Home } from './modulos/landing/components/home';

export const routes: Routes = [


  {
    path: 'painel', component: AppLayout, canActivate: [AuthGuard], children: [
      {
        path: 'agendamentos', component: PainelAgendamentosComponent, children: [
          { path: 'calendario', component: CalendarioGridComponent },
          { path: 'agenda/:dia', component: ListaAgendaDiaComponent },
          { path: 'configuracoes', component: ConfiguracaoesAgendaComponent },
          { path: 'horarios', component: ListaHorariosAgendaComponent },
          { path: '**', component: DashboardAgendamentosComponent }
        ]
      },
      {
        path: 'profissional', component: PainelProfissionalComponent, children: [
          { path: '', component: ListaProfissionaisComponent },
          { path: 'form', component: FormProfissionalComponent },
          { path: 'cards', component: CardProfissionalComponent }
        ]
      },
      {
        path: 'users', component: PainelUsuarioComponent, children: [
          { path: '', component: ListaUsuariosComponent },
          { path: 'form', component: FormUsuarioComponent },
          { path: 'restricoes', component: ListaPermissoesComponent },
          { path: 'restricoes/form', component: PermissoesUsuarioComponent },
        ]
      },
      {
        path: 'oficina', component: PainelOficinaComponent, children: [
          { path: '**', component: DashboardAgendamentosComponent }
        ]
      },
      {
        path: 'estoque', component: PainelEstoqueComponent, children: [
          { path: '**', component: DashboardEstoqueComponent }
        ]
      },
      { path: '**', component: PainelDashboardComponent }
    ],

  },
  { path: 'login', component: LoginSocialComponent },
  { path: 'auth', component: AutenticacaoComponent },

  { path: '', component: Landing, children: [
    { path: '', component: Home },
    { path: 'cadastro', component: CadastroComponent },
  ] }
];
