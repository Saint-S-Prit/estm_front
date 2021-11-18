import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationEtudiantsComponent } from './reclamation-etudiants.component';

describe('ReclamationEtudiantsComponent', () => {
  let component: ReclamationEtudiantsComponent;
  let fixture: ComponentFixture<ReclamationEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
