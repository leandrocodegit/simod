import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosel1Component } from './carosel1.component';

describe('Carosel1Component', () => {
  let component: Carosel1Component;
  let fixture: ComponentFixture<Carosel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
