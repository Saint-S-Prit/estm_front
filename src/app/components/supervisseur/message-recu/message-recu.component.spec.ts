import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRecuComponent } from './message-recu.component';

describe('MessageRecuComponent', () => {
  let component: MessageRecuComponent;
  let fixture: ComponentFixture<MessageRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
