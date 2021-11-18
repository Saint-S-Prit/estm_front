import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAndSuiviComponent } from './history-and-suivi.component';

describe('HistoryAndSuiviComponent', () => {
  let component: HistoryAndSuiviComponent;
  let fixture: ComponentFixture<HistoryAndSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAndSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAndSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
