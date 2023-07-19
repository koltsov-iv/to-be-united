import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBlockComponent } from './action-block.component';

describe('ActionBlockComponent', () => {
  let component: ActionBlockComponent;
  let fixture: ComponentFixture<ActionBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionBlockComponent]
    });
    fixture = TestBed.createComponent(ActionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
