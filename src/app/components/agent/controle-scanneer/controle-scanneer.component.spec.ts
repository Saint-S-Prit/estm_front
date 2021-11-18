import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleScanneerComponent } from './controle-scanneer.component';

describe('ControleScanneerComponent', () => {
  let component: ControleScanneerComponent;
  let fixture: ComponentFixture<ControleScanneerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleScanneerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleScanneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
