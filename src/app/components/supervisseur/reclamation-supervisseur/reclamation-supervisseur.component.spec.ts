import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationSupervisseurComponent } from './reclamation-supervisseur.component';

describe('ReclamationSupervisseurComponent', () => {
  let component: ReclamationSupervisseurComponent;
  let fixture: ComponentFixture<ReclamationSupervisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationSupervisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationSupervisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
