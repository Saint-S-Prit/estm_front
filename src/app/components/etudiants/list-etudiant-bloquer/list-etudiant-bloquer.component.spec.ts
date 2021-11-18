import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantBloquerComponent } from './list-etudiant-bloquer.component';

describe('ListEtudiantBloquerComponent', () => {
  let component: ListEtudiantBloquerComponent;
  let fixture: ComponentFixture<ListEtudiantBloquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudiantBloquerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantBloquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
