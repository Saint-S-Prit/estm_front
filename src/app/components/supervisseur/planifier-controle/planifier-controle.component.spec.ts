import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierControleComponent } from './planifier-controle.component';

describe('PlanifierControleComponent', () => {
  let component: PlanifierControleComponent;
  let fixture: ComponentFixture<PlanifierControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanifierControleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifierControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
