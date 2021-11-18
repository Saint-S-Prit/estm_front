import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleSaisiComponent } from './controle-saisi.component';

describe('ControleSaisiComponent', () => {
  let component: ControleSaisiComponent;
  let fixture: ComponentFixture<ControleSaisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleSaisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleSaisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
