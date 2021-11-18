import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMessageRecuComponent } from './item-message-recu.component';

describe('ItemMessageRecuComponent', () => {
  let component: ItemMessageRecuComponent;
  let fixture: ComponentFixture<ItemMessageRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMessageRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMessageRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
