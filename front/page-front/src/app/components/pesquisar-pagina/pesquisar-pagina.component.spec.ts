import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarPaginaComponent } from './pesquisar-pagina.component';

describe('PesquisarPaginaComponent', () => {
  let component: PesquisarPaginaComponent;
  let fixture: ComponentFixture<PesquisarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisarPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
