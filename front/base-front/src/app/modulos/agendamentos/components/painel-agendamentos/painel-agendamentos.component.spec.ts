import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAgendamentosComponent } from './painel-agendamentos.component';

describe('PainelAgendamentosComponent', () => {
  let component: PainelAgendamentosComponent;
  let fixture: ComponentFixture<PainelAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAgendamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
