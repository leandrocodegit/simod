import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEstoqueComponent } from './dashboard-estoque.component';

describe('DashboardEstoqueComponent', () => {
  let component: DashboardEstoqueComponent;
  let fixture: ComponentFixture<DashboardEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEstoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
