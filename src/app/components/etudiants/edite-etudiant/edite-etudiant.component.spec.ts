import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeEtudiantComponent } from './edite-etudiant.component';

describe('EditeEtudiantComponent', () => {
  let component: EditeEtudiantComponent;
  let fixture: ComponentFixture<EditeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
