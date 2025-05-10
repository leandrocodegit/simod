import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfissionalComponent } from './card-profissional.component';

describe('CardProfissionalComponent', () => {
  let component: CardProfissionalComponent;
  let fixture: ComponentFixture<CardProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProfissionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
