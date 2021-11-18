import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisseurComponent } from './supervisseur.component';

describe('SupervisseurComponent', () => {
  let component: SupervisseurComponent;
  let fixture: ComponentFixture<SupervisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
