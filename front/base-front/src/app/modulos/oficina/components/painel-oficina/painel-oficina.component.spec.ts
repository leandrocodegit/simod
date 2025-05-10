import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelOficinaComponent } from './painel-oficina.component';

describe('PainelOficinaComponent', () => {
  let component: PainelOficinaComponent;
  let fixture: ComponentFixture<PainelOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelOficinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
