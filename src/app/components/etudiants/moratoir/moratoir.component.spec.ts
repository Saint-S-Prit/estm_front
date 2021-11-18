import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoratoirComponent } from './moratoir.component';

describe('MoratoirComponent', () => {
  let component: MoratoirComponent;
  let fixture: ComponentFixture<MoratoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoratoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoratoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
